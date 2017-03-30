/**
 * Created by Admin on 3/9/2017.
 */


var popService = "pop.gmail.com";
var port = 995;
var username = "grgrdavtyan@gmail.com"
var password = "your_password" //enter your email and password


const spawn = require('child_process').spawn;
const scriptExecution = spawn("python.exe", ["node_pop3_python.py"]);

// Handle normal output
scriptExecution.stdout.on('data', function (data){
    console.log(String.fromCharCode.apply(null, data));
});

// Write data (remember to send only strings or numbers, otherwhise python wont understand)
var data = JSON.stringify([popService, port, username, password]);
scriptExecution.stdin.write(data);
// End data write
scriptExecution.stdin.end();

