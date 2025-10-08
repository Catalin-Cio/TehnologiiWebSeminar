let intercaleaza=(arr1,arr2) => {
    if(arr1.length!==arr2.length)
    {
        return -1;
    }
let rezultat=[];
for(let i=0;i<arr1.length;i++)
{
    rezultat[rezultat.length]=arr1[i];
    rezultat[rezultat.length]=arr2[i];
}
return rezultat;
}

console.log(intercaleaza([1,5,3],[6,2,4]));
console.log(intercaleaza([1,5,3],[6,2,4,5]));