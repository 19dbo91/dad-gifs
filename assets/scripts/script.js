// #region METACODE
// Contributors: Steven, Jonathan, Dustin
// Project Name:

/*      USER STORY
 *_______________________________________________________________________________
 * :: Dad Joke and Gif Enthusiast
 * I WANT to view dad jokes paired with an appropriate gif to go with it
 * SO THAT share them with everyone!
 */

/*      ACCEPTANCE CRITERIA
 *_______________________________________________________________________________
 * .: A web app combine
 *
 * @ URL load
 *  > Open to homepage with a randomized combo
 * 
 *
 * _______________________________________________________________________________
 *      Template - Delete on fill
 * _______________________________________________________________________________
 * .: (Given here)
 *
 * @ means when
 *  > means then
 *
 * //// marks off completed
 *
 * @ adding to my acceptance criteria // TODO:(1)
 *  >
 *
 */


/*      OTHER NOTES
 *_______________________________________________________________________________
 *  //TODO (2) Handling joke syntax:
 *  
 *  1) No punctuations/one-liners - doesn't move anything to punchline
 *    S: I was thinking about moving to Moscow but there is no point Russian into things.
 *    P:
 * 
 *  2) Abbreviation
 *    ex) What’s E. (BREAK) T.
 * 
 *  3) Quoted structures
 *    S: "Why do seagulls fly over the ocean?
 *    p:" "Because if they flew over the bay, we'd call them bagels."
 *  
 *  4) Comma and Hyphen issues; varying uses collide parsing
 *    s: Every morning when I go out,
 *    p: I get hit by bicycle. Every morning! It's a vicious cycle.
 *
 */
// #endregion

//!start
//API KEY
let APIKEY = "vy9H3BI8p6HQJDfZnd3oGNh5PLiXajDe";

//Variable Declaration
const jokeButton = document.getElementById("jokeButton");
const setUp = document.getElementById("setup");
const punchLine = document.getElementById("punchLine");
const regex = /[!\-\.?\,]/; //Needs more edge-case testing (Priority: Last; works 95%)
const gifImage = document.getElementById("gif")

//#region Joke Parsing
let parsedJoke = {
    setup :"",
    punchline :""
}// refer to this object for setup and punchline

function updateJoke(jokeString){
  let matchedSymbol = jokeString.match(regex);
  let indexedAt = jokeString.indexOf(matchedSymbol)
  let start =jokeString.slice(0, indexedAt+1).trim();
  let end =jokeString.slice(indexedAt+1).trim();

  parsedJoke.setup = start;
  parsedJoke.punchline = end;
  console.log(`S: ${parsedJoke.setup}`)
  console.log(`P: ${parsedJoke.punchline}`)
}
//#endregion

function fetchJoke() {
  fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      updateJoke(data.joke);
      setUp.textContent = parsedJoke.setup;
      punchLine.textContent = parsedJoke.punchline;
      console.log(parsedJoke.punchline)
      init(parsedJoke.punchline);
    });
}

jokeButton.addEventListener("click", fetchJoke);

//Giphy API 
function init(string) {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=5&q=`;
    let str = string;
    url = url.concat(str);
    url = encodeURI(url)
    fetch(url)
      .then(response => response.json())
      .then(content => {
        //  data, pagination, meta
        console.log(content.data);
        console.log("META", content.meta);            
        console.log(content.data[0].images.downsized.url)
        gifImage.src = content.data[0].images.downsized.url;        
      })
      .catch(err => {
        console.error(err);
      });
  };

//!end
