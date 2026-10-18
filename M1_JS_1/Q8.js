

let students = [
    {name:"rahul", marks:85},
    {name:"priya",marks:75},
    {name:"Amit",marks:60},
    
];

let totalmarks = students.reduce((total,student )=>{
    return total+ student.marks;
},0)

console.log(totalmarks);
