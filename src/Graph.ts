/**
 * 线段
 */
type isDirected = boolean;


interface Edge<T = any, D = boolean> {
  uid: string;
  isDirected: D;
  endpoint: [string, string];
  data?: T;
  source: D extends true ? string : never;
  target: D extends true ? string : never;
}

const edge: Edge = {
  uid: "1",
  isDirected: false,
  endpoint: ["start", "end"],
  source: "",
  target: ""
};

const directedEdge: Edge = {
  uid: "1",
  isDirected: true,
  endpoint: ["start", "end"],
  source: "start",
  target: "end",
};



















/**
 * 点
 */
interface Vertice<T = any> {
  uid: string;
  data?: T;
  // next?: Vertice | Vertice[];
  // prev?: Vertice | Vertice[];
  // graph?: Graph;
  segements?: Edge[];
}

class Vertice {}

// const mockNode = (uid: number, data?: any): Vertice<any> => ({
//   uid,
//   data: data ?? uid,
// });
// const mockEdge = (source: number, target: number, data?: any): Edge<any> => ({
//   source,
//   target,
//   data: data ?? `${source} -> ${target}`,
// });

/**
 *
 */

// class Graph<T = any, E = any> {
//   #nodes;
//   #edges;
//   #nodeMap = new Map();

//   constructor(nodes?: Vertice<T>[], edges?: Edge<E>[]) {
//     this.#nodes = nodes || [];
//     this.#edges = edges || [];
//   }

//   addNode(node: T) {
//     this.#nodes.push(node);
//   }
// }

// const nodes = [
//   mockNode(1, "start"),
//   mockNode(2),
//   mockNode(31),
//   mockNode(32),
//   mockNode(10, "end"),
// ];
// const edges = [
//   mockEdge(1, 2),
//   mockEdge(2, 31),
//   mockEdge(2, 32),
//   mockEdge(31, 10),
//   mockEdge(32, 10),
// ];
// const graph = new Graph(nodes, edges);
