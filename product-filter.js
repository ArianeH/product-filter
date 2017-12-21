var root = 'http://search.spoonflower.com/searchv2/';

$(document).ready(function() {
  requestProductsByAttribute('designs');
});

function getProductsWithTag() {
  var inputTerm = $("#tag-input-field").val();
  requestProductsByAttribute(getProductsWithTerms(inputTerm));
}

function getProductsWithSortStyle() {
  var sortInputTerm = $("#sort-selection option:selected").val();
  requestProductsByAttribute(getProductsBySort(sortInputTerm));
}

function getProductsWithSubstrate() {
  var substrateTerm = $("#substrate-selection option:selected").val();
  requestProductsByAttribute(getProductsBySubstrate(substrateTerm));
}

function getProductsWithTerms(term) {
 return 'designs?q=' + term
}

function getProductsBySort(sortStyle) {
  return 'designs?sort=' + sortStyle;
}

function getProductsBySubstrate(substrateType) {
  return 'designs?substrate=' + substrateType;
}

function requestProductsByAttribute(path) {
  $.ajax({
    url: root + path,
    method: 'GET'
  }).then(function(data) {
    var productCardTemplateScript = $("#product-card-template").html();
    var productCardTemplate = Handlebars.compile(productCardTemplateScript);
    var compiledHtml = productCardTemplate(data);
    $('.product-card-placeholder').html(compiledHtml);
  });
}

