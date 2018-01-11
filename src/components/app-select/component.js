// require('es6-promise').polyfill();
// require('whatwg-fetch');

// let setSites = require('../../clients/fetchApi').setSites;


module.exports = {
    onCreate:function () {
        this.state = {
            site: "initial site"
        };
    }
    //
    // handleSiteChange:function(event) {
    //     console.log("come here: event.target.value----------" + event.target.value);
    //     this.state.site = event.target.value;
    // },
    //
    // getData:function () {
    //     var data = {"data":this.state.site};
    //     setSites(data)
    //     .then(function(json){
    //         if(json.success) {
    //             if(json.site.trim().endsWith("bolt"))
    //                 location.href = '/bolt-dashboard-page';
    //             else if(json.site.trim().endsWith("kijiji"))
    //                 location.href = '/kijiji-page';
    //             else if(json.site.trim().endsWith("gumtree"))
    //                 location.href = '/gumtree-page';
    //             else
    //                 location.href = '/error';
    //         }
    //         else
    //             console.log("login failed!");
    //     })
    //     .catch((error) => {
    //         console.log("error message is: " + error.message);
    //     })
    // }
};