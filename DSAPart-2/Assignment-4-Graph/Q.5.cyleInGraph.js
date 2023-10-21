class Graph {
    constructor(vertices) {
      this.vertices = vertices;
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    addEdge(startVertex, endVertex) {
      if (this.adjacencyList.has(startVertex) && this.adjacencyList.has(endVertex)) {
        this.adjacencyList.get(startVertex).push(endVertex);
      }
    }
  
    isCyclic() {
      const visited = new Array(this.vertices).fill(false);
      const stack = new Array(this.vertices).fill(false);
  
      const isCyclicRecursive = (vertex) => {
        if (!visited[vertex]) {
          visited[vertex] = true;
          stack[vertex] = true;
  
          const neighbors = this.adjacencyList.get(vertex);
          for (const neighbor of neighbors) {
            if (!visited[neighbor] && isCyclicRecursive(neighbor)) {
              return true;
            } else if (stack[neighbor]) {
              return true;
            }
          }
        }
        stack[vertex] = false;
        return false;
      };
  
      for (let i = 0; i < this.vertices; i++) {
        if (isCyclicRecursive(i)) {
          return true;
        }
      }
  
      return false;
    }
  }
  
  // Example usage:
  const graph = new Graph(4);
  
  graph.addVertex(0);
  graph.addVertex(1);
  graph.addVertex(2);
  graph.addVertex(3);
  
  graph.addEdge(0, 1);
  graph.addEdge(1, 2);
  graph.addEdge(2, 3);
  graph.addEdge(3, 1); // Creating a cycle: 3 -> 1
  
  if (graph.isCyclic()) {
    console.log("The graph contains a cycle.");
  } else {
    console.log("The graph is acyclic.");
  }
  