var request = require('request');
var config = require('../../../../node_modules/config');
var Payloads = require('./Payloads');
var Q = require('q');

/**
* @about : renvoit l'ensemble des indexes existants
**/
var searchAllIndexes = function(){
    var deferred = Q.defer();
    var url = config.serviceURL +
        "/indexes/" +
        config.indexName +
        "?api-version=" + config.apiVersion;

    var headers = {
      'api-key': config.apiKey,
      'Content-Type': 'application/json'
    };

    var options = {
        url: url,
        headers: headers,
        withCredentials: false
    };

    request.get(options, function(error, response, body){
        console.info("GET all indexes : ");
        console.info("response : "+response);
        console.info("body : "+body);
        deferred.resolve();
    });

    return deferred.promise;
};

/**
* @about renvoit le résultat d'une recherche sur un champ texte
**/
var searchInfosFromGivenValue = function( value ){
    var deferred = Q.defer();

    var url = config.serviceURL +
        "/indexes/entrezgene/docs?search=" +
        value+
        "&searchFields=geneSymbol,geneAlias,geneId&$select=geneId,geneAlias,geneSymbol,geneSum,cytoPosition"+
        "?api-version=" +
        config.apiVersion;

    var headers = {
        'api-key': config.apiKey,
        'Content-Type': 'application/json'
    };

    var options = {
        url: url,
        headers: headers,
        withCredentials: false
    };

    request.post(options, function(error, response, body){
    	console.info("run function result: " + response.statusCode);
    	deferred.resolve();
    });

    return deferred.promise;
};

/**
* @about renvoit tous les documents d'un index donné
**/
var searchDocsFromGivenIndex = function(){
    var deferred = Q.defer();

    var url = config.serviceURL +
        "/indexes/entrezgene/docs?search=" +
        "*"+
        "&orderby=geneid desc"+
        "?api-version=" +
        config.apiVersion;

    var headers = {
        'api-key': config.apiKey,
        'Content-Type': 'application/json'
    };

    var options = {
        url: url,
        headers: headers,
        withCredentials: false
    };

    request.get(options, function(error, response, body){
    	console.info("run function result: " + response.statusCode);
    	deferred.resolve();
    });

    return deferred.promise;
};

var getIndex = function(){
    var deferred = Q.defer();
    var url = config.serviceURL +
        "/indexes/" +
        config.indexName +
        "?api-version=" + config.apiVersion;

    var headers = {
    	'api-key': config.apiKey,
    	'Content-Type': 'application/json'
    };

    var options = {
        url: url,
        headers: headers,
        withCredentials: false
    };

    request.get(options, function(error, response, body){
        console.info("GET all indexes : ");
        console.info("response : "+response);
        console.info("body : "+body);
        deferred.resolve();
    });

    return deferred.promise;
};

searchAllIndexes();
