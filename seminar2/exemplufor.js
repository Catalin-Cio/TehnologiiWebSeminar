let copiazaArray=(lista) => {
    let rezultat=[];
    for(let i=0;i<lista.length;i++)
    {
        rezultat[i]=lista[i];
    }
    return rezultat;
}

console.log(copiazaArray([1,2,3,4,5]));

