
export interface GraphData {
  links: GraphEdge[];
  nodes: GraphNode[];
}

export interface Position {
  x: number;
  y: number;
}

export interface GraphNode {
  data: {
    id: string;
    label: string;
  };
  position?: Position;
}

export interface GraphEdge {
  data: {
    source: string;
    target: string;
    label: string;
  };
}

export type GraphObject = GraphNode | GraphEdge;
