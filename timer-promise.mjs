import timers from "timers/promises"

console.info(new Date())
await timers.setTimeout(1000)
console.info(new Date())

const name = await timers.setTimeout(2000, "Anom Sejogati")
console.info(name)

// for await (const startTime of timers.setInterval(1000, new Date)) {
//     console.info(`Start time at ${startTime}`)
// }


for await (const startTime of timers.setInterval(1000, "ignored")) {
    console.info(`Start time at ${new Date}`)
}