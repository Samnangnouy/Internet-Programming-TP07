// const express = require('express')
// const fs = require('fs');
// const app = express()

// app.get('/', function (req, res) {
//   fs.readFile('src/ex1.html', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
    
//     res.send(data);
//   });
// })

// app.get('/detail', function (req, res) {
//   res.send('You are in my detail page')
// })

// app.listen(3003, () => {
//   console.log("Server is running on port 3002");
// });

const express = require('express')
const { readFile } =require ('fs');
const app = express()

app.get('/', function (req, res) {
    readFile('src/ex1.html','utf8',(err ,html)=>{
        if(err)
        res.status(500).send("Error");
    res.send(html);
    })
})

app.listen(3000, ()=> {
    console.log("http://localhost:3000");
});