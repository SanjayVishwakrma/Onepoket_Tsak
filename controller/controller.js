const fs = require('fs');
const filename = 'data.txt';

let stringCount = (req, res) => { 
    console.log("ddddddddddddddd");
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
          console.error(`Error reading file: ${err.message}`);
          return;
        }   
        const words = data.split(/\s+/).filter((word) => word !== '');
        const wordCount = words.length;    
        console.log(`Total word count in "${filename}": ${wordCount}`); 
      });
};

module.exports = {
    stringCount
}