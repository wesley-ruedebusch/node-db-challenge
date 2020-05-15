const express = require('express');

const Resources = require('./resource-model.js');

const router = express.Router();




router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get the resources.' });
        });
});

router.post("/", (req, res) => {
    const resource = req.body;
    Resources.addResources(resource)
        .then(newRes => {
            res.status(201).json({ created: newRes });
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to create new resource" });
        });
});


module.exports = router;