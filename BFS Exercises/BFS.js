// Data structure to store a graph edge
class Edge {
    constructor(src, dest) {
        this.src = src;
        this.dest = dest;
    }
}

// A class to represent a graph object
class Graph {
    constructor(edges, n) {
        // a dictionary to represent an adjacency list
        this.adjList = {};

        // add edges to the undirected graph
        for (let edge of edges) {
            if (!(edge.src in this.adjList)) {
                this.adjList[edge.src] = [];
            }
            if (!(edge.dest in this.adjList)) {
                this.adjList[edge.dest] = [];
            }

            this.adjList[edge.src].push(edge.dest);
            this.adjList[edge.dest].push(edge.src);
        }
console.log({list:this.adjList})
    }
}

// Perform BFS on the graph starting from vertex `v`
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
            for (let u of Object.keys(graph.adjList[v])) {
                u = parseInt(u, 10);
                if (!discovered[u]) {
                    // mark it as discovered and enqueue it
                    discovered[u] = true;
                    q.push(u);
                }
            }
        }
    }
}

// vector of graph edges as per the above diagram
let edges = [
    new Edge(1, 2), new Edge(1, 3), new Edge(1, 4), new Edge(2, 5),
    new Edge(2, 6), new Edge(5, 9), new Edge(5, 10), new Edge(4, 7),
    new Edge(4, 8), new Edge(7, 11), new Edge(7, 12)
    // vertex 0, 13, and 14 are single nodes
];

console.log({edges})

// total number of nodes in the graph (labelled from 0 to 14)
let n = 15;

// build a graph from the given edges
let graph = new Graph(edges, n);

// to keep track of whether a vertex is discovered or not
let discovered = Array(n).fill(false);

// Perform BFS traversal from all undiscovered nodes to
// cover all connected components of a graph
for (let i = 0; i < n; i++) {
    if (!discovered[i]) {
        console.log(`\nStep ${i + 1}: Starting BFS from node ${i}`);
        // start BFS traversal from vertex `i`
        BFS(graph, i, discovered);
    }
}

// 0---1---2       5---9
// | / |   |       |
// 3---4   6       10
// |           \
// 7---8       11---12
//               |
//              13
//              |
//              14
