require('app-module-path').addPath(__dirname);
require('marko/express');
require('marko/node-require');
var bodyParser = require('body-parser');

function requireNoOp(module, filename) { /* no-op */ }

require.extensions['.less'] = requireNoOp;
require.extensions['.css'] = requireNoOp;

var express = require('express');
var compression = require('compression'); // Provides gzip compression for the HTTP response
var serveStatic = require('serve-static');

var app = express();

app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));
// If the process was started using browser-refresh then enable
// hot reloading for certain types of files to short-circuit
// a full process restart. You *should* use browser-refresh
// in development: https://www.npmjs.com/package/browser-refresh
require('marko/browser-refresh').enable();

var port = process.env.PORT || 8000;

// Enable gzip compression for all HTTP responses
app.use(compression());

// Allow all of the generated files under "static" to be served up by Express
app.use('/static', serveStatic(__dirname + '/static'));

require('src/services/routes')(app);

// Map the "/" route to the home page
app.get('/', require('src/pages/home'));
app.get('/bolt-dashboard-page',require('src/pages/bolt_dashboard'));
app.get('/scanReport',require('src/pages/scan_report'));

app.listen(port, function(err) {
    if (err) {
        throw err;
    }
    console.log('Listening on port %d', port);

    // The browser-refresh module uses this event to know that the
    // process is ready to serve traffic after the restart
    if (process.send) {
        process.send('online');
    }
});