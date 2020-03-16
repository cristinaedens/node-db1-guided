const express = require('express');
//install knex and sqlite3

// database access using knex
const db = require('../data/db-config.js'); //connection to the database

const router = express.Router();

router.get('/', (req, res) => {
    //get data from the db
    //select * from posts;
    db.select('*').from('posts')
        .then(rows => {
            res.status(200).json({ data: rows });
        })
        .catch(error => {
            res.status(500).json({ message: "sorry, ran into an error" });
        })

});

router.get('/:id', (req, res) => {
    db('posts')
        .where({ id: req.params.id })
        .first()
        .then(post => {
            if (post) {
                res.status(200).json({ data: post });
            } else {
                res.status(404).json({ message: "Post not found" });
            }
        })
        .catch(error => {
            res.status(500).json({ message: "sorry, ran into an error" });
        })
});

router.post('/', (req, res) => {
    db('posts').insert(req.body, "id")
        .then(ids => {
            res.status(201).json({ results: ids })
        })
        .catch(error => {
            res.status(500).json({ message: "sorry, ran into an error" });
        })
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    db('posts').where({ id: req.params.id })
        .update(changes) //deletes the records
        .then(count => {
            if (count > 0) {
                res.status(200).json({ Message: "record updated successfully" })
            } else {
                res.status(404).json({ message: " sorry, ran into an error." })
            }
        })
});

router.delete('/:id', (req, res) => {
    db('posts').where({ id: req.params.id })
        .del() //deletes the records
        .then(count => {
            if (count > 0) {
                res.status(200).json({ Message: "record deleted successfully" })
            } else {
                res.status(404).json({ message: " sorry, ran into an error." })
            }
        })
});

module.exports = router;