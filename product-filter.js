var root = 'http://search.spoonflower.com/searchv2/designs';

$.ajax({
  url: root,
  method: 'GET'
}).then(function(data) {
  console.log(data);
});
