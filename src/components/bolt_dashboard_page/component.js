require('es6-promise').polyfill();
require('whatwg-fetch');

let setReports = require('../../clients/fetchApi').setReports;

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
        // let burpIssue = getIssueData.getBurpIssue();
        // this.state.high = burpIssue.high;
        // this.state.medium = burpIssue.medium;
        // this.state.low = burpIssue.low;
        // this.state.info = burpIssue.info;
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