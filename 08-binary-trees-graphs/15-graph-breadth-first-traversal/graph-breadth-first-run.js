const Graph = require("./graph");
const breadthFirstTraversal = require("./graph-breadth-first");

// const g = new Graph();
// g.addVertex('Tokyo');
// g.addVertex('Dallas');
// g.addVertex('Aspen');
// g.addEdge('Tokyo', 'Dallas');
// g.addEdge('Dallas', 'Aspen');
// g.addEdge('Tokyo', 'Aspen');
// g.removeEdge('Dallas', 'Aspen');
// g.removeVertex('Aspen');

// Example Graph
// A --- B
// |     |
// |     |
// C --- D
// |     |
// |     |
// E --- F

const graph = new Graph();

// Add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

// Add edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

graph.printAdjacencyList();

console.log(breadthFirstTraversal(graph, "A"));
