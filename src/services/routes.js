var sitesService = require('./sites');

module.exports = function(app) {

    app.post('/input',function (req, res) {
        sitesService.setSites(req.body.data).then(function (data) {
            res.json(data);
        })
            .catch(function (err) {
                console.log(err);
                res.status(500).send('get Unable to load sites');
            });

    });

};