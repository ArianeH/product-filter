var root = 'http://search.spoonflower.com/searchv2/';

$(document).ready(function() {
  requestProductsByAttribute('designs');
});

function searchByInputs() {
  var substrateInput = $("#substrate-selection option:selected").val();
  var sortInput = $("#sort-selection option:selected").val();
  var searchInput = $("#tag-input-field").val();

  requestProductsByAttribute(buildQuery(searchInput, sortInput, substrateInput));
}

function buildQuery(term, sortStyle, substrateType) {
 return 'designs?q=' + term + '&sort=' + sortStyle + '&substrate=' + substrateType
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

