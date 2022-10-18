import util from "util"

const firstName = "Anom"
const lastName = "Sejogati"

console.info(`Hello ${firstName} ${lastName}`)
console.info(util.format(`Hello %s %s`, firstName, lastName))

const person = {
    firstName: "Nala",
    lastName: "Azzahra"
}

console.info(`Person : ${JSON.stringify(person)}`)
console.info(util.format(`Person : %j`, person))