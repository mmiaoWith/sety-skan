module.exports = {
    onCreate: function(){
        this.state ={
            launch_scan_site: ""
        };
    },

    onMount: function () {
        this.state.launch_scan_site = sessionStorage.getItem("launch_scan_site");
    }

};