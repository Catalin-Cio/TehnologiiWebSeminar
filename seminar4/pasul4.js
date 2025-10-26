/*String.prototype.capitalizedWords = function () {
    return this.replace(/\b[a-z]/g, match => match.toUpperCase())
}

console.log("these words will be calipalized".capitalizedWords())*/

function times(n, callback) {
    for (let i = 0; i < n; i++) {
        callback(i)
    }
}

times(3, () => {
    console.log("executed")
})

