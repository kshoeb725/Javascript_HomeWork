const increaseMarks = function(marksArray){
    return marksArray.map(mark => mark + 10);
}


let marks =[60,70,80,90];
console.log(increaseMarks(marks))