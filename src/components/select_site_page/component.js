require('es6-promise').polyfill();
require('whatwg-fetch');

let setSites = require('../../clients/fetchApi').setSites;

module.exports = {
    onCreate:function () {
        this.state = {
            site: "initial site"
        };
    },

    handleSiteChange:function(event) {
        this.state.site = event.target.value;
    },

    getData:function () {
        var data = {"data":this.state.site};
        setSites(data)
        .then(function(json){
            console.log(JSON.stringify(json));
            if(json.success) {
                if(json.site.trim().endsWith("bolt")) {
                    sessionStorage.setItem("scanSite","bolt");
                    location.href = '/bolt_dashboard_page';
                }
                else if(json.site.trim().endsWith("kijiji")) {
                    sessionStorage.setItem("scanSite","kijiji");
                    location.href = '/kijiji-page';
                }
                else if(json.site.trim().endsWith("gumtree")) {
                    sessionStorage.setItem("scanSite","gumtree");
                    location.href = '/gumtree-page';
                }
                else
                    location.href = '/error';
            }
            else
                console.log("login failed!");
        })
        .catch((error) => {
            console.log("error message is: " + error.message);
        })
    }
};