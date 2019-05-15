var fs = require('fs');
let args = process.argv.slice(2);
let fileA = args[0];
let fileB = args[1];

fs.readFile(fileA, 'utf8', function(err, data) {
    if (err) throw err;

    let opp ="";
    for (let i = 0; i < data.length; i++){
        opp = data[i] + opp;
    }

    fs.writeFile(fileB, opp, function (err) {
        if (err) throw err;
    });
});



