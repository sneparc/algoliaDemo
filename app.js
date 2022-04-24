const searchClient = algoliasearch('SBVFTCHWMS', '4b19609de87f3c4ede4c651a0a9d371c');

const search = instantsearch({
  indexName: 'dev_eCommerce',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: "Search for product, brands, or categories"
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    templates:{
    	item: data =>`
    	<img src= "${data.image}" />
    	<div class="hit-title">
    	<h4>${data._highlightResult.name.value}</h4>
    	<div class="price">${data.price}</div>
    	</div>
    	<p>${data._highlightResult.description.value}</p>
    	<br>
    	<br>



    	`
    }
  })
]);

search.start();
console.log(search)
// search.addWidgets([
//   instantsearch.widgets.searchBox({
//     container: '#searchbox',
//   }),

//   instantsearch.widgets.hits({
//     container: '#hits',
//   })
// ]);


// const algoliasearch = require('algoliasearch');

// const client = algoliasearch('SBVFTCHWMS', '56d9bed1da275f0448f2e0c38e76b518');

// const index = client.initIndex('dev_eCommerce')

// index.setSettings({searchableAttributes:["name", "description", "brand", "categories"]});

// fetch('https://raw.githubusercontent.com/algolia/datasets/master/ecommerce/records.json')
// 	.then(function(response){

// 		return response.json()

// 	})
// 	.then(function(products) {
// 		return index.saveObjects(products, {
// 			autoGenerateObjectIDIfNotExist: true

// 		})
// 	})

// index.getSettings().then(result => console.log(result));



// index.search("Samsung").then(result => {
// 	console.log(result.nbHits);

// 	for (const hit of result.hits){
// 		console.log(hit);
// 	}

// })









