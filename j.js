// $.ajax({
//    url: "https://api.fungenerators.com/taunt/categories.json?start=0&limit=5",
//    method: "GET"
//  }).then(function(yoda) {

//    $(".insultdiv").text(JSON.stringify(yoda.contents[0][0].description))

    //console.log(yoda);
    //console.log(yoda.contents[0][0].description)
// })

//__________________________________________

//Shakespeare insult #1
$.ajax({
    url: "https://api.fungenerators.com/taunt/generate?category=shakespeare&limit=5",
    method: "GET"
}).then(function(darthvader) {

    $(".sp1").text(JSON.stringify(darthvader.contents.taunts[0]))
})

//Shakespeare insult #2
$.ajax({
    url: "https://api.fungenerators.com/taunt/generate?category=shakespeare&limit=5",
    method: "GET"
}).then(function(darthvader2) {

    $(".sp2").text(JSON.stringify(darthvader2.contents.taunts[1]))
})

//Shakespeare insult #3
$.ajax({
    url: "https://api.fungenerators.com/taunt/generate?category=shakespeare&limit=5",
    method: "GET"
}).then(function(darthvader3) {

    $(".sp3").text(JSON.stringify(darthvader3.contents.taunts[2]))
})

//Shakespeare insult #4
$.ajax({
    url: "https://api.fungenerators.com/taunt/generate?category=shakespeare&limit=5",
    method: "GET"
}).then(function(darthvader4) {

    $(".sp4").text(JSON.stringify(darthvader4.contents.taunts[3]))
})

//Shakespeare insult #5
$.ajax({
    url: "https://api.fungenerators.com/taunt/generate?category=shakespeare&limit=5",
    method: "GET"
}).then(function(darthvader5) {

    $(".sp5").text(JSON.stringify(darthvader5.contents.taunts[4]))
})