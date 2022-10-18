import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    input: process.stdout
})


input.question("Siapa nama Anda?", (nama) => {
    console.info(`Hallo ${nama}`)
    input.console()
})