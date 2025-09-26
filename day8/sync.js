console.log("start");

const waitForSomeTime = (ms) => {
    const start = Date.now();
    while (Date.now() - start < ms) {
    
    }
    console.log("Waited for " + ms + " ms");
};

const syncUsingTimer = () => {
    waitForSomeTime(4000);
    console.log("wait has been completed");
    return "done";
};

console.log(syncUsingTimer());
console.log("end");

const asyncUsingTimer = () => {
    setTimeout(() => {    
        console.log("inside timeout");    
    }, 4000);
};

console.log("start");
syncUsingTimer();
asyncUsingTimer();
console.log("end");