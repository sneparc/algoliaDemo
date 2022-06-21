console.log(aa);
const searchClient = algoliasearch('SBVFTCHWMS', '4b19609de87f3c4ede4c651a0a9d371c');

const search = instantsearch({
  indexName: 'dev_eCommerce',
  searchClient,
  searchParameters: {
    clickAnalytics: true,
  },
});
aa('init', {
  appId: 'SBVFTCHWMS',
  apiKey: '4b19609de87f3c4ede4c651a0a9d371c',
});

aa('setUserToken', 'user-1');
 search.use(
	instantsearch.middlewares.createInsightsMiddleware({
		insightsClient: aa
	})
	
	);


	
search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: "Search for product, brands, or categories"
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    templates:{
      item(hit, bindEvent){ return	`
    	<img src= "${hit.image}" />
    	<div class="hit-title">
    	<h4>${hit._highlightResult.name.value}</h4>
    	<div class="price">${hit.price}</div>
    	</div>
    	<p>${hit._highlightResult.description.value}</p>
    	<br>
      <button type="button" ${bindEvent('click', hit, 'Product Added')}>
  Send a Click Event
</button>
    	<br>
    	`
    }
  }
  }),

  instantsearch.widgets.refinementList({
  container: '#refinement-list',
  attribute: 'brand',
  }),

]);

search.start();