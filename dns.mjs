import dns from "dns"

function callback(error, ip) {
    console.info(ip)
}

dns.lookup("www.appso.id", callback)