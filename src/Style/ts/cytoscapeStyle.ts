/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphStyle } from "../../@types/Deities/Graph/GraphStyle";

export const cytoscapeStyles: GraphStyle[] = [
  {
    selector: "node",
    style: {
      width: 20,
      height: 20,
      "background-color": "black",
    },
  },
  {
    selector: "edge",
    style: {
      width: 3,
      "line-color": "#a9a9a9",
    },
  },
  {
    selector: "node[label]",
    style: {
      label: "data(label)",
    },
  },
  {
    selector: ".outline",
    style: {
      color: "#ffffff",
      "text-outline-color": "#000000",
      "text-outline-width": 2,
    },
  },
];
