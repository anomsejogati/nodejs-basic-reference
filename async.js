function samplePromise() {
    return Promise.resolve("Anom")
}

// it will error
// const name = await samplePromise()

// console.info(name)

async function run() {

    const name = await samplePromise()

    console.info(name)

}


run()