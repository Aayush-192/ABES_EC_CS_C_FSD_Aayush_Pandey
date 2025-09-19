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
console.log(student.name);
console.log(student['name']);

let x='name';
console.log(student[x]);

function modifyStudent(obj)
{
    obj.name="ABC";
}
modifyStudent(student);

console.log(student.name);
console.log(student['name']);