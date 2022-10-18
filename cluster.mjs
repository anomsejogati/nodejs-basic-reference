import cluster from "cluster"
import http from "http"
import os from "os"
import process from "process"

// Dua proses yang berbeda
// if (cluster.isPrimary) {
//     console.info(`Primary : ${process.pid}`)
//     cluster.fork()
// }

// if (cluster.isWorker) {
//     console.info(`Worker : ${process.pid}`)
// }
// End

if (cluster.isPrimary) {
    //jalankan worker
    console.info(`Primary : ${process.pid}`)
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork()
    }

    cluster.addListener("exit", (worker) => {
        console.info(`Worker ${worker.id} is exited`)
        cluster.fork()
    })

}

if (cluster.isWorker) {
    console.info(`Worker : ${process.pid}`)

    const server = http.createServer((request, response) => {
        response.write(`Response from process ${process.pid}`)
        response.end()
        response.exit()
    })

    server.listen(3000)
    console.info(`Start cluster worker ${process.pid}`)
}