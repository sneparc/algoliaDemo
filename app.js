const algoliasearch = require('algoliasearch');

const client = algoliasearch('SBVFTCHWMS', '56d9bed1da275f0448f2e0c38e76b518');

const index = client.initIndex('dev_eCommerce')

fetch('https://raw.githubusercontent.com/algolia/datasets/master/ecommerce/records.json')
	.then(function(response){

		return response.json()

	})
	.then(function(products) {
		return index.saveObjects(products, {
			autoGenerateObjectIDIfNotExist: true

		})
	})