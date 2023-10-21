class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1); // For an undirected graph
      }
    }
  
    getVertices() {
      return Array.from(this.adjacencyList.keys());
    }
  
    getEdges(vertex) {
      return this.adjacencyList.get(vertex);
    }
  }
  
  // Example usage:
  const graph = new Graph();
  
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  graph.addEdge('C', 'D');
  graph.addEdge('D', 'E');
  graph.addEdge('E', 'A');
  
  console.log("Vertices:", graph.getVertices());
  console.log("Edges for 'A':", graph.getEdges('A'));
  