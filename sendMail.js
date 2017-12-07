const nodeMailer = require('nodemailer');
const transport = require('nodemailer-smtp-transport');
const auth = require('./account');

const smtpTransport = nodeMailer.createTransport(transport({
    service: 'Gmail',
    auth
}));

const mailOptions = {
    from: '김성훈 <tjdgnsqntest1@gmail.com>',
    to: 'tjdgnsqn133@gmail.com',
    subject: '서버가 꺼졌습니다.'
};

module.exports = (hostname) => {
    mailOptions.text = `${hostname}을 확인해주세요.`;
    smtpTransport.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log(response);
            console.log("Message sent : " + response.message);
        }
    });
};