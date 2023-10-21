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
  
    bfs(startingVertex) {
      const visited = new Array(this.vertices).fill(false);
      const queue = [];
  
      visited[startingVertex] = true;
      queue.push(startingVertex);
  
      while (queue.length) {
        const currentVertex = queue.shift();
        console.log(`Visited vertex: ${currentVertex}`);
  
        const neighbors = this.adjacencyList.get(currentVertex);
        for (const neighbor of neighbors) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        }
      }
    }
  }
  
  // Example usage:
  const graph = new Graph(6);
  
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(1, 3);
  graph.addEdge(2, 4);
  graph.addEdge(3, 5);
  
  console.log("Breadth-First Traversal starting from vertex 0:");
  graph.bfs(0);
  