'use strict'

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

let setBoltReports = function (data) {
    return fetch('/bolt_dashboard',{
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(data)
    }).then((response) => {
        return response.json();
    })
};

let setGumtreeReports = function (data) {
    return fetch('/gumtree_dashboard',{
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(data)
    }).then((response) => {
        return response.json();
    })
};

let setKijijiReports = function (data) {
    return fetch('/kijiji_dashboard',{
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

let getGumtreeBurpData = function () {
    return fetch('/gumtree_burp_data')
        .then((response) => {
            return response.json();
        })
};

let getKijijiBurpData = function () {
    return fetch('/kijiji_burp_data')
        .then((response) => {
            return response.json();
        })
};

module.exports = {
    setSites,
    setBoltReports,
    setGumtreeReports,
    setKijijiReports,
    setNewScan,
    getBoltBurpData,
    getGumtreeBurpData,
    getKijijiBurpData
};