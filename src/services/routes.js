var setService = require('./setFunction');

module.exports = function (router) {

    router.post('/input', (req, res) => {
        setService.setSites(req.body.data).then(function (data) {
            res.json(data);
        })
            .catch(function (err) {
                console.log(err);
                res.status(500).send('get Unable to load sites');
            });

    });

    router.post('/bolt_dashboard', (req, res) => {
        setService.setBoltReports(req.body.data).then(function (data) {
            res.json(data);
        })
            .catch(function (err) {
                console.log(err);
                res.status(500).send('get Unable to load reports');
            });

    });

    router.post('/start_new_scan', (req, res) => {
        setService.setNewScan(req.body.data).then((data) => {
            res.json(data);
        })
            .catch((err) => {
                console.log(err);
                res.status(500).send('get Unable to load reports');
            });
    });

};