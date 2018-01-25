var setService = require('./setFunction');
var getBurpData = require('./getIssueData');

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

    router.post('/gumtree_dashboard', (req, res) => {
        setService.setGumtreeReports(req.body.data).then(function (data) {
            res.json(data);
        })
            .catch(function (err) {
                console.log(err);
                res.status(500).send('get Unable to load reports');
            });

    });

    router.post('/kijiji_dashboard', (req, res) => {
        setService.setKijijiReports(req.body.data).then(function (data) {
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

    router.get('/bolt_burp_data', (req, res) => {
       getBurpData.getBoltBurpIssue().then( (data) => {
           res.json(data);
       })
           .catch((err) => {
               console.log(err);
               res.status(500).send('get Unable to load reports');
           });
    });

    router.get('/gumtree_burp_data', (req, res) => {
        getBurpData.getGumtreeBurpIssue().then( (data) => {
            res.json(data);
        })
            .catch((err) => {
                console.log(err);
                res.status(500).send('get Unable to load reports');
            });
    });

    router.get('/kijiji_burp_data', (req, res) => {
        getBurpData.getKijijiBurpIssue().then( (data) => {
            res.json(data);
        })
            .catch((err) => {
                console.log(err);
                res.status(500).send('get Unable to load reports');
            });
    });
};