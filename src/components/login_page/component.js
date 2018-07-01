'use strict'

require('es6-promise').polyfill();

let setUserInfo = require('../../clients/fetchApi').setUserInfo();

module.exports = {
    onCreate:function () {
        this.state = {
            email: "please enter your email",
            pwd:"please enter your password"
        };
    },

    handleChangeEmail:function(event) {
        this.state.email = event.target.value;
    },

    handleChangePwd:function(event) {
        this.state.pwd = event.target.value;
    },

    getData:function () {
        var data = {"data":{"email":this.state.email,"pwd":this.state.pwd}};
        setUserInfo(data)
        .then(function(json){
            console.log(JSON.stringify(json));
            if(json.success) {
                if(json.email.trim().endsWith("admin") && json.pwd.trim().endsWith("admin")) {
                    location.href = '/select_site_page';
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