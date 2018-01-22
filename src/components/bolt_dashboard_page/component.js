require('es6-promise').polyfill();
require('whatwg-fetch');

let setReports = require('../../clients/fetchApi').setReports;

module.exports = {
    onCreate: function () {
        this.state ={
            bolt_report: "noReport"
        };
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
                location.href = '/scanReport';
            }
        })
        .catch((error) => {
            console.log("error message is: " + error.message);
        })
    }
};