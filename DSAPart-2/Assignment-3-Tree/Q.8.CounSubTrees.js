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
  
    countSubtreesWithSum(node, targetSum, count) {
      if (node === null) {
        return 0;
      }
  
      const leftSum = this.countSubtreesWithSum(node.left, targetSum, count);
      const rightSum = this.countSubtreesWithSum(node.right, targetSum, count);
  
      const currentSum = leftSum + rightSum + node.data;
  
      if (currentSum === targetSum) {
        count[0]++; // Increment the count if the current subtree sums up to the target.
      }
  
      return currentSum;
    }
  
    countSubtrees(targetSum) {
      const count = [0]; // Using an array to pass count by reference.
      this.countSubtreesWithSum(this.root, targetSum, count);
      return count[0];
    }
  }
  
  // Example usage:
  const binaryTree = new BinaryTree();
  
  binaryTree.insert(10);
  binaryTree.insert(5);
  binaryTree.insert(15);
  binaryTree.insert(3);
  binaryTree.insert(7);
  binaryTree.insert(18);
  
  const targetSum = 18;
  
  const count = binaryTree.countSubtrees(targetSum);
  console.log(`Number of subtrees with sum ${targetSum}:`, count);
  