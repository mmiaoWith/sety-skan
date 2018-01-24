require('es6-promise').polyfill();
require('whatwg-fetch');

let setNewScan = require('../../clients/fetchApi').setNewScan;


module.exports = {
    onCreate: function () {
        this.state ={
            site:"",
            baseDomain:"",
            domainPath:"",
            diffDomain:""
        }
    },

    onMount:function () {
        this.state.site = sessionStorage.getItem("scanSite");
        console.log("-----" + this.state.site);
        console.log(this.state.site === "bolt");
        if(this.state.site === "bolt"){
            this.state.baseDomain = "boltBaseDomain";
        }else if (this.state.site === "kijiji"){
            this.state.baseDomain = "kijijiBaseDomain";
        }else if(this.state.site === "gumtree"){
            this.state.baseDomain = "gumtreeBaseDomain";
        }
    },

    handleChangeDomainPath: function (event) {
        this.state.domainPath = event.target.value;
    },

    handleChangeDiffDomain: function (event) {
        this.state.diffDomain = event.target.value;
    },

    handleLaunchNewScan:function () {
        var scanSite = this.state.diffDomain === ""? this.state.baseDomain + this.state.domainPath: this.state.diffDomain;
        var data = {"data": scanSite};
        setNewScan(data)
            .then(function (json) {
                console.log(JSON.stringify(json));
                if(json.success){
                    console.log("scanSite: " + json.scanSite.trim().toString());
                    sessionStorage.setItem("launch_scan_site", json.scanSite.trim().toString());
                    location.href = '/launch_scan';
                }
            })
            .catch((error) => {
                console.log("error message is: " + error.message);
            })
    }

};