import path from "path"

const file = "/Users/anom/contoh.go"

console.info(path.parse(file))
console.info(path.sep)
console.info(path.dirname(file))
console.info(path.basename(file))
console.info(path.extname(file))
