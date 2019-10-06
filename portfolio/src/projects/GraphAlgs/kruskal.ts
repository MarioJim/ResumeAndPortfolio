import Spot from './spot';

type orderedListOfPairsType = [number, number, number];
export type kruskalType = [number, number, boolean];

const Kruskal = (spots: Spot[]) => {
  // Create the (for now empty) set of lines
  let result: kruskalType[] = [];
  // Create the set of trees (forest) and fill it with arrays with only an index of a spot
  let forest = spots.map((spot, i) => [i]);
  // Create the list of pairs and order it
  let orderedListOfPairs: orderedListOfPairsType[] = [];
  for (let i = 0; i < spots.length; i++)
      for (let j = i + 1; j < spots.length; j++)
          orderedListOfPairs.push([i, j, spots[i].distToSpot(spots[j])]);
  orderedListOfPairs.sort((n, m) => 
      (n[2] === m[2]) ? 0 : (n[2] < m[2]) ? -1 : 1);
  // For every element in orderedListOfPairs
  orderedListOfPairs.forEach(pair => {
    // If there is only one tree in forest exit
    if (forest.length <= 1) return;
    let index1 = -1, index2 = -1;
    // Search for index of each element in pair, inside forest
    forest.forEach((tree, j) => {
      if (tree.includes(pair[0])) index1 = j;
      if (tree.includes(pair[1])) index2 = j;
    });
    // Check if both items are still on the forest and are in different trees
    const inDifferentTrees = (index1 != index2) && (index1 != -1) && (index2 != -1);
    if (inDifferentTrees) {
        // Add second element's tree to first element's tree
        forest[index2].forEach(leaf => forest[index1].push(leaf));
        // Delete second element tree's from forest
        forest.splice(index2, 1);
        // Add pair to result with true as last element
        result.push([pair[0], pair[1], true]);
    } else {
        // Add pair to result with false as last element
        result.push([pair[0], pair[1], false]);
      }
  });
  // Return the tree
  return result;
}

export default Kruskal;
