import Spot from './spot';

export type resultType = [string | number, number];

const getNeighbors = (spots: Spot[], sp: number) => {
  let result: number[] = [];
  // Add neighbors that are in that sp's neighbors array
  spots[sp].neighbors.forEach(neighbor => result.push(neighbor));
  // Add spots which have sp as neighbor
  for (let i = sp + 1; i < spots.length; i++)
    if (spots[i].neighbors.includes(sp))
      result.push(i);
  return result;
}

const Dijkstra = (spots: Spot[], limit: number): resultType => {
  let counter = 0;
  let unvisitedNodes = spots.map((spot, i) => i);
  // While there are nodes that haven't been visited
  while (unvisitedNodes.length > 0) {
    // Set current spot as first in unvisitedNodes
    let current = unvisitedNodes[0];
    // Search for node with least distance
    for (let i = 0; i < unvisitedNodes.length; i++)
      if (spots[unvisitedNodes[i]].distToSource < spots[current].distToSource)
        current = unvisitedNodes[i];
    // Set new current (as different color)
    if (++counter >= limit) return ['c', current];
    // Get the neighbors of current spot and filter only the ones which are in unvisitedNodes
    let neighborsOfCurrent = getNeighbors(spots, current).filter(value => -1 !== unvisitedNodes.indexOf(value));
    // For every neighbor of current
    for (let i = 0; i < neighborsOfCurrent.length; i++) {
      // Calculate the distance from source to current's neighbor i with:
      // The distances ( from source to current ) + ( from current to current's neighbor i )
      let distSourceToCurrNeigh = Math.round(spots[current].distToSource + spots[current].distToSpot(spots[neighborsOfCurrent[i]]));
      // If it is a better distance, update its distance and its previous spot (the one it came from)
      if (distSourceToCurrNeigh < spots[neighborsOfCurrent[i]].distToSource) {
        spots[neighborsOfCurrent[i]].distToSource = distSourceToCurrNeigh;
        spots[neighborsOfCurrent[i]].previous = current;
      }
      // Stop and show line between current and neighbor i
      if (++counter >= limit) return [current, neighborsOfCurrent[i]];
    }
    // Remove current from unvisited nodes
    unvisitedNodes.splice(unvisitedNodes.indexOf(current), 1);
    // Set current as out of neighbors (as different color)
    if (++counter >= limit) return ['o', current];
  }
  // Return 'e' to finish
  return ['e', -1];
}

export default Dijkstra;
