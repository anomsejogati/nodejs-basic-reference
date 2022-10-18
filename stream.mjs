import fs, { read } from "fs"

const writer = fs.createWriteStream("target.log")

writer.write("Anom\n")
writer.write("Sejogati\n")
writer.close()

const reader = fs.createReadStream("target.log")

reader.on("data", function (data) {

    console.info(data.toString())
    reader.close()

})


reader.addListener("data", (data) => {

    console.info(data.toString())
    reader.close()

})