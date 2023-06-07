const router = require('express').Router();
const {Game} = require('../../models');

// game routes need to be made here and the fetching can be done in public/js/addgame.js where when user presses submit on the search box we make the url with what the user typed in and see if there are results
// if there is a result, add game to database and show on screen with info
// maybe allow some way for the game to be deleted but maybe no time for that now
// https://api.rawg.io/api/games/super-mario-galaxy?key=
// this link gets the info for super mario galaxy as an example. api key is needed



router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const gameData = await Game.create(req.body);
        console.log(gameData);
        req.session.save(() => {
            req.session.game_id = gameData.id; 
            res.status(200).json(gameData);

        });
        res.json(gameData);
    } catch (err){
        console.log(err);
        res.status(400).json(err);
    }
})


module.exports = router;