var React = require('react');
var SearchResult = require('./SearchResult');

var SearchResults = React.createClass({
	render: function(){
		return (
			<div className="table-responsive">
				<table className="table table-striped">
					<tbody>
							<tr>
                  <th>Gene Id</th>
                  <th>Gene Alias</th>
                  <th>Gene Symbol</th>
                  <th>Gene Sum</th>
                  <th>CytoPosition</th>
              </tr>
					{this.props.results.map(function(result, index){
						return <SearchResult result={result} key={index} index={index + 1}/>
					})}
					</tbody>
				</table>
			</div>
			)
	}
});

module.exports = SearchResults;
