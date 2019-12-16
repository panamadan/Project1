// Make Me Laugh's javascript file
// DPLD - Dan Priya Lilliana Dick
// 20191218
//
//
//
//***************
//*   Globals   *
//***************

const debug = true;

var eventFunctions =
[
    {
        name: "changeP",
        activity: changeP,
        timeUntilStart: 0
    },
    {
        name: "toggleButtonRun",
        activity: toggleButtonRun,
        timeUntilStart: 0
    },
    {
        name: "playAudio",
        activity: playAudio,
        timeUntilStart: 0
    },
    {
        name: "backgroundBlaster",
        activity: backgroundBlaster,
        timeUntilStart: 0
    }
]

var audioList =
[
   "aoogah",       
   "applause2",    
   "bicyclebell",  
   "boing",        
   "burp",         
   "burp2",        
   "buzzer",       
   "calltoarms",   
   "carhorn",      
   "cashregister", 
   "cheering",     
   "chimeup",      
   "clang",        
   "construction", 
   "cuckoo",       
   "doorcreak",    
   "drumrimshot",  
   "fanfare",      
   "fart",         
   "gasp",         
   "gong",         
   "gunshots",     
   "honk",         
   "laugh",        
   "modem",        
   "newsbeep",     
   "peeeooop",     
   "radiotuner",   
   "roulette",     
   "runaway",      
   "malescream",   
   "mpfart",       
   "rejoicing",    
   "scream",       
   "sirens",       
   "slidewhistle", 
   "sonar",        
   "splash",       
   "splooge",      
   "toot",         
   "train",        
   "trumpet",      
   "ufo",          
   "ufo2",         
   "w32netsky",    
   "war",          
   "war2",         
   "warnapalm",    
   "warninghorn",  
   "whip",         
   "whistleshrill",
   "wow",
   "yay", 
   "zag"
]

//*****************
//*   Functions   *
//*****************

// randoEngine() services the one-second timer by counting
// down to the next event. On timeout, the next event is 
// executed, and the time interval to the next event is loaded.
// when the list of events is exhausted, the list is shuffled
// randomly, then intervals are assigned randomly, and the 
// party goes on...
var onDeck = 0;         // index into eventFunctions
var timeSec = 0;        // countdown between functions
function randoEngine()
{
  // the engine counts down to the next event, then runs
  // the event function, and sets the timer for the next event.
  
  // another entry, another second
  // decrement the timer and see if it has expired.
  if (--timeSec == 0)
  {
    // time to do something!
    eventFunctions[onDeck].activity();

    // glad that's done. hey! gotta get ready for the next event!

    // go to the next event, with wrap-around
    if (++onDeck == eventFunctions.length)
    {
        // oops, the index is past the list. back to the start
        onDeck = 0;
        // but let's not run the list the same way.
        // shuffle the list.
        shuffleEventFunctions();
        // and let's not do the same times between events.
        // provide different intervals.
        assignRandomIntervals();
    }

    // reset the countdown for the next event.
    timeSec = eventFunctions[onDeck].timeUntilStart;
  }
  if (debug) {console.log("timeSec "+timeSec);}
}

function shuffleEventFunctions()
{
  eventFunctions.sort((a, b) => Math.random() - 0.5);

  if (debug)
  {
    for (let i = 0; i < eventFunctions.length; console.log("eventFunctions "+i+" name: "+eventFunctions[i++].name)){}
  }
}

function assignRandomIntervals() 
{
  const minDelay =  3;     // seconds
  const maxDelay = 10;     // seconds

  for (let i = 0; i < eventFunctions.length; i++)
  {
     eventFunctions[i].timeUntilStart = Math.floor(Math.random()*(maxDelay - minDelay)) + minDelay;
  }
}


var backgrounds =
[
  "assets/images-backgrounds/shutterstock_751244767.jpg",
  "assets/images-backgrounds/shutterstock_1293011533.jpg",
  "assets/images-backgrounds/sparklesAndColors.gif",
  "assets/images-backgrounds/bottomlessPit.gif"
]
function backgroundBlaster()
{
    var nextBkg = backgrounds[Math.floor(Math.random()*backgrounds.length)];

    if (debug) {console.log("Background change to \""+nextBkg+"\"");}

    $("body").css({"background-image":"url("+nextBkg+")"});
}


function changeP() 
{
    var red = 0;
    var green = 0;
    var blue = 0;

    var red   = Math.floor(Math.random()*256);
    var blue  = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var rgb = "rgb("+red+","+green+","+blue+")";

    if (debug) {console.log("text change to \""+rgb+"\"");}

    $(".wrapperDiv").css({"background-color": rgb});
}

var muted = false;

function playAudio(elementName)
{
  if (!muted)
  {
    var which = 0;

    if (elementName)
    {
      var audioEl = document.getElementById(elementName);
      audioEl.play();
    }
    else
    {
      var which = Math.floor(Math.random()*audioList.length);
      var audioEl = document.getElementById(audioList[which]);
      audioEl.play();
      if (debug) {console.log("playing audio :"+ audioList[which]);}
    }
  }
}

// var root = document.querySelector(".clickCounter");
// var clickCount = 0; // added a variable

// var mithril = 
// {
//   view: function() 
//   {
//     return m("main", [ m("button",{onclick: function() {clickCount++}}, clickCount + " clicks") ])
//   }
// }
// m.mount(root, mithril)
var runButtonRun = false;
var oldRunButton = false;

function toggleButtonRun()
{
  if (!runButtonRun)
  {
    runButtonRun = true;
    $(".bigFunnyBtn").css("background-color","blue");
  }
  else
  {
    runButtonRun = false;
    $(".bigFunnyBtn").css("background-color","red");
  }
}

document.addEventListener('mousemove',buttonRun);

function buttonRun(event)
{
  var jump = (runButtonRun && !oldRunButton) ? 200 : 0;

  if (runButtonRun)
  {
    var x = event.clientX;
    var dx = event.movementX;
    var y = event.clientY;
    var dy = event.movementY;
    var top  = x + dx + jump;
    top =  top  < 0 ? 0 : (top  > 1000 ? 1000 : top);
    var left = y + dy + jump; 
    left = left < 0 ? 0 : (left > 1000 ? 1000 : left);
    $(".bigFunnyBtn").css("top" ,top +"px");
    $(".bigFunnyBtn").css("left",left+"px");
  }
  else
  {
    $(".bigFunnyBtn").css("top" ,event.clientY-100+"px");
    $(".bigFunnyBtn").css("left",event.clientX-100+"px");
  }
  oldRunButton = runButtonRun;
}

$('.dropdown-trigger').dropdown();

$(".happyFace").on("click",function()
{
  playAudio("haha");
})

var clickCount = 0;
var randomChecked = true;
var oldRandomChecked = false;
var NSFW = true;

$("#bigFunnyBtn").on("click",function()
{
  $("#bigFunnyBtn").text("BIG FUNNY BUTTON"+ "\n" + ++clickCount);
  
  // get content based on checkbox state
  NSFW = document.getElementById("chkNSFW").checked;
  if (document.getElementById("chkNewAge"      ).checked) {newage($(".na1"              ),NSFW);}
  if (document.getElementById("chkChuckNorris" ).checked) {chucknorriswrapper($(".chuck"),NSFW);}
  if (document.getElementById("chkTaunt"       ).checked) {shakespeare($(".shakespeare1"),NSFW);}
  if (document.getElementById("chkCritterJokes").checked) {critterjokes($(".animaljoke" ),NSFW);}
  if (document.getElementById("chkGenericJokes").checked) {genericjoke($(".randomjoke1" ),NSFW);}
  // if (document.getElementById("chkFortune"     ).checked) {fortunecookie($(".fortune"   ),NSFW);}
  muted         = document.getElementById("chkMute" ).checked;
  randomChecked = document.getElementById("chkRandom").checked;
  if (randomChecked && !oldRandomChecked)
  {
    masterClock = setInterval(randoEngine,1000);
  }
  else if (!randomChecked && oldRandomChecked)
  {
    clearInterval();
  }

  oldRandomChecked = randomChecked;

  if (!muted) {playAudio("boing");}
})

// API functions ***

// Category #1 - Shakespeare Taunts
function shakespeare(element,nsfw) {

    $.ajax({
    url: "https://api.fungenerators.com/taunt/generate?category=shakespeare&limit=5",
    method: "GET"
    
    }).then(function(darthvader) {
    console.log(darthvader);

    var randtaunt = Math.floor(Math.random()*5);
    element.text(JSON.stringify(darthvader.contents.taunts[randtaunt]));
    })
}

// Category #2 - "New Age" Taunts
// Be careful with this category; it runs out of requests quickly. You get what you pay for!
function newage(element,nsfw) {

    $.ajax({
        url: "https://api.fungenerators.com/taunt/generate?category=new-age-insult&limit=5",
        method: "GET"

    }).then(function(BBeight) {
    if (debug) {console.log(BBeight);}

    var randnewage = Math.floor(Math.random()*5);
    element.text(JSON.stringify(BBeight.contents.taunts[randnewage]))
    })
}

// Category #3 - Animal Jokes
// This one has a limit of 60 API calls a day "with a distribution of 5 calls an hour", so be careful.
function critterjokes(element,nsfw) {
// This wrapper function is targeting the question, i.e. "What happened to the frog that broke down?"
    $.ajax({
        url: "https://api.jokes.one/jod?category=animal",
        method: "GET"
    }).then(function(kyloren) {
    if (debug) {console.log(kyloren);}

    // var joke =  Math.floor(Math.random()*5);
    element.text(JSON.stringify(kyloren.contents.jokes[0].joke.text))
    })
}

// Category #4 - Generic
function genericjoke(element,nsfw) {
    $.ajax({
            
        url: "https://joke3.p.rapidapi.com/v1/joke?",
        method: "GET",
        headers: {"X-RapidAPI-Key":"7cd1301a26msh480d8432ebf3ac9p1c1f22jsn9b009ee86069"}
    }).then(function(rey) {
    if (debug) {console.log(rey.content);}

    element.text(JSON.stringify(rey.content));
    })
}

// Category #5 - Chuck Norris
function chucknorriswrapper(element,nsfw) {
    $.ajax({
        url: "https://geek-jokes.sameerkumar.website/api",
        method: "GET"
    }).then(function(leia) {
    if (debug) {console.log(leia);}

    element.text(JSON.stringify(leia));
    })
}

//***************
//*   Startup   *
//***************

$(document).ready(function()
{
  shuffleEventFunctions();
  assignRandomIntervals();
  timeSec = eventFunctions[0].timeUntilStart;
})

