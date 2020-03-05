const fs = require('fs')

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    //data will come back as a string due to the utf-8 being in a string
    if (err) return console.error(err);
    const result = data.split('\n').length - 1
    console.log(result)
})