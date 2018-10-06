//from https://ourcodeworld.com/articles/read/154/how-to-execute-an-exe-file-system-application-using-electron-framework
const child = require('child_process').execFile;
let parameters;

function startChildApp(path) {
    console.log(`OPENING: ${path}`);
     child(path, parameters, function (err, data) {
        console.log(err)
        console.log(data.toString());
    });
}

//TEST COMMAND
//startChildApp('C:\\Program Files (x86)\\Battle.net\\Battle.net Launcher.exe', parameters);