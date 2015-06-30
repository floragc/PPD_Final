/* ---------------------------------------------------------- */
/** Implementation of Azure Search Rest Calls */
/* ---------------------------------------------------------- */

$(function() {

    var client = AzureSearch({
        url: "https://miage.search.windows.net",
        key: ""
    });

    var schema = {
      name: 'miage',
      "corsOptions": {
        "allowedOrigins": ["*"]
      }
    };

    $("#search_launch").on("click", function(e){
			client.listIndexes(function(err, schema){
            if(err){
                console.log("err >>> "+err);
                $("#result").html('<div id="result-panel" class="panel panel-danger"></div>');
                $("#result-panel").append('<div class="panel-heading">Erreur lors du traitement de la requete</div>');
                $("#result-panel").append('<div class="panel-body">'+err+'</div>');
            }
            else{
                console.log("schema >>> "+schemas);
                $("#result").html('<div id="result-panel" class="panel panel-success"></div>');
                $("#result-panel").append('<div class="panel-heading">Resultats de la requete</div>');
                $("#result-panel").append('<div class="panel-body">'+schemas+'</div>');
            }
        });

			/*$.ajax({
			type: 'GET',
			url: "https://miage.search.windows.net/indexes/?api-version=2015-02-28",
			beforeSend: function (xhr) {
				xhr.setRequestHeader('api-key', 'D6A322989F8A6FD072C1DF22E95558E1');
				xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
				xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
				//xhr.setRequestHeader('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
				 xhr.setRequestHeader('X-Custom-Header', 'value');
			},
			data: {},
			success: function (schema) {
			    console.log("schema >>> "+schemas);
                $("#result").html('<div id="result-panel" class="panel panel-success"></div>');
                $("#result-panel").append('<div class="panel-heading">Resultats de la requete</div>');
                $("#result-panel").append('<div class="panel-body">'+schemas+'</div>');

			},
			error: function () {
                console.log("err >>> Fail!");
                $("#result").html('<div id="result-panel" class="panel panel-danger"></div>');
                $("#result-panel").append('<div class="panel-heading">Erreur lors du traitement de la requete</div>');
                $("#result-panel").append('<div class="panel-body"> Fail ! </div>');
			},
			});*/

        /*client.updateIndex('adventurehotel ', schema, function(err){
            console.log("Inside");
            if(err){
                console.log("err >>> "+err);
                $("#result").html('<div id="result-panel" class="panel panel-danger"></div>');
                $("#result-panel").append('<div class="panel-heading">Erreur lors du traitement de la requete</div>');
                $("#result-panel").append('<div class="panel-body">'+err+'</div>');
            }
            else{
                console.log("schema >>> "+schemas);
                $("#result").html('<div id="result-panel" class="panel panel-success"></div>');
                $("#result-panel").append('<div class="panel-heading">Resultats de la requete</div>');
                $("#result-panel").append('<div class="panel-body">'+schemas+'</div>');
            }
        });*/
        /*
        client.listIndexes(function(err, schema){
            console.log("Inside");
            if(err){
                console.log("err >>> "+err);
                $("#result").html('<div id="result-panel" class="panel panel-danger"></div>');
                $("#result-panel").append('<div class="panel-heading">Erreur lors du traitement de la requete</div>');
                $("#result-panel").append('<div class="panel-body">'+err+'</div>');
            }
            else{
                console.log("schema >>> "+schemas);
                $("#result").html('<div id="result-panel" class="panel panel-success"></div>');
                $("#result-panel").append('<div class="panel-heading">Resultats de la requete</div>');
                $("#result-panel").append('<div class="panel-body">'+schemas+'</div>');
            }
        });
        */
    });
});
