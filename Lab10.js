let name = String;
let ege = Number;
let isStudent = Boolean;

console.log(`Name: ${name} Ege: ${ege} He's Student: ${isStudent}`);

name = 'Carlos';
ege = 26;
isStudent = false;

console.log(`Name: ${name} Ege: ${ege} He's Student: ${isStudent}`);


let a = Math.random() * 10;
let b = 8;

console.log(`Suma: ${a + b}\nResta: ${a - b}\nMultiplicacion: ${a * b}\nDivision: ${a / b}\n`);

console.log(`==: ${a == b}\n!=: ${a != b}\n>: ${a > b}\n<: ${a < b}\n>=: ${a >= b}\n<=: ${a <= b}`);

let isAdult = true;
let haveLicense = true;

console.log(`Bienvenido, usted ${((isAdult && haveLicense) || haveLicense) ? 'Puede conducir' : 'No puede conducir'}`);

