import { URL } from "url"

const url = new URL("https://www.udemy.com/course/nodejs-pemula-sampai-mahir/learn/lecture/30053932?kelas=node.js")

url.host = "www.appso.id"

console.info(url.toString())
console.info(url.protocol)
console.info(url.host)
console.info(url.pathname)
console.info(url.searchParams)
