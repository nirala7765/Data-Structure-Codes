function meetingPoint(n, m, horsePosition, bishopPosition, inactivePositions) {
  // Define possible moves for the horse
  const horseMoves = [
      [-2, -1],
      [-1, -2],
      [1, -2],
      [2, -1],
      [-2, 1],
      [-1, 2],
      [1, 2],
      [2, 1]
  ];

  // Helper function to check if a position is valid and not in the set of inactive positions
  function isCorrect(x, y) {
      return x >= 0 && x < n && y >= 0 && y < m && !inactivePositions.has(`${x},${y}`);
  }

  // Initialize visited sets for both the horse and bishop
  const hrsWalking = new Set();
  const bishopWalking = new Set();

  // Initialize queues for BFS for both the horse and bishop
  const horseQ = [{ x: horsePosition[0], y: horsePosition[1], steps: 0 }];
  const bishopQ = [{ x: bishopPosition[0], y: bishopPosition[1], steps: 0 }];

  // Perform BFS for the horse
  while (horseQ.length > 0) {
      const { x, y, steps } = horseQ.shift();

      if (hrsWalking.has(`${x},${y}`)) {
          continue;
      }

      hrsWalking.add(`${x},${y}`);

      for (const [dx, dy] of horseMoves) {
          const nx = x + dx;
          const ny = y + dy;

          if (isCorrect(nx, ny)) {
              horseQ.push({ x: nx, y: ny, steps: steps + 1 });
          }
      }
  }

  // Perform BFS for the bishop
  while (bishopQ.length > 0) {
      const { x, y, steps } = bishopQ.shift();

      if (bishopWalking.has(`${x},${y}`)) {
          continue;
      }

      bishopWalking.add(`${x},${y}`);

      // Check if the bishop's position matches any of the horse's visited positions
      if (hrsWalking.has(`${x},${y}`)) {
          return { x, y };
      }

      // Add diagonal positions to the bishop's queue
      for (const [dx, dy] of [[-1, -1], [-1, 1], [1, -1], [1, 1]]) {
          const nx = x + dx;
          const ny = y + dy;

          if (isCorrect(nx, ny)) {
              bishopQ.push({ x: nx, y: ny, steps: steps + 1 });
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

const meetingPointResult = meetingPoint(n, m, horsePosition, bishopPosition, inactivePositions);

if (meetingPointResult) {
  console.log(`The animals can meet at position: ${meetingPointResult.x}, ${meetingPointResult.y}`);
} else {
  console.log("The animals cannot meet.");
}
