const urlParams = new URLSearchParams(window.location.search);
const objectID = urlParams.get('objectID');


const indexName = 'dev_eCommerce'
const searchClient = algoliasearch('SBVFTCHWMS', '4b19609de87f3c4ede4c651a0a9d371c');


index.search(objectID).then(({hits}) => {
    document.getElementById('product-details').innerHTML = `
        <img src = "${hits[0].image}" />
        <div class="product-name">${hits[0].name}</div>
        <div class="hit-price">${hits[0].price}</div>
        <div class="hit-description>${hits[0].description}</div>
    
    
    `;

});

document.getElementById('add-to-cart').addEventListener('click', () => {
    aa('convertedObjectIDsAfterSearch', {
      index: indexName,
      eventName: 'Product Added to Cart',
      userToken: 'user-1',
      objectIDs: [objectID],
      queryID: urlParams.get('queryID'),
    });
  });