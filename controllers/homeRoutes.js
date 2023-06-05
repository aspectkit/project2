const router = require('express').Router();
const withAuth = require('../utils/auth');
const {User} = require("../models");


router.get('/', async (req, res) => {
    try {
        res.render('gameLib', {
            loggedIn: req.session.loggedIn
        });
    } catch (err){
        res.status(500).json(err);
    }
});




module.exports = router;
