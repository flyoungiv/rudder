//from https://ourcodeworld.com/articles/read/154/how-to-execute-an-exe-file-system-application-using-electron-framework
var child = require('child_process').execFile;
var executablePath = "C:\\Program Files (x86)\\Battle.net\\Battle.net Launcher.exe";
var parameters;

child(executablePath, parameters, function(err, data) {
     console.log(err)
     console.log(data.toString());
});