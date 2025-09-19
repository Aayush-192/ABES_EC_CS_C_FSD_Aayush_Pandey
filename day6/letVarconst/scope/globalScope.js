var a=28;
let b=30;
const pi=3.14;
console.log("Global Scope:");
console.log("value of a in global value",a);
console.log("value of b in global value",b);
console.log("value of pi in global value",pi);
function callvalues(a,b,pi)
{
    console.log("Inside function")
console.log("value of a in global value",a);
console.log("value of b in global value",b);
console.log("value of pi in global value",pi);
}
callvalues(a,b,pi)