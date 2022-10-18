import http from "http"

const server = http.createServer((request, response) => {

    console.info(request.method)
    console.info(request.url)
    console.table(request.headers)

    response.write("Hello HTTP Server")
    response.end()
})

server.listen(3000)