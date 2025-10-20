/*const words = [
    "fox",
    "wolf",
    "snake",
    "crocodile",
    "lion",
    "cat",
    "crocodile",
    "horse"
]

const forbiddenWord= "crocodile";
const minLength=4;

const filterWords=(words,forbiddenWord,minLength) => 
    words.filter((word) => word !== forbiddenWord && 
word.length>=minLength);

console.log(filterWords(words,forbiddenWord,minLength));*/

const aniNastere= [2005,1998,2010,1890,2000,1999];
const anulCurent=2025;

const varstaPeste18=aniNastere.map((an)=>anulCurent-an).filter((varsta)=>varsta>=18);
console.log(varstaPeste18);