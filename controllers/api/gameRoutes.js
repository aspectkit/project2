const router = require('express').Router();
const withAuth = require('../../utils/auth');

// game routes need to be made here and the fetching can be done in public/js/addgame.js where when user presses submit on the search box we make the url with what the user typed in and see if there are results
// if there is a result, add game to database and show on screen with info
// maybe allow some way for the game to be deleted but maybe no time for that now
// https://api.rawg.io/api/games/super-mario-galaxy?key=
// this link gets the info for super mario galaxy as an example. api key is needed

module.exports = router;


