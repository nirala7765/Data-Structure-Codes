class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      this.root = this.insertNode(this.root, data);
    }
  
    insertNode(node, data) {
      if (node === null) {
        return new Node(data);
      }
  
      if (data < node.data) {
        node.left = this.insertNode(node.left, data);
      } else if (data > node.data) {
        node.right = this.insertNode(node.right, data);
      }
  
      return node;
    }
  
    // Breadth-First Search (BFS)
    bfs() {
      const result = [];
      if (!this.root) return result;
  
      const queue = [];
      queue.push(this.root);
  
      while (queue.length > 0) {
        const current = queue.shift();
        result.push(current.data);
  
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
  
      return result;
    }
  
    // Depth-First Search (DFS) - Preorder
    dfsPreorder(node, result = []) {
      if (node) {
        result.push(node.data);
        this.dfsPreorder(node.left, result);
        this.dfsPreorder(node.right, result);
      }
      return result;
    }
  
    // Depth-First Search (DFS) - Inorder
    dfsInorder(node, result = []) {
      if (node) {
        this.dfsInorder(node.left, result);
        result.push(node.data);
        this.dfsInorder(node.right, result);
      }
      return result;
    }
  
    // Depth-First Search (DFS) - Postorder
    dfsPostorder(node, result = []) {
      if (node) {
        this.dfsPostorder(node.left, result);
        this.dfsPostorder(node.right, result);
        result.push(node.data);
      }
      return result;
    }
  }
  
  // Example usage:
  const binaryTree = new BinaryTree();
  
  binaryTree.insert(50);
  binaryTree.insert(30);
  binaryTree.insert(70);
  binaryTree.insert(20);
  binaryTree.insert(40);
  binaryTree.insert(60);
  binaryTree.insert(80);
  
  console.log("Breadth-First Search (BFS):", binaryTree.bfs());
  console.log("Depth-First Search (DFS) - Preorder:", binaryTree.dfsPreorder(binaryTree.root));
  console.log("Depth-First Search (DFS) - Inorder:", binaryTree.dfsInorder(binaryTree.root));
  console.log("Depth-First Search (DFS) - Postorder:", binaryTree.dfsPostorder(binaryTree.root));
  