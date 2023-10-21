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
  
    printOddLevelNodes() {
      this.printOddLevelNodesRecursive(this.root, 1);
    }
  
    printOddLevelNodesRecursive(node, level) {
      if (node === null) {
        return;
      }
  
      if (level % 2 !== 0) {
        console.log(node.data); // Print the node at odd level.
      }
  
      this.printOddLevelNodesRecursive(node.left, level + 1);
      this.printOddLevelNodesRecursive(node.right, level + 1);
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
  
  console.log("Nodes at odd levels:");
  binaryTree.printOddLevelNodes();
  