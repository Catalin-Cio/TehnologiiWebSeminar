/*function addToArray() {
    let args=arguments;
    let array=args[0];
    for(var i=1;i<args.length;i++)
    {
        array.push(args[i]);
    }
    return array;
}*/
function addToArray(array, ...args) {
    for (var i=0;i<args.length;i++)
    {
        array.push(args[i]);
    }
    return array;
}
let array=["a"];
console.log(addToArray(array,"b","c").join(", "));