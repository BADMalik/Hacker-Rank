var hasPath = function (maze, start, destination) {
  maze[start[0]][start[1]] = 1;
  return searchMazeHelper(maze, start, destination);
};

function searchMazeHelper(maze, start, destination) {
  let queue = [start];
  let visited = new Set();

  while (queue.length > 0) {
    let current = queue.shift();
    console.log(`Visiting (${current[0]}, ${current[1]})`);

    if (current[0] === destination[0] && current[1] === destination[1]) {
      console.log(`Destination (${destination[0]}, ${destination[1]}) found!`);
      return true;
    }

    visited.add(`${current[0]},${current[1]}`);

    // Indices: 0->up, 1->left, 2->down, 3->right
    let directions = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];

    for (const direction of directions) {
      let neighbor = [current[0] + direction[0], current[1] + direction[1]];
      let neighborKey = `${neighbor[0]},${neighbor[1]}`;
      console.log({ neighborKey });
      if (!visited.has(neighborKey) && isFeasible(maze, neighbor)) {
        console.log(`Selected (${neighbor[0]}, ${neighbor[1]})`);
        maze[neighbor[0]][neighbor[1]] = 1;
        queue.push(neighbor);
      }
    }
  }

  console.log(`Destination not found.`);
  return false;
}

function isFeasible(maze, indices) {
  let x = indices[0],
    y = indices[1];
  return (
    x >= 0 &&
    x < maze.length &&
    y >= 0 &&
    y < maze[x].length &&
    maze[x][y] === 0
  );
}

var maze = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
];

hasPath(maze, [0, 4], [3, 2]);
