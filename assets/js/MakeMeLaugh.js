// Make Me Laugh's javascript file
// DPLD - Dan Priya Lilliana Dick
// 20191218
//
//
//
//***************
//*   Globals   *
//***************

const debug = false;
var clickCount = 0;
var muted = false;
var randomChecked = true;
var oldRandomChecked = false;
var NSFW = true;

var eventFunctions =
[
    {
        name: "changeNavBar",
        activity: changeNavBar,
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
   "horse",       
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

  muted         = document.getElementById("chkMute" ).checked;
  randomChecked = document.getElementById("chkRandom").checked;

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
  "assets/images-backgrounds/shutterstock_1293011533.jpg",
  "assets/images-backgrounds/sparklesAndColors.gif",
  "assets/images-backgrounds/bottomlessPit.gif",
  "assets/images-backgrounds/oaS3VhR.gif",
  "assets/images-backgrounds/Vqzm.gif",
  "assets/images-backgrounds/Y3ir.gif",
  "assets/images-backgrounds/ZBOM.gif",
  "assets/images-backgrounds/jsx.gif"
]
function backgroundBlaster()
{
    var nextBkg = backgrounds[Math.floor(Math.random()*backgrounds.length)];

    if (debug) {console.log("Background change to \""+nextBkg+"\"");}

    $("body").css({"background-image":"url("+nextBkg+")"});
}


function changeNavBar() 
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

const NORMAL_BUTTON = 0;
const SCARED_BUTTON = 1;
const STICKY_BUTTON = 2;
var runButtonRun = NORMAL_BUTTON;
var oldRunButton = NORMAL_BUTTON;

function toggleButtonRun()
{
  switch (runButtonRun)
  {
    case NORMAL_BUTTON: runButtonRun = SCARED_BUTTON; break;
    case SCARED_BUTTON: runButtonRun = STICKY_BUTTON; break;
    case STICKY_BUTTON: runButtonRun = NORMAL_BUTTON; break;
  }

  if (debug) {console.log("runaway button is " + (runButtonRun == NORMAL_BUTTON? "normal":(runButtonRun == STICKY_BUTTON ? "sticky":"scared")));}
}

var cursorX =  200;
var cursorY = -200;

document.addEventListener('mousemove',function(event)
{
  // var x = event.clientX;
  var dx = event.movementX;
  cursorX += dx;
  // var y = event.clientY;
  var dy = event.movementY;
  cursorY += dy;

  switch (runButtonRun)
  {
    case NORMAL_BUTTON:
      $("#bigFunnyBtn").text("BIG FUNNY BUTTON  "+ clickCount);
      top = -200;
      cursorY = top;
      left = 200;
      cursorX = left;
      break;
    case STICKY_BUTTON:
      $("#bigFunnyBtn").text("BIG FOLLOW BUTTON  "+ clickCount);
      top = cursorY;
      left = cursorX;
      break;
    case SCARED_BUTTON:
      $("#bigFunnyBtn").text("BIG SCARED BUTTON  "+ clickCount);
      var jump = (oldRunButton != SCARED_BUTTON) ? 100 : 0;
      var top  = cursorX + jump;
      var left = cursorY + jump; 
      break;
  }
  top  =  top < -500 ? -500 : (top  > 500 ? 500 : top);
  left = left < -500 ? -500 : (left > 500 ? 500 : left);
  $("#bigFunnyBtn").css("top" ,top +"px");
  $("#bigFunnyBtn").css("left",left+"px");
  oldRunButton = runButtonRun;
});

$('.dropdown-trigger').dropdown();
$('.dropdown-trigger').attr("closeOnClick","false");

$(".happyFace").on("click",function()
{
  playAudio("haha");
})


$("#bigFunnyBtn").on("click",function()
{
  clickCount++;

  // get content based on checkbox state
  NSFW = document.getElementById("chkNSFW").checked;

  if (document.getElementById("chkTaunt"       ).checked) {shakespeare($("#shakespeare"),NSFW);}
  if (document.getElementById("chkNSFW"        ).checked) {newage     ($("#newage"     ),NSFW);}
  if (document.getElementById("chkGenericJokes").checked) {genericjoke($("#randomjoke" ),NSFW);}
  if (document.getElementById("chkChuckNorris" ).checked) {chucknorris($("#chuck"      ),NSFW);}
  // if (document.getElementById("chkFortune"     ).checked) {fortunecookie($(".fortune"   ),NSFW);}

  getGIF("chuck norris",$(".chuckImg"));

  if (randomChecked && !oldRandomChecked)
  {
    masterClock = setInterval(randoEngine,1000);
  }
  else if (!randomChecked && oldRandomChecked)
  {
    clearInterval();
    runButtonRun = NORMAL_BUTTON;
  }

  oldRandomChecked = randomChecked;

  if (!muted) {playAudio(clickCount == 1 ? "tarzanyell":"boing");}
})

function imageClick(event)
{
  $(this).parent.remove(this);
}

// API functions ***

function cleanStr(inString)
{
  do
  {
    searchRes = inString.indexOf("\\\"");
    if (searchRes >= 0)
    {
      inString = inString.replace("\\\"","\"");
    }
  }
  while (searchRes >= 0)
  do
  {
    searchRes = inString.indexOf("\\r");
    if (searchRes >= 0)
    {
      inString = inString.replace("\\r","");
    }
  }
  while (searchRes >= 0)
  do
  {
    searchRes = inString.indexOf("\\n");
    if (searchRes >= 0)
    {
      inString = inString.replace("\\n"," * ");
    }
  }
  while (searchRes >= 0)
  return(inString);
}

// Category #1 - Shakespeare Taunts
function shakespeare(element,nsfw) {

    $.ajax({
    url: "https://api.fungenerators.com/taunt/generate?category=shakespeare&limit=5",
    method: "GET"
    
    }).then(function(darthvader) {
    console.log(darthvader);

    var randtaunt = Math.floor(Math.random()*5);
    element.text(cleanStr(JSON.stringify(darthvader.contents.taunts[randtaunt])));
    })
}

// Category #2 - "New Age" Taunts
// NSFW!!!
function newage(element,nsfw) {

    $.ajax({
        url: "https://api.fungenerators.com/taunt/generate?category=new-age-insult&limit=5",
        method: "GET"

    }).then(function(BBeight) {
    if (debug) {console.log(BBeight);}

    var randnewage = Math.floor(Math.random()*5);
    element.text(cleanStr(JSON.stringify(BBeight.contents.taunts[randnewage])));
    })
}

// Category #3 - Generic
function genericjoke(element,nsfw) {
    $.ajax({
            
        url: "https://joke3.p.rapidapi.com/v1/joke?",
        method: "GET",
        headers: {"X-RapidAPI-Key":"7cd1301a26msh480d8432ebf3ac9p1c1f22jsn9b009ee86069"}
    }).then(function(rey) {
    if (debug) {console.log(rey.content);}

    element.text(cleanStr(JSON.stringify(rey.content)));
    })
}

// Category #4 - Chuck Norris
function chucknorris(element,nsfw) {
    $.ajax({
        url: "https://geek-jokes.sameerkumar.website/api",
        method: "GET"
    }).then(function(leia) {
    if (debug) {console.log(leia);}

    element.text(cleanStr(JSON.stringify(leia)));
    })
}

function getGIF(searchStr,element,nsfw) {

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchStr + "&api_key=dc6zaTOxFJmzC&limit=10";

  // Performing our AJAX GET request
  $.ajax({url: queryURL, method: "GET"}).then(function(response) 
  {
    var results = response.data;

    var rand = Math.floor(Math.random()*results.length);

    // Only taking action if the photo has an appropriate rating
    // Creating a div for the gif
    var gifDiv = $("<div>");

    // Creating an image tag
    var searchStrImage = $("<img>").attr("src", results[rand].images.fixed_height.url);

    searchStrImage.on("click",imageClick);

    // Appending the paragraph and personImage we created to the "gifDiv" div we created
    searchStrImage.appendTo(gifDiv);

    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
    gifDiv.prependTo(element);
  });
}

//***************
//*   Startup   *
//***************

$(document).ready(function()
{
  shuffleEventFunctions();
  assignRandomIntervals();
  backgroundBlaster();
  timeSec = eventFunctions[0].timeUntilStart;
  $("#bigFunnyBtn").text("BIG FUNNY BUTTON      "+ clickCount);
})

