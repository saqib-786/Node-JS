const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "appData.txt");

router.get("/", (req, res) => {
  res.send(
    `<form action="form/submit" method="POST">
        <input name="userName"> <input type="submit">
        </form>
        `
  );
});

router.post("/submit", (req, res) => {
  let data = "";
  req.on("data", (chunk) => (data += chunk));
  req.on("end", () => {
    fs.readFile(filePath, "utf8", (err,previousData) => {
        let newData = previousData + '\n' + data;
        fs.writeFile(filePath,newData,()=>{
            console.log(newData)
        })
    });
  });
  res.send(`<h2>Form Submited</h2>`);
});
module.exports = router;
