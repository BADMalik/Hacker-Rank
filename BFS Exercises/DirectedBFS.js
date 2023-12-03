// Data structure to store a directed graph edge
class DirectedEdge {
    constructor(src, dest) {
        this.src = src;
        this.dest = dest;
    }
}

// A class to represent a directed graph object
class DirectedGraph {
    constructor(edges, n) {
        // a dictionary to represent an adjacency list
        this.adjList = {};

        // add edges to the directed graph
        for (let edge of edges) {
            if (!(edge.src in this.adjList)) {
                this.adjList[edge.src] = [];
            }

            this.adjList[edge.src].push(edge.dest);
        }
console.log({list: this.adjList})
    }
}

// Perform BFS on the directed graph starting from vertex `v`
function BFS(graph, v, discovered) {
    // create a queue for doing BFS
    let q = [];

    // mark the source vertex as discovered
    discovered[v] = true;

    // enqueue source vertex
    q.push(v);

    // loop till queue is empty
    while (q.length !== 0) {
        // dequeue front node and print it
        v = q.shift();
        console.log(v + " ");

        // check if graph.adjList[v] is defined before iterating
        if (graph.adjList[v]) {
            for (let u of graph.adjList[v]) {
                if (!discovered[u]) {
                    // mark it as discovered and enqueue it
                    discovered[u] = true;
                    q.push(u);
                }
            }
        }
    }
}

// vector of directed graph edges
let directedEdges = [
    new DirectedEdge(1, 2), new DirectedEdge(1, 4), new DirectedEdge(2, 5),
    new DirectedEdge(2, 6), new DirectedEdge(5, 9), new DirectedEdge(5, 10),
    new DirectedEdge(4, 7), new DirectedEdge(4, 8), new DirectedEdge(7, 11),
    new DirectedEdge(7, 12)
    // vertex 0, 3, 13, and 14 are single nodes
];
console.log({directedEdges})
// total number of nodes in the directed graph (labelled from 0 to 14)
let nDirected = 15;

// build a directed graph from the given edges
let directedGraph = new DirectedGraph(directedEdges, nDirected);

// to keep track of whether a vertex is discovered or not
let discoveredDirected = Array(nDirected).fill(false);

// Perform BFS traversal from all undiscovered nodes to
// cover all connected components of the directed graph
for (let i = 0; i < nDirected; i++) {
    if (!discoveredDirected[i]) {
        console.log(`\nStep ${i + 1}: Starting BFS from node ${i}`);
        // start BFS traversal from vertex `i`
        BFS(directedGraph, i, discoveredDirected);
    }
}
// 0 --> 1 --> 2       5 --> 9
// |        |         |
// v        v         v
// 3 --> 4     6       10
// |             \
// v             v
// 7 --> 8       11 --> 12
//                 |
//                v
//                13
//                |
//                v
//                14
