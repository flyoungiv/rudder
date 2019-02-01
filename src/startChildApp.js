//from https://ourcodeworld.com/articles/read/154/how-to-execute-an-exe-file-system-application-using-electron-framework
//document.getElementById('button').addEventListener('click', () => console.log(execFile));

import { execFile } from 'child_process';
let parameters;

const startChildApp = path => {
    console.log(`OPENING: ${path}`);
    execFile(path, parameters, function (err, data) {
        console.log(err)
        console.log(data.toString());
    });
};

//export default startChildApp;
document.getElementById('button-1').addEventListener('click', () => execFile('C:\\WINDOWS\\system32\\mspaint.exe'));