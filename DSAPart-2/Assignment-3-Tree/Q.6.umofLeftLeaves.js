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
  
    sumOfLeftLeaves(node, isLeft = false) {
      if (node === null) {
        return 0;
      }
  
      if (node.left === null && node.right === null && isLeft) {
        return node.data; // It's a left leaf.
      }
  
      const leftSum = this.sumOfLeftLeaves(node.left, true);
      const rightSum = this.sumOfLeftLeaves(node.right, false);
  
      return leftSum + rightSum;
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
  
  console.log("Sum of all left leaves:", binaryTree.sumOfLeftLeaves(binaryTree.root));
  