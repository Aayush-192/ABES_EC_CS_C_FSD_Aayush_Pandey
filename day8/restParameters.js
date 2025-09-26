const sum = (...args) => {
    let total = 0; 
    args.forEach(ele => {
        total += ele;
    });
    return total;
};

const outp = sum(1,2,3,4,5,6,7,8,89,90,12);

console.log(outp);


const isdiv = (...args) => {
  console.log(args);
  let arr = [];
  args.forEach(ele => {
    if (ele % 2 === 0) {
      arr.push(ele);   
    }
  });
  return arr;
};

const output = isdiv(1,2,3,4,5,6,7,8,89,90,12);

console.log(output);