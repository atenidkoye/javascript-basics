// console.log("my name is dennis")
// console.log("the result of 2+2 is ", 2+2)
// alert("hello everyone. i don show")
// document.write("<h1>coming from javascript</h1>")
// document.body.style.background = 'blue'


const http = require('http')
const server = http.createServer(function (req, res) {
    res.end('<h1>hello from the server </h1>')
})


server.listen(4000)