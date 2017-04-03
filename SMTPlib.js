/**
 * Created by Admin on 3/9/2017.
 */

var sender = "<" + "Noha Philip>";
var rcpt = "<" + "np130@hw.ac.uk>";
var subject = "testing node js";
var msg = "ez laif!";
var emailService = "smtp.gmail.com";
var port = 587
var username = "philipz201"
var password = "7895123z*"; //enter your password and email


const spawn = require('child_process').spawn;
const scriptExecution = spawn("python", ["node_smtp_python.py"]);

// Handle normal output
// scriptExecution.stdout.on('data', function (data){
//     console.log(String.fromCharCode.apply(null, data));
// });

scriptExecution.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

scriptExecution.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

scriptExecution.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

// Write data (remember to send only strings or numbers, otherwhise python wont understand)
var data = JSON.stringify([sender,rcpt,subject,msg,emailService, port, username, password]);
scriptExecution.stdin.write(data);
// End data write
scriptExecution.stdin.end();

