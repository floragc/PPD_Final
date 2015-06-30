var config = require('../../../../node_modules/config');
var payloads = {};

payloads.dataSourcePayload = {
    "name" : config.dataSourceName,
    "description" : "FLORAETMARIONTEST",
    "type" : config.dataSourceType,
    "credentials" : { "connectionString" : config.connectionString },
    "container" : { "name" : config.tableName }
};

payloads.indexerPayload = {
    "name" : config.indexerName,
    "description" : "USGS data indexer",
    "dataSourceName" : config.dataSourceName,
    "targetIndexName" : config.indexName,
    "parameters" : { "maxFailedItems" : config.maxFailedItems, "maxFailedItemsPerBatch" : config.maxFailedItemsPerBatch, "base64EncodeKeys": config.base64EncodeKeys }
};

payloads.indexPayload =
{
    "name": config.indexName,
    "fields": [
        {
            "name": "FLORAETMARIONTEST_FEATURE_ID",
            "type": "Edm.String",
            "searchable": false,
            "filterable": false,
            "retrievable": true,
            "sortable": false,
            "facetable": false,
            "key": true,
            "analyzer": null
        },
        {
            "name": "FLORAETMARIONTEST_FEATURE_NAME",
            "type": "Edm.String",
            "searchable": true,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": false,
            "key": false,
            "analyzer": null
        },
        {
            "name": "FLORAETMARIONTEST_FEATURE_CLASS",
            "type": "Edm.String",
            "searchable": true,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": false,
            "key": false,
            "analyzer": null
        },
        {
            "name": "FLORAETMARIONTEST_STATE_ALPHA",
            "type": "Edm.String",
            "searchable": true,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": false,
            "key": false,
            "analyzer": null
        },
        {
            "name": "FLORAETMARIONTEST_COUNTY_NAME",
            "type": "Edm.String",
            "searchable": true,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": false,
            "key": false,
            "analyzer": null
        },
        {
            "name": "FLORAETMARIONTEST_LOCATION",
            "type": "Edm.GeographyPoint",
            "searchable": false,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": false,
            "key": false,
            "analyzer": null
        },
        {
            "name": "FLORAETMARIONTEST_ELEV_IN_M",
            "type": "Edm.Int32",
            "searchable": false,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": true,
            "key": false,
            "analyzer": null
        },
        {
            "name": "FLORAETMARIONTEST_ELEV_IN_FT",
            "type": "Edm.Int32",
            "searchable": false,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": true,
            "key": false,
            "analyzer": null
        },
        {
            "name": "FLORAETMARIONTEST_MAP_NAME",
            "type": "Edm.String",
            "searchable": true,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": false,
            "key": false,
            "analyzer": null
        },
        {
            "name": "FLORAETMARIONTEST_DATE_CREATED",
            "type": "Edm.DateTimeOffset",
            "searchable": false,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": true,
            "key": false,
            "analyzer": null
        },
        {
            "name": "FLORAETMARIONTEST_DATE_EDITED",
            "type": "Edm.DateTimeOffset",
            "searchable": false,
            "filterable": true,
            "retrievable": true,
            "sortable": true,
            "facetable": true,
            "key": false,
            "analyzer": null
        },
        {
            "name": "FLORAETMARIONTEST_DESCRIPTION",
            "type": "Edm.String",
            "searchable": true,
            "filterable": false,
            "retrievable": true,
            "sortable": false,
            "facetable": false,
            "key": false,
            "analyzer": null
        },
        {
            "name": "FLORAETMARIONTESTHISTORY",
            "type": "Edm.String",
            "searchable": true,
            "filterable": false,
            "retrievable": true,
            "sortable": false,
            "facetable": false,
            "key": false,
            "analyzer": null
        }
    ],
    "scoringProfiles": [],
    "defaultScoringProfile": null,
    "corsOptions":
    {
    	"allowedOrigins":["*"],
    	"maxAgeInSeconds":300
    },
    "suggesters": []
};

module.exports = payloads;
