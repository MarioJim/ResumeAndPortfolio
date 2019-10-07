import p5 from 'p5';
import 'p5/lib/addons/p5.dom';
import Spot from './spot';
import prim, { alreadyInTreeType as primType } from './prim';
import kruskal, { kruskalType } from './kruskal';
import dijkstra from './dijkstra';

enum currentlyRunningEnum {
  nothing, prim, kruskal, dijkstra
}

const colorAdding = [63, 81, 181];
const colorAdded = [76, 175, 80];
let spots: Spot[] = [];
let addingNeighbors = true;
let currentyRunning: currentlyRunningEnum = currentlyRunningEnum.nothing;
let treePrim: primType[];
let treeKruskal: kruskalType[];
let startingFrame: number, currentFrame: number;

const stopAndReset = (p: p5) => {
  // Clear trees
  treePrim = [];
  treeKruskal = [];
  // Reset path results
  spots.forEach(spot => {
    spot.previous = -1;
    spot.distToSource = Number.MAX_VALUE;
    spot.color = [0];
  })
  p.noLoop();
  currentyRunning = currentlyRunningEnum.nothing;
  p.redraw();
}

const addNeighborsButton = () => {
  spots.forEach((spot, i) => {
    spot.addNeighbors(spots, i);
    spot.addNeighborsDistance(spots, spot.neighbors);
  });
  addingNeighbors = true;
}

const clearNeighborsButton = () => {
  spots.forEach(spot => {
    spot.neighbors = [];
    spot.distToNeighbors = [];
  });
  addingNeighbors = false;
}

const Graphs = (p: p5) => {
  p.mousePressed = () => {
    if (spots.length === 26) return;
    if (p.mouseY > 60 && p.mouseY < p.height - 10 &&
        p.mouseX > 10 && p.mouseX < p.width - 10) {
      stopAndReset(p);
      // Create new spot at mouse coordinates
      const newSpot = new Spot(p, p.mouseX, p.mouseY);
      // Add neigbors if it's set to
      if (addingNeighbors) {
        newSpot.addNeighbors(spots);
        newSpot.addNeighborsDistance(spots, newSpot.neighbors);
      }
      // Add spot to array of spots
      spots.push(newSpot);
      p.redraw();
    }
  }

  p.setup = () => {
    p.createCanvas(1280, 640);
    p.noLoop();
    p.frameRate(1);
    p.textAlign(p.CENTER, p.CENTER);
    // Prim's Algorithm's Button
    const btnPrim = p.createButton('Prim');
    btnPrim
      .position(20, 10)
      .style('width', '100px')
      .style('height', '30px')
      .mousePressed(() => {
        stopAndReset(p);
        if (addingNeighbors) clearNeighborsButton();
        startingFrame = p.frameCount;
        treePrim = prim(spots);
        currentyRunning = currentlyRunningEnum.prim;
        p.loop();
      });
    // Kruskal's Algorithm's Button
    const btnKruskal = p.createButton('Kruskal');
    btnKruskal
      .position(140, 10)
      .style('width', '100px')
      .style('height', '30px')
      .mousePressed(() => {
        stopAndReset(p);
        if (addingNeighbors) clearNeighborsButton();
        startingFrame = p.frameCount;
        treeKruskal = kruskal(spots);
        currentyRunning = currentlyRunningEnum.kruskal;
        p.loop();
      });
    // Dijkstra's Algorithm's Button
    const btnDijkstra = p.createButton('Dijkstra');
    btnDijkstra
      .position(260, 10)
      .style('width', '100px')
      .style('height', '30px')
      .mousePressed(() => {
        stopAndReset(p);
        if (!addingNeighbors) addNeighborsButton();
        startingFrame = p.frameCount;
        // Set distance from source to source as 0
        spots[0].distToSource = 0;
        currentyRunning = currentlyRunningEnum.dijkstra;
        p.loop();
      });
    // Button to add Neighbors
    const btnAddNeigh = p.createButton('Add neighbors');
    btnAddNeigh
      .position(p.width - 530, 15)
      .style('width', '115px')
      .mousePressed(() => {
        stopAndReset(p);
        addNeighborsButton();
        p.redraw();
      });
    // Button to clear neighbors
    const btnClearNeigh = p.createButton('Clear neighbors');
    btnClearNeigh
      .position(p.width - 400, 15)
      .style('width', '115px')
      .mousePressed(() => {
        stopAndReset(p);
        clearNeighborsButton();
        p.redraw();
      });
    // Button to delete last spot
    const btnDeleteLastSpot = p.createButton('Delete last spot');
    btnDeleteLastSpot
      .position(p.width - 270, 15)
      .style('width', '115px')
      .mousePressed(() => {
        stopAndReset(p);
        spots.pop();
        p.redraw();
      });
    // Button to reset board
    const btnResetBoard = p.createButton('Reset board');
    btnResetBoard
      .position(p.width - 140, 15)
      .style('width', '115px')
      .mousePressed(() => {
        spots = [];
        stopAndReset(p);
      });
  }

  p.draw = () => {
    p.background(210);
    // Rectangle behind buttons
    p.noStroke();
    p.fill(255);
    p.rect(0, 0, p.width, 50);
    // Switch for every algorithm to run
    switch (currentyRunning) {
      case currentlyRunningEnum.nothing:
        p.noLoop();
        break;
      case currentlyRunningEnum.prim:
        currentFrame = p.frameCount - startingFrame + 1;
        p.strokeWeight(10);
        // Show green lines (already shown)
        p.stroke(colorAdded);
        for (let i = 1; i < currentFrame - 1; i++)
          p.line(
            spots[treePrim[i][0]].x, spots[treePrim[i][0]].y,
            spots[treePrim[i][1]].x, spots[treePrim[i][1]].y
          );
        // Show blue line ("currenty adding")
        p.stroke(colorAdding);
        if (currentFrame <= treePrim.length)
          p.line(
            spots[treePrim[currentFrame - 1][0]].x, spots[treePrim[currentFrame - 1][0]].y,
            spots[treePrim[currentFrame - 1][1]].x, spots[treePrim[currentFrame - 1][1]].y
          );
        // End condition for loop
        if (currentFrame > treePrim.length) {
          p.noLoop();
          currentyRunning = currentlyRunningEnum.nothing;
        }
        break;
      case currentlyRunningEnum.kruskal:
        currentFrame = p.frameCount - startingFrame;
        p.strokeWeight(10);
        // Show green lines (already shown)
        p.stroke(colorAdded);
        for (let i = 0; i < currentFrame - 1; i++)
          if (treeKruskal[i][2])
            p.line(
              spots[treeKruskal[i][0]].x,
              spots[treeKruskal[i][0]].y,
              spots[treeKruskal[i][1]].x,
              spots[treeKruskal[i][1]].y
            );
        // Show blue line (possibly adding)
        p.stroke(colorAdding);
        if (currentFrame <= treeKruskal.length)
          p.line(
            spots[treeKruskal[currentFrame - 1][0]].x,
            spots[treeKruskal[currentFrame - 1][0]].y,
            spots[treeKruskal[currentFrame - 1][1]].x,
            spots[treeKruskal[currentFrame - 1][1]].y
          );
        // End condition for loop
        if (currentFrame > treeKruskal.length) {
          p.noLoop();
          currentyRunning = currentlyRunningEnum.nothing;
        }
        break;
      case currentlyRunningEnum.dijkstra:
        currentFrame = p.frameCount - startingFrame;
        const lastPair = dijkstra(spots, currentFrame);
        // Show green lines (already shown)
        p.stroke(colorAdded);
        p.strokeWeight(10);
        for (let i = 1; i < spots.length; i++)
          if (spots[i].previous != -1)
            p.line(
              spots[i].x, spots[i].y,
              spots[spots[i].previous].x, spots[spots[i].previous].y
            );
        // Show distances to source for each point
        p.stroke(0);
        p.strokeWeight(1);
        p.fill(0);
        spots.forEach(spot => {
          p.text(
            spot.distToSource == Number.MAX_VALUE ? 'Infinity' : spot.distToSource,
            spot.x, spot.y + 20
          );
        });
        // Depending on the first element of last pair
        switch (lastPair[0]) {
          case 'c':
            // Set node as current by showing it in a different color
            spots[lastPair[1]].color = [0, 150, 200];
            break;
          case 'o':
            // Set node as out by showing it in a different color
            spots[lastPair[1]].color = [200, 50, 50];
            break;
          case 'e':
            // End loop if dijkstra returns [-1]
            p.noLoop();
            currentyRunning = currentlyRunningEnum.nothing;
            break;
          default:
            // Show blue line (possibly adding)
            p.stroke(colorAdding);
            p.strokeWeight(10);
            p.line(
              spots[lastPair[0]].x,
              spots[lastPair[0]].y,
              spots[lastPair[1]].x,
              spots[lastPair[1]].y
            );
        }
        break;
    }

    spots.forEach((spot, i) => {
      p.strokeWeight(1);
      p.fill(0);
      p.stroke(0);
      // Print name of spot i
      p.text(`${p.char(i + p.unchar('A'))} (${i})`, spot.x + 30, spot.y);
      // Print neighbors of i
      spot.neighbors.forEach((neighbor, j) => {
        const endx = spots[neighbor].x;
        const endy = spots[neighbor].y;
        p.line(spot.x, spot.y, endx, endy);
        p.text(
          spot.distToNeighbors[j],
          endx + (spot.x - endx) / 2,
          endy + (spot.y - endy) / 2
        );
      });
      // Show spot i
      spot.show();
    });
  }
};

export default Graphs;
