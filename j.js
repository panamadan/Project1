
$.ajax({
    url: "https://api.fungenerators.com/taunt/categories.json?start=0&limit=5",
    method: "GET"
}).then(function(yoda) {
    
    console.log(yoda);

})