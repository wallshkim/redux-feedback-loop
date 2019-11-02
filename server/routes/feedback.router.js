const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('POST /feedback');

    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)`;
    const values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]

    pool.query(queryText, values)
        .then((results) => {
            console.log('results from INSERT /feedback: ', results);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error with INSERT /feedback: ', error);
            res.sendStatus(500);
        });
});

module.exports = router;