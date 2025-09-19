var a=28;
let b=30;
const pi=3.14;
console.log("Block scope:");
console.log("value of a in block scope",a);
console.log("value of b in block scope",b);
console.log("value of c in block scope",c);
console.log("value of pi in block scope",pi);
function callvalues(a,b,c)
{
console.log("Inside function")
console.log("value of a in block scope",a);
console.log("value of b in block scope",b);
console.log("value of c in block scope",c);
}
fun();
console.log("Inside function")
console.log("value of a outside the function",a);
console.log("value of b outside the function",b);
console.log("value of pi outside the function",pi);
