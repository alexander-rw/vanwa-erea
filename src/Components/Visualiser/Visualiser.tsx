import React from "react";
import CytoscapeComponent from "react-cytoscapejs";

import { deities, findDeityById } from "../../@data/deities";
import { Deity } from "../../@types/Deities/Deity";
import { GraphNode, GraphEdge } from "../../@types/Deities/Graph/GraphTypes";
import { cytoscapeStyles } from "../../Style/ts/cytoscapeStyle";
import { asCartesian } from "../../Utilities/Coordinate";
import { screen } from "../../Utilities/Screen";
import { ConnectedPanelUpdater } from "../Panel/ConnectedPanelUpdater";
import { PanelUpdater } from "../Panel/PanelUpdater";

const radius = (screen.height / 2) - 50;

export class Vis extends PanelUpdater<{}> {
  public static readonly cyName: string = "cytoscapeDeityVisualiser";

  componentDidMount(): void {
    window[Vis.cyName].on("tap", "node", (event: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
      const { target } = event;
      const deity = findDeityById(target.id());
      if (deity !== undefined) {
        this.updatePanelWithDataObject(deity);
      }
    });
  }

  render = (): JSX.Element => (
    <CytoscapeComponent
      className="phlogiston-bg"
      global={Vis.cyName}
      elements={[...Vis.nodes, ...Vis.edges]}
      style={{ width: "100vw", height: "100vh" }}
      stylesheet={cytoscapeStyles}
      userPanningEnabled={false}
      autoungrabify={true}
      autolock={true}
    />
  );

  private static edges = deities
    .map(x => ({
      Id: x.id,
      links: x.linkedToDeityIds,
    }))
    .flatMap(x => x.links
      .map(d => ({
        source: x.Id,
        target: d,
        label: `${x.Id} to ${d}`,
      })))
    .map(x => ({ data: x } as GraphEdge));

  private static nodes = deities
    .sort((a: Deity, b: Deity) => {
      if (a.displayOrder < b.displayOrder) {
        return 1;
      }

      if (a.displayOrder > b.displayOrder) {
        return -1;
      }

      return 0;
    })
    .map(x => ({ data: { id: x.id, label: x.id }, classes: "outline" } as GraphNode))
    .map((item, index) => {
      const angularChange = ((index * 2 * Math.PI) / deities.length) - 1.2;
      const radialCoords: [number, number] = [radius, angularChange];
      const { x, y } = asCartesian(radialCoords);
      const position = { x: x + window.innerWidth / 2, y: (y + 30) + window.innerHeight / 2 };
      return {
        ...item,
        position,
      } as GraphNode;
    });
}

export const Visualiser = ConnectedPanelUpdater(Vis);
