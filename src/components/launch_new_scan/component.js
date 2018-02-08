require('es6-promise').polyfill();
require('whatwg-fetch');

let setNewScan = require('../../clients/fetchApi').setNewScan;
var mainSites = ["www.alamaula.com","www.gumtree.sg","www.gumtree.pl","www.gumtree.ie","www.vivanuncios.com.mx","www.gumtree.co.za"];

module.exports = {
    onCreate: function () {
        this.state ={
            scanPath:"",
            reportPath:"",
            stag:"false",
            rtag:"false"
        }
    },

    handleChangeScanPath: function (event) {
        let url = event.target.value;
        if(url.length <= 0){
            window.alert("scan path can't be null!")
        }
        if(url.startsWith("http"))
            url = url.substring(8,url.length);
        for(let i = 0; i < mainSites.length; i ++){
            if(url.trim().startsWith(mainSites[i])){
                this.state.stag = "true";
                this.state.scanPath = url;
                break;
            }
        }
        if(this.state.stag.endsWith("false"))
            window.alert("scan path error!")
    },

    handleChangeReportPath: function (event) {
        let reportName = event.target.value;
        let pat = /^[a-zA-Z0-9_]{1,}$/;
        if(reportName.length <= 0){
            window.alert("report path can't be null!")
        }
        else if(reportName.match(pat)){
            this.state.rtag = "true";
            this.state.reportPath = reportName;
        }
        else
            window.alert("report path is not correct!")
    },

    handleLaunchNewScan:function () {
        if(this.state.stag.endsWith("false")||this.state.rtag.endsWith("false")){
            window.alert("please enter the right params!")
        }else {
            var data = {"data": {"scanPath": this.state.scanPath, "reportPath": this.state.reportPath}};
            setNewScan(data)
                .then(function (json) {
                    console.log(JSON.stringify(json));
                    if (json.success) {
                        console.log("scanSite: " + json.scanSite.trim().toString());
                        console.log("reportPath: " + json.reportPath.trim().toString());
                        sessionStorage.setItem("launch_scan_site", json.scanSite.trim().toString());
                        location.href = '/launch_scan';
                    }
                })
                .catch((error) => {
                    console.log("error message is: " + error.message);
                })
        }
    }

};