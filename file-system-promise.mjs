import fs from "fs/promises"

const buffer = await fs.readFile("file-system-promise.mjs")

console.info(buffer.toString())

await fs.writeFile("temp.txt", "Anom Sejogati")