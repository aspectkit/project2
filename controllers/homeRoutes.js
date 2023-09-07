const router = require('express').Router();
const withAuth = require('../utils/auth');
const {User} = require("../models");


router.get('/', async (req, res) => {
    try {
        res.render('signup', {
            loggedIn: req.session.loggedIn
        });
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']}, 
        });

        const user = userData.get({plain: true});
        console.log(user);
        res.render('gameLib', {
            ...user,
            loggedIn: true
        });
    } catch (err){
        console.log("issue here");
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/profile');
        return;
    }
    res.render('signup');
});



module.exports = router;
