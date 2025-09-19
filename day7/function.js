
console.log(isODD(3));
console.log(isODDUsingTernary(3));
function isODD(a)
{
    let num=a;
    console.log(a);
    if(a%2!==0)
    {
        return "value is odd";
    }
    else{
        return "value is even";
    }
}

function isODDUsingTernary(a)
{
    return a%2!==0?"Value is odd":"Value is even";
}
console.log(isODDUsingTernary,"isODDUsingTernary");

//function expresion

let funAsExpression =function isODD(a)
{
    return a%2!==0?"Value is odd":"Value is even";
}

console.log(funAsExpression);
console.log("invokaton of isODD(4)",isODD(4));

//arrow function
const arrowfun=(a)=>a%2!==0?"value of odd":"value is even";
console.log("output from arrowfun(4):",arrowfun(4));

//IIFE Function
(function  iifeFun()
{
    console.log("Inside IIFE Function");
})();