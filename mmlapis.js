$(document).ready(function() {

    function shakespeare(element) {

$.ajax({
    url: "https://api.fungenerators.com/taunt/generate?category=shakespeare&limit=5",
    method: "GET"
    
}).then(function(darthvader) {
    console.log(darthvader);

    var randtaunt = Math.floor(Math.random()*5);
    element.text(JSON.stringify(darthvader.contents.taunts[randtaunt]))

})
}
shakespeare($(".shakespeare1"));







//below, this is from the api.fungenerator.com "new age" category -- haven't seen them yet (ran out of requests)
$.ajax({
    url: "https://api.fungenerators.com/taunt/generate?category=new-age-insult&limit=5",
    method: "GET"
}).then(function(BBeight) {

    console.log(BBeight);
    $(".na1").text(JSON.stringify(BBeight.contents.taunts[0]))
})

// ^ This stupid API has a limit of 5 free requests a day

//Time to try pulling from a new API!

//But this one also has a limit of 60 API calls a day "with a distribution of 5 calls an hour", so I need to be careful.

//API #2
$.ajax({
    url: "https://api.jokes.one/jod?category=animal",
    method: "GET"
}).then(function(kyloren) {

   $(".animaljoke-question").text(JSON.stringify(kyloren.contents.jokes[0].joke.title))
   // ^ This should display the question, "What happened to the frog that broke down?"

   $(".animaljoke-answer").text(JSON.stringify(kyloren.contents.jokes[0].joke.text))
   // ^And this will display the answer, "It got toad away."
})

//API #3 - THIS ONE ACTUALLY GENERATES SOMETHING RANDOM EVERY TIME!!!
$.ajax({
        
    url: "https://joke3.p.rapidapi.com/v1/joke?",
    method: "GET",
    headers: {
        "X-RapidAPI-Key":"7cd1301a26msh480d8432ebf3ac9p1c1f22jsn9b009ee86069"
    }
}).then(function(rey) {

    //console.log(rey.content)

   $(".randomjoke1").text(JSON.stringify(rey.content))
 
})
//API #4
$.ajax({
        
    url: "https://geek-jokes.sameerkumar.website/api",
    method: "GET"

}).then(function(leia) {

    console.log(leia)

   $(".chuck").text(JSON.stringify(leia))
 
})
});
