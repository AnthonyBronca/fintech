// imports
const router = require('express').Router();

// prefixed with '/api'

//localhost:8000/api/test

router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});




module.exports = router;
