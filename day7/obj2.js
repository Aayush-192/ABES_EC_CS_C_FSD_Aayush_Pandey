const student={
    name:" xyz",
    cource:"B.TECH",
    branch:"CS",
    section:"C",
    phoneno:
    {
        phoneno1:2342443434,
        phoneno2:4334244525
    },
    adderss:
    {
        hno:31,
        street:"abs",
        city:"ghaziabad",
        state:"UP"

    }
}
console.log("before",student.section);
console.log("before",student.adderss.city);





const newStudent=Object.assign({},student);
console.log(newStudent);

newStudent.section='A';
newStudent.adderss.city='Noida';