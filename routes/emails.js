const express = require("express");
const router = express.Router();

router.get("/test", (req, res, next) => {
    res.json({ msg: "test success" });
});

router.post("/send", (req, res, next) => {

    var username = req.body.sender.split('@')[0];
    var password = "7895123z*";
    var sender = "<" + req.body.sender + ">";
    var rcpt = "<" + req.body.recipient + ">";
    var subject = req.body.sub;
    var msg = req.body.message;
    var emailService = "smtp.gmail.com";
    var port = 587;

    const spawn = require('child_process').spawn;
    const scriptExecution = spawn("python", ["node_smtp_python.py"]);

    // Handle normal output
    // scriptExecution.stdout.on('data', function (data){
    //     console.log(String.fromCharCode.apply(null, data));
    // });
    var response = new Array();

    scriptExecution.stdout.on('data', (data) => {
        console.log("output: %s", data);
    });

    scriptExecution.stderr.on('data', (data) => {
        console.log("error: %s", data);
    });

    scriptExecution.on('close', (code) => {
        console.log("status: %s", code);
    });

    // Write data (remember to send only strings or numbers, otherwhise python wont understand)
    var data = JSON.stringify([sender, rcpt, subject, msg, emailService, port, username, password]);
    scriptExecution.stdin.write(data);
    // End data write
    scriptExecution.stdin.end();
});

module.exports = router;