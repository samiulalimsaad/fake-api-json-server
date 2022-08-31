const fs = require("fs");
const files = fs.readdirSync(__dirname + "/data");

const filesObj = {};

files.map((v) => {
    const temp = v.replace(".json", "");
    filesObj[temp] = require("./data/" + temp);
});

module.exports = filesObj;
