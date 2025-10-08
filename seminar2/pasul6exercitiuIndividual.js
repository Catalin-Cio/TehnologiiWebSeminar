const fibonacci=(n) => {
    if(n<=0)
    {
        return 0;
    }
    if(n===1)
    {
        return 1;
    }
    return fibonacci(n-1)+fibonacci(n-2);
    
}

if(process.argv.length<3) {
    console.log("not enough params");
} else {
    let n=parseInt(process.argv[2]);
    console.log(fibonacci(n));
}