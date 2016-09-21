/* global $ _ */

$(document).ready(function() {
  $.getJSON('data/product.json', function(products) {
    
    
    console.log(products);
    
    // 1. initView //
    initView(products);
    
    // 2. show all the products //
    showProducts(products);
    
    
  });
});

function initView(products) {
   // 1. summarize type of products, use the summary array to generate dropdown items in the fiterBy dropdown box
   
   // 2. add event listeners for filterBy onChange: callback should find selected filterBy value, use value to filter products by type, pass result to showProducts()
   // 3. add event listener for search box: callback should pluck out search term, execute recursive search, and pass results to showProducts()
    
    $('#form-product-search').on('submit', function(event) {
       event.preventDefault();
       showProducts(search(products, $('#input-search').val()));
    });
}


function showProducts(products) {
  // 1. empty all currently showing products //
  // 2. generate all html to show new list of products//
      // create a method that returns a <ul> that has all of the <li>, everything is styled correctly
      $('#section-products')
        .empty()
        .append(createProductList(products)
        .appendTo('main'));
    
    $('.list-products').css('list-style', 'none');
    
    
}

function createProductList(products) {
  // returns jQuery wrapped <ul>
  
  console.log("Working");
  
  return $('<ul>')  // Returns an Unordered List with Class of "List-Products"
    .addClass('list-products')
    .append(_.map(products, function(product) {  // Maps Unordered List with Product Details
        
        return $('<li>')
            .data('product', product)
            .append(createImageDiv(product.image))
            .append($('<div>').text(product.desc + " "))
            .append($('<div>').text(' Price:  $' + product.price))
            .append($('<div>').text(' In Stock: ' + product.stock));
            
    }));
  // map on products to call createProductListItem
}

function createProductListItem(product) {
  // returns jQuery wrapped <li>
  
  createImageDiv(`img/product/thumbs/${product.image}`)
  createProductDetailDiv(product.desc, product.price, product.stock)
}

function createImageDiv(path) {
    // returns jQuery wrapped <div> that has an <img> tag inside //
    
    return $('<div>')
        .append($('<img>').attr('src', 'img/product/thumbs/' + path));

}

function createProductDetailDiv(desc, price, stock) {
  // returns jQuery wrapped <div> which has three childen divs with the desc, price, stock
  
}


/*
 * collection: Any Array or Object
 * target: String representing searh term
 *
 */
function search(collection, target) {
    
    // 0. create something to hold the results  //
    // 1. iterate collection  (each?) //
    // 2. for each value in collection:
    //          a) is this value a string? if yes, do substring search for target
    //              > if matched, add product to results, if not, ignore.
    //          b) is this value a colletion?
    //              > search(value, target)
    //              ex) if(search(value,target).length)
    //                      results.push(value)
    // return result
    
}

$(document).ready(function(event){
    $('.search-panel .dropdown-menu').find('a').click(function(event) {
		event.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});
});