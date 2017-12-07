const options = require('./options');
const http = require('http');
const sendMail = require('./sendMail');
setInterval(checkHttp, 1000);

function checkHttp() {
    req = http.get(options, res => {
        console.log('Server is alive');
    });
    req.on('error', e => {
        sendMail(options.hostname);
    });
}