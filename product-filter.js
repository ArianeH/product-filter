var root = 'http://search.spoonflower.com/searchv2/';

$(document).ready(function() {
  requestProductsByAttribute('designs');
});

function getProductsWithTag() {
  var inputTerm = document.getElementById("tag-input-field").value;
  requestProductsByAttribute(getProductsWithTerms(inputTerm));
}

function getProductsWithSortStyle() {
  var sortInputTerm = $("#sort-selection option:selected").text().toLowerCase();
  console.log(sortInputTerm)
  requestProductsByAttribute(getProductsBySort(sortInputTerm));
}

function getProductsWithTerms(term) {
 return 'designs?q=' + term
}

function getProductsBySort(sortStyle) {
  return 'designs?sort=' + sortStyle;
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

