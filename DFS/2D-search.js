const isFeasible = (maze, indices) => {
  let x = indices[0],
    y = indices[1];
  return (
    x >= 0 &&
    x < maze.length &&
    y >= 0 &&
    y < maze[x].length &&
    maze[x][y] === 0
  );
};

const hasPath = (maze, start, destination) => {
  maze[start[0]][start[1]] = 1;
  return searchMazeHelper(maze, start, destination);
};

const searchMazeHelper = (maze, current, end) => {
  // dfs
  console.log(`Visiting (${current[0]}, ${current[1]})`);

  if (current[0] === end[0] && current[1] === end[1]) {
    console.log(`Destination (${end[0]}, ${end[1]}) found!`);
    return true;
  }

  let neighborIndices, neighbor;
  // Indices: 0->up, 1->left, 2->down, 3->right
  let directions = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  for (const direction of directions) {
    console.log({ current });
    neighborIndices = [current[0] + direction[0], current[1] + direction[1]];
    console.log({ neighborIndices });
    if (isFeasible(maze, neighborIndices)) {
      console.log(`Selected (${neighborIndices[0]}, ${neighborIndices[1]})`);
      maze[neighborIndices[0]][neighborIndices[1]] = 1;

      if (searchMazeHelper(maze, neighborIndices, end)) {
        return true;
      }
    }
  }

  console.log(`No valid neighbors from (${current[0]}, ${current[1]})`);
  return false;
};

var maze = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
];


hasPath(maze, [0, 4], [3, 2]);
