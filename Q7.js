function filterStudents(students){
    return students.filter(students => students.marks > 80);
}

let students = [
    {name:"rahul", marks:85},
    {name:"priya",marks:75},
    {name:"Amit",marks:60},
    
];

console.log(filterStudents(students));
