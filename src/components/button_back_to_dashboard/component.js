module.exports = {
    onClickBack:function() {
        if(sessionStorage.getItem("scanSite") === "bolt"){
            location.href = '/bolt_dashboard_page';
        }else if(sessionStorage.getItem("scanSite") === "kijiji"){
            location.href = '/kijiji-page';
        }else if(sessionStorage.getItem("scanSite") === "gumtree"){
            location.href = '/gumtree-page';
        }
    }
};