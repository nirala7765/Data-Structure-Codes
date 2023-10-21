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
  
    // Pre-order traversal: root, left, right
    preorder(node, callback) {
      if (node !== null) {
        callback(node.data);
        this.preorder(node.left, callback);
        this.preorder(node.right, callback);
      }
    }
  
    // In-order traversal: left, root, right
    inorder(node, callback) {
      if (node !== null) {
        this.inorder(node.left, callback);
        callback(node.data);
        this.inorder(node.right, callback);
      }
    }
  
    // Post-order traversal: left, right, root
    postorder(node, callback) {
      if (node !== null) {
        this.postorder(node.left, callback);
        this.postorder(node.right, callback);
        callback(node.data);
      }
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
  
  console.log("Pre-order traversal of the binary tree:");
  binaryTree.preorder(binaryTree.root, (data) => console.log(data));
  
  console.log("In-order traversal of the binary tree:");
  binaryTree.inorder(binaryTree.root, (data) => console.log(data));
  
  console.log("Post-order traversal of the binary tree:");
  binaryTree.postorder(binaryTree.root, (data) => console.log(data));
  