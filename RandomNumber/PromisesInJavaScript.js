var name = "TechnoFunnel"

var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject({
            name: "Mayank",
            promiseOutput: "Rejected..."
        })
    }, 15000)
})


myPromise.then((resolutionData) => {
    console.dir(resolutionData);
}, (rejectionData) => {
    console.log("This is Rejection")
    console.dir(rejectionData);
})

console.log(name);

for(let i = 0; i< 5; i++) {
    console.log(i)
}

