const express = require("express");
const router = express.Router();

router.post("/send", (req, res, next) => {

    let username = req.body.sender.split('@')[0];
    let password = "7895123z*";
    let sender = "<" + req.body.sender + ">";
    let rcpt = "<" + req.body.recipient + ">";
    let subject = req.body.sub;
    let msg = req.body.message;
    let emailService = "smtp.gmail.com";
    let port = 587;

    const spawn = require('child_process').spawn;
    const scriptExecution = spawn("python", ["node_smtp_python.py"]);

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

router.post("/list", (req, res, next) => {
    let emails = new Array();
    let username = "philipz2012gmail.com";
    let password = "7895123z*";
    let emailService = "imap.gmail.com";
    let port = 993;

    const spawn = require('child_process').spawn;
    const scriptExecution2 = spawn("python", ["node_imap_retrieve.py"]);

    scriptExecution2.stdout.on('data', (data) => {
        emails.push(data.toString('utf8'));
    });

    scriptExecution2.stdout.on('end', function(){
        console.log(emails);
        res.json(emails);
    });

    scriptExecution2.stderr.on('data', (data) => {
        console.log("error: %s", data);
    });

    scriptExecution2.on('close', (code) => {
        console.log("status: %s", code); 
    });

    // Write data (remember to send only strings or numbers, otherwhise python wont understand)
    var data = JSON.stringify([emailService, port, username, password]);
    scriptExecution2.stdin.write(data);
    // End data write
    scriptExecution2.stdin.end();

    // res.json({data:"HOLA"});
});

router.post("/read", (req, res, next) => {

    let username = "philipz201@gmail.com";
    let password = "7895123z*";
    let emailService = "imap.gmail.com";
    let port = 993;
    let emailID = 1577;

    const spawn = require('child_process').spawn;
    const scriptExecution2 = spawn("python", ["node_imap_retrieve.py"]);

    scriptExecution2.stdout.on('data', (data) => {
        var emails = data.toString('utf8');
        // console.log(emails);
        res.json(emails);
    });

    scriptExecution2.stderr.on('data', (data) => {
        console.log("error: %s", data);
    });

    scriptExecution2.on('close', (code) => {
        console.log("status: %s", code);
    });

    // Write data (remember to send only strings or numbers, otherwhise python wont understand)
    var data = JSON.stringify([emailService, port, username, password, emailID]);
    scriptExecution2.stdin.write(data);
    // End data write
    scriptExecution2.stdin.end();

    res.json({data:"HOLA"});
});



module.exports = router;