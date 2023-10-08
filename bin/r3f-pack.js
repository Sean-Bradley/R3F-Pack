#! /usr/bin/env node
var shell = require("shelljs");
const path = require("path");

const args = app.parse();

switch (args.command[0]) {
  case "start":
    shell.exec("echo start");
    break;
  case "build":
    shell.exec("echo build");
    break;
}

// process.env.PATH +=
//   path.delimiter + path.join(process.cwd(), "node_modules", ".bin");
// shell.exec("prettier 'src/**/*.{js,json}' --write");
