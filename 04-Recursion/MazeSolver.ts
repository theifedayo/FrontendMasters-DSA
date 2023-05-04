export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const visited: Point[] = [start];
    const path: Point[] = [start];
  
    function solveHelper(current: Point): boolean {
      if (current.x === end.x && current.y === end.y) {
        return true;
      }
  
      const neighbors = getNeighbors(current);
      for (const neighbor of neighbors) {
        if (!visited.some((p) => p.x === neighbor.x && p.y === neighbor.y) && maze[neighbor.y][neighbor.x] !== wall) {
          visited.push(neighbor);
          path.push(neighbor);
          if (solveHelper(neighbor)) {
            return true;
          } else {
            path.pop();
          }
        }
      }
  
      return false;
    }
  
    function getNeighbors(point: Point): Point[] {
      const neighbors: Point[] = [];
      if (point.x > 0) {
        neighbors.push({ x: point.x - 1, y: point.y });
      }
      if (point.y > 0) {
        neighbors.push({ x: point.x, y: point.y - 1 });
      }
      if (point.x < maze[0].length - 1) {
        neighbors.push({ x: point.x + 1, y: point.y });
      }
      if (point.y < maze.length - 1) {
        neighbors.push({ x: point.x, y: point.y + 1 });
      }
      return neighbors;
    }
  
    if (!solveHelper(start)) {
      throw new Error('Maze has no solution');
    }
  
    return path;
  }
  