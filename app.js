const http = require("http");
const path = require("path");
const fs = require("fs");

const filePath = path.join(process.cwd(), "Appdata.txt");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World!");
    res.end();
  } else if (req.url === "/form") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<form action="/submit" method="POST"> <input name="userName" /> <button>SUBMIT</button> </form>'
    );
    res.end();
  } else if (req.url === "/submit") {
    let data = "";
    req.on("data", (chunk) => (data += chunk)); // geting form data into data variable
    req.on("end", () => {
      // After getting  complete data now reading file data
      fs.readFile(filePath, "utf8", (err,previousData) => {
        let newData = previousData + "\n" + data;
        fs.writeFile(filePath, newData, () => { // wirting new data to file
          res.setHeader("Content-Type", "text/html");
          res.write(`<h1>Data has been saved<h1>`);
          res.end();
        });
      });
    });
  } else {
    res.write("404 - File Not Found");
    res.end();
  }
});

server.listen(3000);
