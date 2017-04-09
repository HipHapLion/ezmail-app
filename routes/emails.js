const express = require("express");
const router = express.Router();

router.post("/send", (req, res, next) => {
    let output = "";
    let username = req.body.sender.split('@')[0];
    let password = req.body.password;
    let sender = "<" + req.body.sender + ">";
    let rcpt = "<" + req.body.recpt + ">";
    let subject = req.body.sub.trim();
    let msg = req.body.message.trim();
    let emailService = sender.includes("gmail") ? "smtp.gmail.com" : undefined;
    let port = 587;
    if (emailService != undefined) {
        const spawn = require('child_process').spawn;
        const sendMail = spawn("python", ["node_smtp_python.py"]);
        sendMail.stdout.on('data', (data) => {
            // console.log("output: %s", data);
            this.output = data;
        });

        sendMail.stderr.on('data', (data) => {
            // console.log("error: %s", data);
        });

        sendMail.on('close', (code) => {
            // console.log("status: %s", code);
            if (Number.parseInt(code) == 0 && this.output.includes("354")) {
                res.json({ success: true, msg: "Email sent successfully." });
            } else {
                res.json({ success: false, error: "Oops something went wrong. Please try again later." });
            }
        });

        // Write data (remember to send only strings or numbers, otherwhise python wont understand)
        var data = JSON.stringify([sender, rcpt, subject, msg, emailService, port, username, password]);
        sendMail.stdin.write(data);
        // End data write
        sendMail.stdin.end();
    } else {
        res.json({ success: false, error: "Email service is not supported." });
    }
});

router.post("/list", (req, res, next) => {
    let emails = new Array();
    let username = req.body.username;
    let password = req.body.password;

    let emailService = username.includes("gmail") ? "smtp.gmail.com" : username.includes("hw.ac.uk") ? "outlook.office365.com" : undefined;
    let port = 993;

    if (emailService != undefined) {
        const spawn = require('child_process').spawn;
        const listMail = spawn("python", ["node_imap_retrieve_python.py"]);

        listMail.stdout.on('data', (data) => {
            emails.push(String.fromCharCode.apply(null, data));
            // console.log(data.toString('utf8'));
        });

        listMail.stdout.on('end', () => {
        });

        listMail.stderr.on('data', (data) => {
            // console.log("error: %s", data);
        });

        listMail.on('close', (code) => {
            // console.log("status: %s", code);
            if (Number.parseInt(code) == 0) {
                res.json({ success: true, msg: "Emails retrieved successfully.", emailList: emails });
            } else {
                res.json({ success: false, error: "Oops something went wrong." });
            }
        });

        // Write data (remember to send only strings or numbers, otherwhise python wont understand)
        var data = JSON.stringify([emailService, port, username, password]);
        listMail.stdin.write(data);
        // End data write
        listMail.stdin.end();

    } else {
        res.json({ success: false, error: "Email service is not supported." });
    }
});

router.post("/read", (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    let emailID = req.body.id;
    let emailService = username.includes("gmail") ? "smtp.gmail.com" : username.includes("hw.ac.uk") ? "outlook.office365.com" : undefined;
    let port = 993;
    let message;
    if (emailService != undefined) {
        const spawn = require('child_process').spawn;
        const readMail = spawn("python", ["node_imap_read.py"]);

        readMail.stdout.on('data', (data) => {
            message = data.toString('utf8');
        });

        readMail.stdout.on('end', () => {
            // res.json(message);
        });

        readMail.stderr.on('data', (data) => {
            // console.log("error: %s", data);
        });

        readMail.on('close', (code) => {
            // console.log("status: %s", code);
            if (Number.parseInt(code) == 0) {
                res.json({ success: true, msg: "Email content retrieved successfully.", content: message });
            } else {
                res.json({ success: false, error: "Oops something went wrong." });
            }
        });

        // Write data (remember to send only strings or numbers, otherwhise python wont understand)
        var data = JSON.stringify([emailService, port, username, password, emailID]);
        readMail.stdin.write(data);
        // End data write
        readMail.stdin.end();
    } else {
        res.json({ success: false, error: "Email service is not supported" });
    }
});

router.post("/delete", (req, res, next) => {

    let username = req.body.username;
    let password = req.body.password;
    let emailID = req.body.id;
    let emailService = username.includes("gmail") ? "smtp.gmail.com" : username.includes("hw.ac.uk") ? "outlook.office365.com" : undefined;
    let port = 993;

    if (emailService != undefined) {
        const spawn = require('child_process').spawn;
        const deleteMail = spawn("python", ["node_imap_delete.py"]);

        deleteMail.stdout.on('data', (data) => {
            // console.log(data.toString('utf8'));
        });

        deleteMail.stdout.on('end', () => {
        });

        deleteMail.stderr.on('data', (data) => {
            // console.log("error: %s", data);
        });

        deleteMail.on('close', (code) => {
            // console.log("status: %s", code);
            if (Number.parseInt(code) == 0) {
                res.json({ success: true, msg: "Email deleted successfully." });
            } else {
                res.json({ success: false, error: "Oops something went wrong." });
            }
        });

        // Write data (remember to send only strings or numbers, otherwhise python wont understand)
        var data = JSON.stringify([emailService, port, username, password, emailID]);
        deleteMail.stdin.write(data);
        // End data write
        deleteMail.stdin.end();
    } else {
        res.json({ success: false, error: "Email service is not supported." });
    }
});

module.exports = router;