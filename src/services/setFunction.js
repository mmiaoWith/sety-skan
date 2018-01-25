let setSites = function (site) {
    var results = {
        "success": true,
        "site": site
    };

    return new Promise((resolve, reject) => {
        resolve(results);
    })
};

let setBoltReports = function (report) {
    var results = {
        "success": true,
        "report": report
    };

    return new Promise((resolve, reject) => {
        resolve(results);
    })
};

let setGumtreeReports = function (report) {
    var results = {
        "success": true,
        "report": report
    };

    return new Promise((resolve, reject) => {
        resolve(results);
    })
};

let setKijijiReports = function (report) {
    var results = {
        "success": true,
        "report": report
    };

    return new Promise((resolve, reject) => {
        resolve(results);
    })
};

let setNewScan = function (scanSite) {
    var results = {
        "success": true,
        "scanSite": scanSite
    };

    return new Promise((resolve, reject) => {
        resolve(results);
    })
};

module.exports = {
    setSites,
    setBoltReports,
    setGumtreeReports,
    setKijijiReports,
    setNewScan
};