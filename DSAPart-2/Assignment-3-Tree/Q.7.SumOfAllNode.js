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
  
    sumOfNodes(node) {
      if (node === null) {
        return 0;
      }
  
      return node.data + this.sumOfNodes(node.left) + this.sumOfNodes(node.right);
    }
  }
  
  // Example usage:
  const binaryTree = new BinaryTree();
  
  binaryTree.insert(1);
  binaryTree.insert(2);
  binaryTree.insert(3);
  binaryTree.insert(4);
  binaryTree.insert(5);
  binaryTree.insert(6);
  binaryTree.insert(7);
  
  console.log("Sum of all nodes in the perfect binary tree:", binaryTree.sumOfNodes(binaryTree.root));
  