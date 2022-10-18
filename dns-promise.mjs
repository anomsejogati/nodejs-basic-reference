import dns from "dns/promises"

const ip = await dns.lookup("lms.appso.id")

console.info(ip)


const address = await dns.lookup("lms.appso.id")

console.info(address.address)
console.info(address.family)