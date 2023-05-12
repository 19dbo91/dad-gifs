// #region METACODE
// Author: Dustin Bonilla
// Project Name:

/*      USER STORY
 *_______________________________________________________________________________
 * :: (perspective here)
 *
 *
 *
 *
 *_______________________________________________________________________________
 *      Example - Delete on fill
 *_______________________________________________________________________________
 * :: A coder
 * I WANT TO insert some predicate here the client will operate with/on
 * SO THAT I can align the project to
 *
 */

/*      ACCEPTANCE CRITERIA
 *_______________________________________________________________________________
 * .:
 *
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

/*      MOCK UP NOTES
 *_______________________________________________________________________________
 *
 *
 */

/*      OTHER NOTES
 *      GENERAL FLOW OF SITES
 *_______________________________________________________________________________
 *
 *
 */
// #endregion

//!start
var jokeButton = document.getElementById("jokeButton");
var punchLine = document.getElementById("punchLine");
//Debug Printer
function p(me) {
  console.log(me);
}
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
      punchLine.textContent = data.joke;
      console.log(data)
    });
}

jokeButton.addEventListener("click", fetchJoke);
//!end
