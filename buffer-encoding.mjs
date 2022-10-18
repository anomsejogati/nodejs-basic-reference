const buffer = Buffer.from("Anom Sejogati", "utf-8")

console.info(buffer.toString())
console.info(buffer.toString("base64"))
console.info(buffer.toString("hex"))

var strBase64 = buffer.toString("base64")

const bufferBase64 = Buffer.from(strBase64, "base64")
console.info(bufferBase64.toString("utf-8"))