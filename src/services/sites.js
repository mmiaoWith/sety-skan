let setSites = function (site) {
    var results = {
        "success": true,
        "site": site
    };

    return new Promise((resolve, reject) => {
        resolve(results);
    })
}
module.exports = {
    setSites
};