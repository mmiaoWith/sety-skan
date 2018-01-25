require('whatwg-fetch');

let setSites = function (data) {
    return fetch('/input',{
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(data)
    }).then((response) => {
        return response.json();
    })
};

let setReports = function (data) {
    return fetch('/bolt_dashboard',{
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(data)
    }).then((response) => {
        return response.json();
    })
};

let setNewScan = function (data) {
    return fetch('/start_new_scan',{
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(data)
    }).then((response) => {
        return response.json();
    })
};

let getBoltBurpData = function () {
    return fetch('/bolt_burp_data')
        .then((response) => {
        return response.json();
    })
};

module.exports = {
    setSites,
    setReports,
    setNewScan,
    getBoltBurpData
};