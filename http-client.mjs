import https from "https"
import { json } from "stream/consumers"

const url = "https://hookb.in/YV3lqaDWmlUQjy0Qm1x9"

const request = https.request(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}, (response) => {
    response.addListener("data", function (data) {
        console.info(`Receive : ${data.toString()}`)
    })
})

const body = JSON.stringify({
    firstName: "Nala",
    lastName: "Azzahra"
})

request.write(body)
request.end()