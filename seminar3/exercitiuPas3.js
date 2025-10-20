const formatString=(s,params)=> {
    let modified=s;
    for(let key in params) {
        if (modified.indexOf('{'+key+'}')!==-1)
        {
            modified=modified.replace('{'+key+'}',params[key]);
        }
    }
    return modified;
}
console.log(formatString("un {substantiv} este {adjectiv}",{substantiv: "calut",adjectiv:"dragut"}));