function abbrevName(name){
 return name.toUpperCase().split(" ")[0][0]+"."+ name.toUpperCase().split(" ")[1][0];
}

console.log(abbrevName("Sam Harris")) //"S.H"
console.log(abbrevName("Evan Cole")) //"E.C"
console.log(abbrevName("P Favuzzi")) //"P.F"
console.log(abbrevName("David Mendieta")) //"D.M"
console.log(abbrevName("Patrick Feenan")) //"P.F"
console.log(abbrevName("patrick feenan")) //"P.F"