const http = require("node:http")
const info = require("./data.js")


const server = http.createServer((request, response) => {
    const htmlCreate = 
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node-http</title>
</head>
<body>
    <h1> ${info.titulo}</h1>
     <h2> ${info.subtitulotitulo}</h2>
     <p> ${info.parrafo}</p>
</body>
</html>
    
    `

    response.end(htmlCreate)
    
})

server.listen(0,() => {
    console.log(`Server listener active at port http://localhost:${server.address().port}`)
})