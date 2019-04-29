nodes = []
links = []
$(function(){
    $("#quote").typed({
      strings: ["Hello. I want to know about you...", "Can you tell me more about yourself"],
      typeSpeed: 50
    });
});


const Graph = ForceGraph3D()
(document.getElementById("3d-graph"));
Graph.resetProps(); // Wipe current state
const tunnel = function(Graph) {

nodes.push({id: "Kaitlan Easley", group: 0, size : 10})
nodes.push({id: "Jonathan Samuel", group: 2, size : 10})
nodes.push({id: "test", group: 1, size:4})
links.push({source: "Kaitlan Easley", target: "Jonathan Samuel"})



Graph
    .cooldownTicks(800)
    .cooldownTime(20000)
    .forceEngine('ngraph')
    .nodeLabel('id')
    .nodeAutoColorBy('group')
    .nodeVal('size')
    .graphData({ nodes: nodes, links: links });
};

tunnel(Graph)

function resetGraph(){
Graph.resetProps();
const data = function(Graph) {


Graph
    .cooldownTicks(800)
    .cooldownTime(20000)
    .forceEngine('ngraph')
    .nodeLabel('id')
    .nodeAutoColorBy('group')
    .nodeVal('size')
    .graphData({ nodes: nodes, links: links });
};

data(Graph)
}
