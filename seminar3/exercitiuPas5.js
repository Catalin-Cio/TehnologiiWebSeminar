const cenzureaza=(text,dictionar)=> {
    let cuvinte=text.split(" ");
    return cuvinte.map(cuvant => {
        if(dictionar.includes(cuvant)) {
            if(cuvant.length>2) {
                return cuvant[0]+ "*".repeat(cuvant.length-2)+cuvant[cuvant.length-1];
            } 
            else {
                return cuvant;
            }
        }
        return cuvant;
    })
    .join(" ");
}

const text="javascript este minunat";
const dictionar=["este"];
console.log(cenzureaza(text,dictionar));