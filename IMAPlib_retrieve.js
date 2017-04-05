var imapService = "imap.gmail.com";
var port = 993;
var username = "iamnethrezim@gmail.com";
var password = "youdarespeaktome"; //enter your email and password

const spawn = require('child_process').spawn;
const scriptExecution = spawn("python.exe", ["node_imap_retrieve_python.py"]);

// Handle normal output
scriptExecution.stdout.on('data', function (data){
    console.log(String.fromCharCode.apply(null, data));
});

// Write data (remember to send only strings or numbers, otherwhise python wont understand)
var data = JSON.stringify([imapService, port, username, password]);
scriptExecution.stdin.write(data);
// End data write
scriptExecution.stdin.end();/**
 * Created by Admin on 4/4/2017.
 */
