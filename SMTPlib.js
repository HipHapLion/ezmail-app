/**
 * Created by Admin on 3/9/2017.
 */

var sender = "<" + "grgrdavtyan@gmail.com>";
var rcpt = "<" + "rsureen@yahoo.com>";
var subject = "testing node js";
var msg = "ez laif!";
var emailService = "smtp.gmail.com";
var port = 587
var username = "grgrdavtyan"
var password = "your_password"; //enter your password and email


const spawn = require('child_process').spawn;
const scriptExecution = spawn("python.exe", ["node_smtp_python.py"]);

// Handle normal output
scriptExecution.stdout.on('data', function (data){
    console.log(String.fromCharCode.apply(null, data));
});

// Write data (remember to send only strings or numbers, otherwhise python wont understand)
var data = JSON.stringify([sender,rcpt,subject,msg,emailService, port, username, password]);
scriptExecution.stdin.write(data);
// End data write
scriptExecution.stdin.end();

