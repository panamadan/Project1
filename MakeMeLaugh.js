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
  "assets/images-backgrounds/firework.gif",
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

    $(".changeP").css({"color": rgb});
}


function playAudio(elementName)
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
    $(".bigButton").css("background-color","blue");
  }
  else
  {
    runButtonRun = false;
    $(".bigButton").css("background-color","red");
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
    $(".bigButton").css("top" ,top +"px");
    $(".bigButton").css("left",left+"px");
  }
  else
  {
    $(".bigButton").css("top" ,event.clientY-100+"px");
    $(".bigButton").css("left",event.clientX-100+"px");
  }
  oldRunButton = runButtonRun;
}


var clickCount = 0;
var randomChecked = true;
var oldRandomChecked = false;
var muted = false;

$(".bigButton").on("click",function()
{
  $(".bigButton").text(++clickCount);
  
  // get content based on checkbox state
  // if (shakespeareChecked) {shakespeare();}
  // if (chuckNorrisChecked) {chuckNorris();}
  // if (fortuneChecked)     {fortune();    }
  // @@@@@ Other Functions!
  // muted = muteChecked ? true : false;
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

//***************
//*   Startup   *
//***************
$(document).ready(function(){

shuffleEventFunctions();
assignRandomIntervals();
timeSec = eventFunctions[0].timeUntilStart;

})