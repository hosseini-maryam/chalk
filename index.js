var chalk = require("chalk");

var message = chalk.bold.inverse("Hello ") + chalk.yellow.bgWhite("World");
console.log(message);