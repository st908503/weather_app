//anagram

const a = "hello";
const b = "helllo";

if(a.length !== b.length){
    console.log("Strings not equal")
}

let r = a.split('').sort().join('');
let q = b.split('').sort().join('');

if(r === q){
    console.log("Anagram")
}
else{
    console.log("Not Anagram")
}
