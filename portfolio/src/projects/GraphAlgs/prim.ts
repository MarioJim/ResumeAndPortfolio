import Spot from './spot';

export type alreadyInTreeType = [number, number];

const primStep = (spots: Spot[], notInTree: number[], alreadyInTree: alreadyInTreeType[],) => {
  // Start minCombination as having an maximum distance
  let pair: [number, number] = [0, 0];
  let distBetweenPair = Number.MAX_VALUE;
  // Loop through items that are already in the tree with i
  for (let i = 0; i < alreadyInTree.length; i++) {
    // Loop through items that aren't in the tree with j
    for (let j = 0; j < notInTree.length; j++) {
      // Calculate distance between spot i and spot j
      const currentDistance = spots[alreadyInTree[i][1]].distToSpot(spots[notInTree[j]]);
      // If it has a better distance, update minCombination with the pair of spots that produced it and its distance
      if (currentDistance < distBetweenPair) {
        pair = [alreadyInTree[i][1], notInTree[j]];
        distBetweenPair = currentDistance;
      }
    }
  }
  // Add pair to tree
  alreadyInTree.push(pair);
  // Delete currentPoint from notInTree
  notInTree.splice(notInTree.indexOf(pair[1]), 1);
}

const Prim = (spots: Spot[]) => {
  // Create an array with indexes of spots that aren't in tree
  const notInTree = spots.map((spot, i) => i);
  // Choose a random spot
  let randomSpot = Math.floor(spots.length * Math.random());
  // Create an empty array with pairs of indexes of spots that will be joined, starting from randomSpot
  const alreadyInTree: alreadyInTreeType[] = [ [-1, randomSpot] ];
  // Delete randomSpot from notInTree
  notInTree.splice(notInTree.indexOf(randomSpot), 1);
  // Loop through the algorithm until it's finished
  while (notInTree.length != 0)
    primStep(spots, notInTree, alreadyInTree);
  // Return the array of pairs of indexes of spots that should be joined
  return alreadyInTree;
};

export default Prim;
