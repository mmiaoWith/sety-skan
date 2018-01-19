var setService = require('./setFunction');
var express = require('express');
var app = express.Router();

app.post('/input',function (req, res) {
    setService.setSites(req.body.data).then(function (data) {
        res.json(data);
    })
        .catch(function (err) {
            console.log(err);
            res.status(500).send('get Unable to load sites');
        });

});

app.post('/bdashboard',function (req, res) {
    setService.setBoltReports(req.body.data).then(function (data) {
        res.json(data);
    })
        .catch(function (err) {
            console.log(err);
            res.status(500).send('get Unable to load reports');
        });

});
