let username = "philipz201"
    let password = "arcadia156"
    let sender = "<" + "philipz201@gmail.com>";
    let rcpt = "<" + "grgrdavtyan@gmail.com>";
    let subject = "String";
    let msg = "String2";
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