require('whatwg-fetch');

let setSites = function (data) {
    return fetch('/input',{
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(data)
    }).then((response) => {
        return response.json();
    })
};

module.exports = {
    setSites
};