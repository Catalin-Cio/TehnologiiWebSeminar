const calculeazaMedia=(numere)=> {
    if(numere.length===0)return 0;
    const suma=numere.reduce((acc,n)=>acc+n,0);
    return suma/numere.length;
}

const numere=[10,20,30,40,50];
console.log(calculeazaMedia(numere));