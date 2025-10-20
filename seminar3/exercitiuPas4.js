const reduce=(array,reducer,initialValue) => {
    let acumulator=initialValue;
    for(const element of array) {
        acumulator=reducer(acumulator,element);
    }
    return acumulator;
}
const sampleArray=[1,2,3,4,5];
const rezultat=reduce(sampleArray,(acc,x)=>acc+x,0);
console.log("rezultat: ",rezultat);