function samplePromise() {
    return Promise.resolve("Anom")
}

const name = await samplePromise()
console.info(name)