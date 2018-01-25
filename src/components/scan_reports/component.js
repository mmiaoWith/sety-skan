module.exports = {
    onCreate: function(){
        this.state ={
            report: ""
        };
    },

    onMount: function () {
        this.state.report = sessionStorage.getItem("reportType");
    }

};