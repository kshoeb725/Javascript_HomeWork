function filterpassedStudent(marks){
    return marks.filter(marks => marks >=35)
}

let marks = [25,65,35,40,25,20]

console.log(filterpassedStudent(marks));
