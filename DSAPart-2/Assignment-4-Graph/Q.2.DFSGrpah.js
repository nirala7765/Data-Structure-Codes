class Graph {
    constructor(vertices) {
      this.vertices = vertices;
      this.adjacencyList = new Map();
      for (let i = 0; i < vertices; i++) {
        this.adjacencyList.set(i, []);
      }
    }
  
    addEdge(vertex, neighbor) {
      this.adjacencyList.get(vertex).push(neighbor);
      this.adjacencyList.get(neighbor).push(vertex); // For an undirected graph
    }
  
    dfs(startingVertex) {
      const visited = new Array(this.vertices).fill(false);
  
      const dfsRecursive = (vertex) => {
        visited[vertex] = true;
        console.log(`Visited vertex: ${vertex}`);
  
        const neighbors = this.adjacencyList.get(vertex);
        for (const neighbor of neighbors) {
          if (!visited[neighbor]) {
            dfsRecursive(neighbor);
          }
        }
      };
  
      dfsRecursive(startingVertex);
    }
  }
  
  // Example usage:
  const graph = new Graph(6);
  
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(1, 3);
  graph.addEdge(2, 4);
  graph.addEdge(3, 5);
  
  console.log("Depth-First Traversal starting from vertex 0:");
  graph.dfs(0);
  