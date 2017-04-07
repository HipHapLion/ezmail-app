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
    const sendMail = spawn("python", ["node_smtp_python.py"]);

    sendMail.stdout.on('data', (data) => {
        console.log("output: %s", data);
    });

    sendMail.stderr.on('data', (data) => {
        console.log("error: %s", data);
    });

    sendMail.on('close', (code) => {
        // console.log("status: %s", code);
    });

    // Write data (remember to send only strings or numbers, otherwhise python wont understand)
    var data = JSON.stringify([sender, rcpt, subject, msg, emailService, port, username, password]);
    sendMail.stdin.write(data);
    // End data write
    sendMail.stdin.end();
});

router.post("/list", (req, res, next) => {
    let emails = new Array();
    let username = req.body.username;
    let password = req.body.password;
    
    if (username.split('@')[1].includes("gmail")) {
        let emailService = "imap.gmail.com";
        let port = 993;

        const spawn = require('child_process').spawn;
        const listMail = spawn("python", ["node_imap_retrieve_python.py"]);

        listMail.stdout.on('data', (data) => {
            // emails.push(data.toString('utf8'));
            emails.push(String.fromCharCode.apply(null, data));
            // console.log(data.toString('utf8'));        
        });

        listMail.stdout.on('end', () => {
            res.json(emails);
        });

        listMail.stderr.on('data', (data) => {
            console.log("error: %s", data);
        });

        listMail.on('close', (code) => {
            console.log("status: %s", code);
        });

        // Write data (remember to send only strings or numbers, otherwhise python wont understand)
        var data = JSON.stringify([emailService, port, username, password]);
        listMail.stdin.write(data);
        // End data write
        listMail.stdin.end();

    } else {
        res.json({msg: "dont know this account"});
    }
});

router.post("/read", (req, res, next) => {

    let username = req.body.username;
    let password = req.body.password;
    let emailID = req.body.id;
    let emailService = "imap.gmail.com";
    let port = 993;
    let message;
    const spawn = require('child_process').spawn;
    const readMail = spawn("python", ["node_imap_read.py"]);

    readMail.stdout.on('data', (data) => {
        message = data.toString('utf8');    
    });

    readMail.stdout.on('end', () => {
        res.json(message);
    });

    readMail.stderr.on('data', (data) => {
        console.log("error: %s", data);
    });

    readMail.on('close', (code) => {
        // console.log("status: %s", code);
    });

    // Write data (remember to send only strings or numbers, otherwhise python wont understand)
    var data = JSON.stringify([emailService, port, username, password, emailID]);
    readMail.stdin.write(data);
    // End data write
    readMail.stdin.end();

});

router.post("/delete", (req, res, next) => {

    let username = req.body.username;
    let password = req.body.password;
    let emailID = req.body.id;
    let emailService = "imap.gmail.com";
    let port = 993;
    const spawn = require('child_process').spawn;
    const deleteMail = spawn("python", ["node_imap_delete.py"]);

    deleteMail.stdout.on('data', (data) => {
        // message = data.toString('utf8');   
        console.log(data.toString('utf8')); 
    });

    deleteMail.stdout.on('end', () => {
        res.json({msg: "email deleted."});
    });

    deleteMail.stderr.on('data', (data) => {
        console.log("error: %s", data);
    });

    deleteMail.on('close', (code) => {
        // console.log("status: %s", code);
    });

    // Write data (remember to send only strings or numbers, otherwhise python wont understand)
    var data = JSON.stringify([emailService, port, username, password, emailID]);
    deleteMail.stdin.write(data);
    // End data write
    deleteMail.stdin.end();

});

module.exports = router;