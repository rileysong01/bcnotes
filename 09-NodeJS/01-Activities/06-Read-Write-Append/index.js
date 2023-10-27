// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// Return the contents of 'data.csv' as a string in the variable "data"
          //file name  //format
fs.readFile('data.csv', 'utf8', (error, data) => // 2 call backs
  //ternary operator: if there is an error, display the error, otherwise show me the data
  error ? console.error(error) : console.log(data) 
);


// Write to the log.txt file with anything you pass in as process.argv[2]
  //Create log.txt if no log.txt currently exists
  //Will overwrite any existing contens in log.txt
fs.writeFile('log.txt', process.argv[2], (err) =>
  err ? console.error(err) : console.log('Success!')
);

//Append to log1.txt file with anything you pass in as process.argv[3]
  //Create log1.txt if no log1.txt 
  //Will append to the end of the file without overwriting its existing contents
fs.appendFile('log1.txt', `${process.argv[3]}\n`, (err) =>
  err ? console.error(err) : console.log('Commit logged!')
);
