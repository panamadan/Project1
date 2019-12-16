$(document).ready(function() {

    // Category #1 - Shakespeare Taunts
    function shakespeare(element) {
    // I made "element" the parameter of this function.

        $.ajax({
        url: "https://api.fungenerators.com/taunt/generate?category=shakespeare&limit=5",
        method: "GET"
        
        }).then(function(darthvader) {
        console.log(darthvader);

        var randtaunt = Math.floor(Math.random()*5);
        element.text(JSON.stringify(darthvader.contents.taunts[randtaunt]))
        })
    }
    // shakespeare($(".shakespeare1"));

    //__________________________________________________________________________________

    // Catetory #2 - "New Age" Taunts
    // Be careful with this category; it runs out of requests quickly. You get what you pay for!

    function newage(element) {

        $.ajax({
            url: "https://api.fungenerators.com/taunt/generate?category=new-age-insult&limit=5",
            method: "GET"

        }).then(function(BBeight) {
            console.log(BBeight);

            var randnewage = Math.floor(Math.random()*5);
            element.text(JSON.stringify(BBeight.contents.taunts[randnewage]))
        })
    }
    // newage($(".na1"));


    //__________________________________________________________________________________

    // Catetory #3 - Animal Jokes
    // This one has a limit of 60 API calls a day "with a distribution of 5 calls an hour", so be careful.

    function critterjokes(element) {
    // This wrapper function is targeting the question, i.e. "What happened to the frog that broke down?"
        $.ajax({
            url: "https://api.jokes.one/jod?category=animal",
            method: "GET"
        }).then(function(kyloren) {

        var jokequestion =  Math.floor(Math.random()*5);
        element.text(JSON.stringify(kyloren.contents.jokes[jokequestion].joke.title+kyloren.contents.jokes[jokeanswer].joke.text))
        //$(".animaljoke-question").text(JSON.stringify(kyloren.contents.jokes[0].joke.title))
        })
    }
    // critterjokesquestion($(".animaljoke-question"))


    // And this one is targeting an answer, i.e. "It got toad away."
    function critterjokesanswer(element) {
        $.ajax({
            url: "https://api.jokes.one/jod?category=animal",
            method: "GET"
        }).then(function(kyloren) {
        
        var jokeanswer = Math.floor(Math.random()*5);
        element.text(JSON.stringify(kyloren.contents.jokes[jokeanswer].joke.text))
        //$(".animaljoke-answer").text(JSON.stringify(kyloren.contents.jokes[0].joke.text))
        })
    }
    // critterjokesanswer($(".animaljoke-answer"))


    //__________________________________________________________________________________

    // Catetory #4 - Generic
    function genericjoke(element) {
        $.ajax({
                
            url: "https://joke3.p.rapidapi.com/v1/joke?",
            method: "GET",
            headers: {"X-RapidAPI-Key":"7cd1301a26msh480d8432ebf3ac9p1c1f22jsn9b009ee86069"}
        }).then(function(rey) {
        //console.log(rey.content)
        //$(".randomjoke1").text(JSON.stringify(rey.content))
        })
        // ***This one already generates something random each time you refresh the page, so I don't need to write additional code to randomize it.
    }
    // genericjoke($(".randomjoke1"))

 
    //__________________________________________________________________________________

    // Catetory #5 - Chuck Norris
    function chucknorriswrapper(element) {
        $.ajax({
            url: "https://geek-jokes.sameerkumar.website/api",
            method: "GET"
        }).then(function(leia) {
        console.log(leia)
        //$(".chuck").text(JSON.stringify(leia))
        })
        // ***This one also automatically generates something random each time you refresh.
    }
    // chucknorriswrapper($(".chuck"))

})