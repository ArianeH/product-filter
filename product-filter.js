var root = 'http://search.spoonflower.com/searchv2/designs';

$(document).ready(function() {
  $.ajax({
    url: root,
    method: 'GET'
  }).then(function(data) {
    console.log(data);
    var productCardTemplateScript = $("#product-card-template").html();
    var productCardTemplate = Handlebars.compile(productCardTemplateScript);
    var compiledHtml = productCardTemplate(data);
    $('.product-card-placeholder').html(compiledHtml);
  });
});
