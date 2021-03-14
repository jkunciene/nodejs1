const path = require('path')
let pathObj = path.parse(__filename)
console.log(pathObj)

const os = require('os')
let totalMemory = os.totalmem()
console.log(`Total memory is ${totalMemory}`)

const fs = require('fs')
fs.readdir('./', function(err, files){
    if (err) console.log('Error', err)
    else console.log('Result', files)
})



const EventEmitter = require('events')
const emitter = new EventEmitter()