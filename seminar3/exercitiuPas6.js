const sorteazaDupaCheie=(arr,cheie)=> {
    return arr.sort((a,b)=>{
        if(a[cheie]<b[cheie]) return -1;
        if(a[cheie]>b[cheie]) return 1;
        return 0;
    });
}

const persoane=[
    {nume: "Ana",varsta: 25},
    {nume:"Bogdan",varsta:22},
    {nume:"Catalin",varsta:21},
];

console.log(sorteazaDupaCheie(persoane,"nume"));
console.log(sorteazaDupaCheie(persoane,"varsta"));