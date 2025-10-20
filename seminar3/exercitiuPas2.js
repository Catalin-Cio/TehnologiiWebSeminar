/*const getTotalArea=(squareDimensions) =>
    squareDimensions.map((side)=>side*side).reduce((prev,current)=>prev+current,0);
const squareDimensions=[3,5,12,3,5,3];
const result=getTotalArea(squareDimensions);
console.log("result: ",result);*/
const sumaDivizibile=(numere,divizor) =>
    numere.filter((n)=>n%divizor===0).reduce((suma,n)=>suma+n,0);
const numere=[3,6,6,9,10,12,15];
const divizor=3;
const rezultat=sumaDivizibile(numere,divizor);
console.log("rezultat=",rezultat);