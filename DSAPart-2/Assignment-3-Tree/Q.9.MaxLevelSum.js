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
  
    maxLevelSum() {
      if (this.root === null) {
        return 0;
      }
  
      let maxSum = this.root.data;
      let maxLevel = 0;
      let currentLevel = 0;
  
      const queue = [this.root];
  
      while (queue.length > 0) {
        let levelSum = 0;
        let levelSize = queue.length;
  
        for (let i = 0; i < levelSize; i++) {
          const node = queue.shift();
          levelSum += node.data;
  
          if (node.left) {
            queue.push(node.left);
          }
  
          if (node.right) {
            queue.push(node.right);
          }
        }
  
        if (levelSum > maxSum) {
          maxSum = levelSum;
          maxLevel = currentLevel;
        }
  
        currentLevel++;
      }
  
      return { level: maxLevel, sum: maxSum };
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
  
  const maxLevelSum = binaryTree.maxLevelSum();
  console.log(`Maximum level sum is at level ${maxLevelSum.level} with a sum of ${maxLevelSum.sum}`);
  