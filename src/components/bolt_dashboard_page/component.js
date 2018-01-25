require('es6-promise').polyfill();
require('whatwg-fetch');

let setReports = require('../../clients/fetchApi').setReports;
let getIssueData = require('../../clients/fetchApi').getBoltBurpData;

module.exports = {
    onCreate: function () {
        this.state ={
            bolt_report: "noReport",
            high : 0,
            medium : 0,
            low : 0,
            info : 0
        };
    },
    onMount: function () {
        var state = this.state;
        this.fetchPromise = Promise.resolve();
        this.fetchPromise = this.fetchPromise
            .then(function() {
                return getIssueData();
            })
            .then(function(getIssue) {
                console.log(JSON.stringify(getIssue));
                state.high = getIssue.high;
                state.medium = getIssue.medium;
                state.low = getIssue.low;
                state.info = getIssue.info;
            })
            .catch(function(e) {
                console.log('Fetch failed:', e);
            });
    },

    handleHrefChange: function (event) {
        this.state.bolt_report = event.target.value;
        console.log("###########" + event.target.value);
        var data = {"data": this.state.bolt_report};
        setReports(data)
        .then(function (json) {
            console.log(JSON.stringify(json));
            if(json.success){
                sessionStorage.setItem("boltReport", json.report);
                location.href = '/scan_report';
            }
        })
        .catch((error) => {
            console.log("error message is: " + error.message);
        })
    }
};