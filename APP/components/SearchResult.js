var React = require('react');

var SearchResult = React.createClass({

	render: function(){
        console.log("here 4");
		return(
			<tr>
				<td>{this.value.geneId}</td>
		    <td>{this.value.geneAlias}</td>
		    <td>{this.value.geneSymbol}</td>
		    <td>{this.value.geneSum}</td>
		    <td>{this.value.cytoPosition}</td>
			</tr>
			)
	}
});

module.exports = SearchResult;
