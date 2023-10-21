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
  
    findHeight(node) {
      if (node === null) {
        return -1; // Height of an empty tree is -1.
      }
  
      const leftHeight = this.findHeight(node.left);
      const rightHeight = this.findHeight(node.right);
  
      return Math.max(leftHeight, rightHeight) + 1;
    }
  
    getHeight() {
      return this.findHeight(this.root);
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
  
  console.log("Height of the binary tree:", binaryTree.getHeight());
  