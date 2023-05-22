const express = require("express");
const serve = require("express-static");
const path = require("path");
const app = express();
const port = 3000;

/*
console.log('__dirname: ', __dirname)
let pathResolved = path.resolve(__dirname + '../../../../dist')
console.log('pathResolved: ', pathResolved)
*/

let distDir = path.resolve(__dirname + "../../../../packages/app/dist/");

app.use("/dist", serve(`${distDir}`));

app.get("/*", function (req, res) {
  res.sendFile(`${distDir}/index.html`);
});

/* app.get('/users', function (req, res) {
    res.sendFile(`${distDir}/index.html`)
})

app.get('/posts', function (req, res) {
    res.sendFile(`${distDir}/index.html`)
}) */

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
