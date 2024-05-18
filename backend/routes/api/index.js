// imports
const router = require('express').Router();
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser, requireAuth } = require('../../utils/auth.js');

// prefixed with '/api'

// middleware
router.use(restoreUser);


// restore user
router.get('/restore-user', (req, res) => {
    return res.json(req.user);
});


// GET /api/set-token-cookie
router.get('/set-token-cookie', async (_req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        }
    });
    setTokenCookie(res, user);
    return res.json({ user: user });
});



module.exports = router;
