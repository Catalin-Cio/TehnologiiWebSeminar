function diferente(sir1,sir2)
{
    if(sir1.length!==sir2.length)
    {
        return -1;
    }

    let diferite=0;
    for(let i=0;i<sir1.length;i++)
    {
        if(sir1[i]!==sir2[i])
        {
            diferite++;
        }
    }
    return diferite;
}

console.log(diferente("abd","dba"));
console.log(diferente("abc","abcd"));
console.log(diferente("cmc","cmc"));