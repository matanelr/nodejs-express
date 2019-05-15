const path = require('path');
const express = require('express');
const app = express();


// console.log(__dirname);
// console.log(path.join(__dirname));

app.use(express.static(path.join(__dirname, 'public')));

// app.use('',express.static(__dirname));

// app.get('/', (req, res, next) => {
//     res.send('Welcome Home');
// });

app.listen(4600);

console.log('Server running at http://127.0.0.1:4500');
console.log('Try also: http://127.0.0.1:4500/main.html')