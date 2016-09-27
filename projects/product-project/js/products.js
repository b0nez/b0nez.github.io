/* global $ _*/

$(document).on('ready', function(event) {
    $.getJSON('data/product.json', function(products) {
      
        createProductList(products).appendTo('.flex-container');
        filterType(products);
        lowestToHighest(products);
        highestToLowest(products);
        showProducts(products);
        searchTarget(products);
        initView(products);
        
    }).fail(function() {
        console.log("getJSON on product data failed!");
    });
});


function initView(products) {
    $('.thumbnail').on('click', function(event) {
        $('.modal-body').empty();
        var imageUrl = $(event.currentTarget).attr('url');
        var specs = $(event.currentTarget).attr('specs');
        var price = $(event.currentTarget).attr('price');
        $('.modal-body')
            .append($('<img>')
            .attr('src', imageUrl)
            .attr('id', 'temp-image')
            .addClass('col-sm-6 col-md-6'))
            .append($('<p>')
            .html('Price: ' + price + '<br><br>' + specs )
            .addClass('col-sm-6 col-md-6'));
        $('#modalBox').modal('show');
        $('.close').one('click', function() {
            $('.modal-body').empty();
        });
    });
}

function showProducts(products) {
    $('.allproducts').on('click', function() {
        $('.list-products').hide();
        $('.thumbnail').hide();
        var newList = _.map(products, function(product) {
            createProductListItem(product).appendTo('.flex-container');
        });
        initView();
        return newList;
    });
}

function createProductList(products) {
    return $('<ul>')
        .attr('id', 'list-products')
        .addClass('list-products')
        .append(_.map(products, function(product, index) {
            return createProductListItem(product);
        }));
}

function createProductListItem(product) {
    return $('<li>')
        .attr('id', 'li-product')
        .addClass('thumbnail')
        .attr('url', 'img/product/' + product.image)
        .attr('specs', product.specs)
        .attr('price', product.price)
        .append(createImageDiv('img/product/thumbs/' + product.image))
        .append(createProductDetailDiv(product.desc, 'Price: $' + product.price.toFixed(2), 'Left in stock: ' + product.stock));
}

function createImageDiv(url) {
    return $('<div>').addClass('image-div')
        .append($('<img>').attr('src', url).addClass('image'));
}

function createProductDetailDiv(desc, price, stock) {
  
    desc = $('<div>')
        .addClass('desc')
        .html(desc);
    price = $('<div>')
        .addClass('price')
        .html(price);
    stock = $('<div>')
        .addClass('stock')
        .html(stock);
    return $('<div>').addClass('product-details').append(desc, price, stock);
}

function isCollection(value) {
    if (value === null) return false;
    if (value instanceof Date === true) return false;
    if (typeof value !== "object") return false;
    return true;
}


function search(collection, target) {
  target = target.toLowerCase();
  var results = [];
  _.each(collection, function(value) {
    if (typeof value === "string") {
      if (value.toLowerCase().indexOf(target.toLowerCase()) > -1) {
        results.push(value);
      }
    }
    else if (isCollection(value)) {
      if (search(value, target).length) {
        results.push(value);
      }
    }
  });
  return results;
}


function filterType(products) {
  
    var pluckedTypes = _.unique(_.pluck(products, "type"));
    var filteredlists = _.map(pluckedTypes, function(pluckedType) {
        return $('<li>')
            .attr('id', 'type')
            .append($('<a href="#">').html(pluckedType))
            .prependTo('.dropdown-menu')
            .on('click', function() {
                $('.list-products').hide();
                $('.thumbnail').hide();
                _.map(products, function(product) {
                    if (product.type === pluckedType) {
                        return createProductListItem(product).appendTo('.flex-container');
                    }
                });
                initView(products);
            });
    });
    return filteredlists;
}

function getLowest(products, key) {
    return products.sort(function(a, b) {
        return a[key] - b[key];
    });
}

function lowestToHighest(products) {
    $('.lowest').on('click', function() {
        $('.list-products').hide();
        $('.thumbnail').hide();
        _.map(getLowest(products, "price"), function(product) {
            return createProductListItem(product).appendTo('.flex-container');
        });
        initView(products);
    });

}

function getHighest(products, key) {
    return products.sort(function(a, b) {
        return b[key] - a[key];
    });
}

function highestToLowest(products) {
    $('.highest').on('click', function() {
        $('.list-products').hide();
        $('.thumbnail').hide();
        _.map(getHighest(products, "price"), function(product) {
            return createProductListItem(product).appendTo('.flex-container');
        });
        initView(products);
    });
}

function searchTarget(products) {
    $('#button-search').on('click', function(event) {
        event.preventDefault();
        $('.list-products').hide();
        $('.thumbnail').hide();
        
        var target = document.getElementById('input').value;
        _.map(search(products, target), function(product) {
            return createProductListItem(product).appendTo('.flex-container');
        });
        initView(products);
    });
}
