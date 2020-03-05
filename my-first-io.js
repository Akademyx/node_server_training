const fs = require('fs')

var x = fs.readFileSync(process.argv[2]).toString().split('\n').length

console.log(--x)