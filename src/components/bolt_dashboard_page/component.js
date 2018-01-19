require('es6-promise').polyfill();
require('whatwg-fetch');

// let setReports = require('../../clients/fetchApi').setReports();

module.exports = {
    onCreate: function () {
        this.state ={
            bolt_report: "noReport"
        };
    },
    handleHrefChange: function (event) {
        this.state.bolt_report = event.target.value;
        var data = {"report": this.state.bolt_report};
        setReports(data)
            .then(function (json) {
                if(json.success){
                    if(json.report.trim().endsWith("bolt1"))
                        sessionStorage.setItem("boltReport",event.target.value);
                }
            })
            .catch((error) => {
                console.log("error message is: " + error.message);
            })
    }
};