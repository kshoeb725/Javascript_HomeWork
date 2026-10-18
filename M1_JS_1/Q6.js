function findTopper(marks){
    return Math.max(...marks);
}

let marks =[75,80,95,60,65];
console.log("highestMarks:", findTopper(marks));
