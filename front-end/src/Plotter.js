import cytoscape from "cytoscape";

function init(elements, id) {
  var style=[ // the stylesheet for the graph
			{
        selector: 'node',
        style: {
          'background-color': '#384A94',
          'color':'#fff',
          'label': 'data(id)',
          'text-valign':'center',
          "border-color": '#BBBBBB',
          "border-width": '1',
          'width': 60,
          'height': 60
        }
			},
			{
        selector: 'edge',
        style: {
          'width': 1,
          'line-color': '#444',
          'target-arrow-color': '#444',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier'
        }
			},
			{
        selector: "edge[label]",
        css: {
          "label": "data(label)",
          "text-margin-y": "-10px",
        }
      }
		];
  var cy = cytoscape({
    container: document.getElementById(id), // container to render in
    elements,
    style,
    layout: {
      name: 'grid',
      rows: 1
    }
  });
}
const Plotter = {init}
export default Plotter;