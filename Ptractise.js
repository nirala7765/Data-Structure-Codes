function canMeet(n, m, horsePosition, bishopPosition, inactivePositions) {
    // Define possible moves for the horse
    const horseMoves = [
      [-2, -1], [-1, -2], [1, -2], [2, -1],
      [-2, 1], [-1, 2], [1, 2], [2, 1]
    ];
  
    // Helper function to check if a position is valid and not in the set of inactive positions
    function isValid(x, y) {
      return x >= 0 && x < n && y >= 0 && y < m && !inactivePositions.has(`${x},${y}`);
    }
  
    // Initialize visited sets for both the horse and bishop
    const horseVisited = new Set();
    const bishopVisited = new Set();
  
    // Initialize queues for BFS for both the horse and bishop
    const horseQueue = [{ x: horsePosition[0], y: horsePosition[1], steps: 0 }];
    const bishopQueue = [{ x: bishopPosition[0], y: bishopPosition[1], steps: 0 }];
  
    // Perform BFS for the horse
    while (horseQueue.length > 0) {
      const { x, y, steps } = horseQueue.shift();
  
      if (horseVisited.has(`${x},${y}`)) {
        continue;
      }
  
      horseVisited.add(`${x},${y}`);
  
      for (const [dx, dy] of horseMoves) {
        const nx = x + dx;
        const ny = y + dy;
  
        if (isValid(nx, ny)) {
          horseQueue.push({ x: nx, y: ny, steps: steps + 1 });
        }
      }
    }
  
    // Perform BFS for the bishop
    while (bishopQueue.length > 0) {
      const { x, y, steps } = bishopQueue.shift();
  
      if (bishopVisited.has(`${x},${y}`)) {
        continue;
      }
  
      bishopVisited.add(`${x},${y}`);
  
      // Check if the bishop's position matches any of the horse's visited positions
      if (horseVisited.has(`${x},${y}`)) {
        return { x, y };
      }
  
      // Add diagonal positions to the bishop's queue
      for (const [dx, dy] of [[-1, -1], [-1, 1], [1, -1], [1, 1]]) {
        const nx = x + dx;
        const ny = y + dy;
  
        if (isValid(nx, ny)) {
          bishopQueue.push({ x: nx, y: ny, steps: steps + 1 });
        }
      }
    }
  
    // If no meeting point is found, return null
    return null;
  }
  
  // Example usage:
  const n = 8; // Grid size
  const m = 8;
  const horsePosition = [6, 6]; // Horse's initial position
  const bishopPosition = [3, 2]; // Bishop's initial position
  const inactivePositions = new Set(['0,3', '2,0']); // Set of inactive positions
  
  const meetingPoint = canMeet(n, m, horsePosition, bishopPosition, inactivePositions);
  
  if (meetingPoint) {
    console.log(`The animals can meet at position: ${meetingPoint.x},${meetingPoint.y}`);
  } else {
    console.log("The animals cannot meet.");
  }
  