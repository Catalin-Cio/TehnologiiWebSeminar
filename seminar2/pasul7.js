let frecvente=(text) => {
    let total=0;
    let nrFrecvente={};
    for(let i=0;i<text.length;i++)
    {
        let ch=text[i];
        if(ch!==" ")
        {
            total++;
            if(nrFrecvente[ch])
            {
                nrFrecvente[ch]++;
            } else {
                nrFrecvente[ch]=1;
            }
        }
    }

    let frecventeRel={};
    for(let ch in nrFrecvente) {
        frecventeRel[ch]=nrFrecvente[ch]/total;
    }
    return frecventeRel;

}

console.log(frecvente("buburuza si motanul"));