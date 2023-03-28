//console.log(process.argv);

const sum=(num1,num2)=>num1+num2;
const[, , n1,n2]=process.argv;

console.log(sum(+n1,+n2));