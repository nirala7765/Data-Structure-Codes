class Graph {
    constructor(vertices) {
      this.vertices = vertices;
      this.adjacencyMatrix = Array.from({ length: vertices }, () => Array(vertices).fill(0));
    }
  
    addEdge(vertex1, vertex2) {
      if (vertex1 >= 0 && vertex1 < this.vertices && vertex2 >= 0 && vertex2 < this.vertices) {
        this.adjacencyMatrix[vertex1][vertex2] = 1;
        this.adjacencyMatrix[vertex2][vertex1] = 1; // For an undirected graph
      }
    }
  
    getVertices() {
      const vertices = [];
      for (let i = 0; i < this.vertices; i++) {
        vertices.push(i);
      }
      return vertices;
    }
  
    getEdges() {
      const edges = [];
      for (let i = 0; i < this.vertices; i++) {
        for (let j = i + 1; j < this.vertices; j++) {
          if (this.adjacencyMatrix[i][j] === 1) {
            edges.push([i, j]);
          }
        }
      }
      return edges;
    }
  }
  
  // Example usage:
  const graph = new Graph(5);
  
  graph.addEdge(0, 1);
  graph.addEdge(1, 2);
  graph.addEdge(2, 3);
  graph.addEdge(3, 4);
  graph.addEdge(4, 0);
  
  console.log("Vertices:", graph.getVertices());
  console.log("Edges:", graph.getEdges());
  