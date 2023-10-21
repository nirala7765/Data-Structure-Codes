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
      const newNode = new Node(data);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    search(data) {
      return this.searchNode(this.root, data);
    }
  
    searchNode(node, data) {
      if (node === null) {
        return null; // Node not found.
      }
      
      if (data < node.data) {
        return this.searchNode(node.left, data);
      } else if (data > node.data) {
        return this.searchNode(node.right, data);
      } else {
        return node; // Node found.
      }
    }
  
    delete(data) {
      this.root = this.deleteNode(this.root, data);
    }
  
    deleteNode(node, data) {
      if (node === null) {
        return null; // Node not found.
      }
      
      if (data < node.data) {
        node.left = this.deleteNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = this.deleteNode(node.right, data);
        return node;
      } else {
        // Node found, handle deletion.
        if (node.left === null && node.right === null) {
          // Case 1: Node has no children (leaf node)
          node = null;
          return node;
        } else if (node.left === null) {
          // Case 2: Node has only one child (right child)
          node = node.right;
          return node;
        } else if (node.right === null) {
          // Case 2: Node has only one child (left child)
          node = node.left;
          return node;
        } else {
          // Case 3: Node has two children
          const minValue = this.findMinValue(node.right);
          node.data = minValue;
          node.right = this.deleteNode(node.right, minValue);
          return node;
        }
      }
    }
  
    findMinValue(node) {
      if (node.left === null) {
        return node.data;
      }
      return this.findMinValue(node.left);
    }
  
    // Inorder traversal (left, root, right)
    inorder(node) {
      if (node !== null) {
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
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
  
  console.log("Inorder traversal of the binary tree:");
  binaryTree.inorder(binaryTree.root);
  
  const searchData = 30;
  const searchResult = binaryTree.search(searchData);
  console.log(`Searching for ${searchData}:`, searchResult ? "Found" : "Not Found");
  
  const deleteData = 30;
  binaryTree.delete(deleteData);
  console.log(`After deleting ${deleteData}:`);
  binaryTree.inorder(binaryTree.root);
  