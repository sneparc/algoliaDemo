// const algoliasearch = require('algoliasearch');
//
// const client = algoliasearch('SBVFTCHWMS', "56d9bed1da275f0448f2e0c38e76b518");
//
// const index = client.initIndex('dev_eCommerce');
//
// index.getSettings().then(result => console.log(result));
//
// index.setSettings({searchableAttributes:["name", "description", "brand", "categories"]});


//
//
//
//
//
//
//
//
//
// fetch('https://raw.githubusercontent.com/algolia/datasets/master/ecommerce/records.json')
// 	.then(function(response){
//
// 		return response.json()
//
// 	})
// 	.then(function(products) {
// 		return index.saveObjects(products, {
// 			autoGenerateObjectIDIfNotExist: true
//
// 		})
// 	})


//Include the algolia searchClient
// const searchClient = algoliasearch('SBVFTCHWMS', '4b19609de87f3c4ede4c651a0a9d371c');
//
// //This holds the search instance
// const search = instantsearch({
//   indexName: 'dev_eCommerce',
//   searchClient,
// });












const searchClient = algoliasearch('SBVFTCHWMS', '4b19609de87f3c4ede4c651a0a9d371c');

const search = instantsearch({
  indexName: 'dev_eCommerce',
  searchClient,
});

search.start();

 console.log(search);



