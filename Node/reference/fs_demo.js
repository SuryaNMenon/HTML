const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
//     if(err) throw err;
//     console.log('Folder created successfully');
// });

/// Create a file and write to it
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World from Node!', function(err){
    if(err) throw err;
    console.log('File written to successfully');
});

// Append to a it - can be written inside callback function of writeFile (^^) (asynchronous)
 fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\nIm coding in NodeJS', err => {
     if(err) throw error;
     console.log("Text successfully appended")
 });