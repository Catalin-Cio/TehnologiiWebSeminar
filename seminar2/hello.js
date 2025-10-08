let sayHello=(array) => {
    let rezultat="";
    for(let i=0;i< array.length;i++)
    {
        rezultat+=array[i];
    }
    return rezultat;
};  
console.log(sayHello(["C","m","C"]));   