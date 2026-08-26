const fs = require("fs");

console.log("Building project...");

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

fs.copyFileSync("test.js", "dist/test.js");

console.log("Build completed successfully!");