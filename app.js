
// Build the Front End UI using Instant Search JS

//Include the algolia searchClient
const searchClient = algoliasearch('SBVFTCHWMS', '4b19609de87f3c4ede4c651a0a9d371c');

//This holds the search instance
const search = instantsearch({
  indexName: 'dev_eCommerce',
  searchClient,
});

//add search widget and hits widget, its placeholder, and template to add rich results with templates for a nice UI. Furthermore, every good search UX makes users understand why a given his is being displayed as part of the result set. One way to achieve that is to highlight the keywords from the query directly inside the hits.
//The highlighting result is built in the API JSON Response and it is shown here.g

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

// //Do a start method on the search variable
search.start();
// //Log search variable to see if everything is working and open browser and console to see if everything is working. Tell them that it's ok that nothing is happening at first which is to be expected, and then open console to see search object is logged correctly. You'll see an error message if there is something wrong, such as the wrong api key.
// //Can show an example of an error message.
console.log(search)


// search.addWidgets([
//   instantsearch.widgets.searchBox({
//     container: '#searchbox',
//   }),

//   instantsearch.widgets.hits({
//     container: '#hits',
//   })
// ]);

//First you need to set up the API Client. The first step is to install the algoliasearch package with a package manager. In this case we are using JavaScript and npm.

//Then we create an instance of the client with the appID and apiKey of the account you want to use, which is available on your Algolia Dashboard.
// We need an api key with write access to the index you want to push data to.


// const algoliasearch = require('algoliasearch');

// const client = algoliasearch('SBVFTCHWMS', '56d9bed1da275f0448f2e0c38e76b518');

// After we have the client variable set up, we can initialize the index where we want to upload our data to with the initIndex method. In this case, we provide the name of the index to target (from the Algolia Dashboard). If it doesn't exist yet, it will be automatically created.
// const index = client.initIndex('dev_eCommerce')

//Now that our client is ready, we can push data. In this case, I am pushing the data using a file that's on github.

// fetch('https://raw.githubusercontent.com/algolia/datasets/master/ecommerce/records.json')
// 	.then(function(response){

// 		return response.json()

// 	})
// 	.then(function(products) {
// 		return index.saveObjects(products, {
// 			autoGenerateObjectIDIfNotExist: true

// 		})
// 	})

// Configure Textual Relevance for your Data:

//
// const algoliasearch = require('algoliasearch');
//
// const client = algoliasearch('SBVFTCHWMS', '56d9bed1da275f0448f2e0c38e76b518');
//
// const index = client.initIndex('dev_eCommerce')
// //Observe the attributes for your data, this confirms that nothing is set up for the searchable attributes.
//
// index.getSettings().then(result => console.log(result));

//Here we perform an empty query on our index to see what's coming out of it and in what order.
//  index.search("").then(result =>{
//    console.log(results.nbHits);
//
//    for(const hit of result.hits){
//      console.log(hit);
//    }
//
//  })
// Define the textual attributes you want to be searchable
// index.setSettings({searchableAttributes:["name", "description", "brand", "categories"]});







//This holds the search instance
// const search = instantsearch({
//     indexName: 'dev_eCommerce',
//     searchClient,
// });

//search.start();
// //Log search variable to see if everything is working and open browser and console to see if everything is working. Tell them that it's ok that nothing is happening at first which is to be expected, and then open console to see search object is logged correctly. You'll see an error message if there is something wrong, such as the wrong api key.
// //Can show an example of an error message.
//console.log(search)






