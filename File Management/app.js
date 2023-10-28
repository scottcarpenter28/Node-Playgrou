const fs = require("fs");

fs.readFile("./hello-world.txt", "utf8", (err, data) =>{
    console.log(data);
});