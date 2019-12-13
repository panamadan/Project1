$.ajax({
    url: "https://api.fungenerators.com/taunt/categories.json?start=0&limit=5",
    method: "GET"
}).then(function(yoda) {

    $(".insultdiv").text(JSON.stringify(yoda.contents[0][0].description))

    console.log(yoda);
    console.log(yoda.contents[0][0].description)
})