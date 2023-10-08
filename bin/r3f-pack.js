#! /usr/bin/env node
var shell = require("shelljs");

const args = process.argv.slice(2);

switch (args[0]) {
  case "start":
    shell.exec("webpack serve --config ./node_modules/r3f-pack/bin/webpack.dev.js");
    break;
  case "build":
    shell.exec('cpy "public/**" build && webpack --config ./node_modules/r3f-pack/bin/webpack.prod.js');
    break;
  default:
    console.log("arg not recognised");
}
