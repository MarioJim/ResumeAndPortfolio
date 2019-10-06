import p5 from 'p5';

export default class Spot {
  p: p5;
  x: number;
  y: number;
  color: number[];
  neighbors: number[];
  distToNeighbors: number[];
  previous: number;
  distToSource: number;

  constructor(p: p5, x: number, y: number, color?: number[]) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.color = color || [0];
    this.neighbors = [];
    this.distToNeighbors = [];
    this.previous = -1;
    this.distToSource = Number.MAX_VALUE;
  }

  // Method to "print" this spot
  show() {
    this.p.stroke(this.color);
    this.p.strokeWeight(20);
    this.p.point(this.x, this.y);
  }

  // Method to return the distance from this spot to spot at index
  distToSpot(spot: Spot) {
    return this.p.dist(this.x, this.y, spot.x, spot.y);
  }

  // Method to add neighbors
  // Param spots: array of spots to possibly connect to
  // Param limit: limit until which spot to check, if it isn't passed it checks against the entire spots array
  addNeighbors(spots: Spot[], limit?: number) {
    limit = limit || spots.length;
    // From https://www.geeksforgeeks.org/check-if-two-given-line-segments-intersect/
    function doIntersect(p1: Spot, q1: Spot, p2: Spot, q2: Spot) {
      // Determines the orientation of three points and returns 0 if colinear, 1 if clockwise, 2 if counterclockwise
      function orientation(p: Spot, q: Spot, r: Spot) {
        const val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
        if (val == 0) return 0;
        return val > 0 ? 1 : 2;
      }
      // Given three colinear points p, q, r, checks if point q lies on line segment pr
      function onSegment(p: Spot, q: Spot, r: Spot) {
        return !!(q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) &&
            q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y));
      }
      // Find the four orientations needed for general and special cases
      const o = [
        orientation(p1, q1, p2),
        orientation(p1, q1, q2),
        orientation(p2, q2, p1),
        orientation(p2, q2, q1),
      ];
      // General case
      if (o[0] != o[1] && o[2] != o[3]) return true;
      // Special Cases
      if (
        (o[0] == 0 && onSegment(p1, p2, q1)) || // p1, q1 and p2 are colinear, p2 lies on segment p1q1
        (o[1] == 0 && onSegment(p1, q2, q1)) || // p1, q1 and q2 are colinear, q2 lies on segment p1q1
        (o[2] == 0 && onSegment(p2, p1, q2)) || // p2, q2 and p1 are colinear, p1 lies on segment p2q2
        (o[3] == 0 && onSegment(p2, q1, q2))
      )
        // p2, q2 and q1 are colinear, q1 lies on segment p2q2
        return true;
      // Else (it doesn't fall in any of the above cases), return false
      return false;
    }
    // Create a spot just to compare its possible lines to
    const thisSpot = new Spot(this.p, this.x, this.y);
    // Check which points are neighbors
    const neighbors = [];
    for (let i = 0; i < limit; i++) {
      let line = true;
      // j = Loop over all spots in array, minus last one
      for (let j = 0; j < limit - 1; j++) {
        // k = Loop over all spots in array that are after spot j
        for (let k = j + 1; k < limit; k++) {
          // If spot k (after j) has as a neighbor spot j
          if (spots[k].neighbors.includes(j) && j != i && k != i) {
            // Check if lines between neigboring spots would intersect the line proposed
            if (doIntersect(thisSpot, spots[i], spots[j], spots[k])) {
              // If it does, don't make the line and...
              line = false;
              // Jump out of the loop by breaking the condition of j < limit
              j = limit;
            }
          }
        }
      }
      // Add neighbor to this spot if nothing intersected with it
      if (line) neighbors.push(i);
    }
    this.neighbors = neighbors;
  }

  addNeighborsDistance(spots: Spot[], neighbors: number[]) {
    // Fill it with the distances to each neighbor
    this.distToNeighbors = neighbors.map(neighbor => 
        Math.round(this.distToSpot(spots[neighbor]))
      );
  }
}
