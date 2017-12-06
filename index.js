const options = require('./options');
const http = require('http');

setInterval(checkHttp, 10000);

function checkHttp() {
    req = http.get(options, res => {
        console.log('Server is alive');
    });
    req.on('error', e => {
        console.log(e);
    });
}