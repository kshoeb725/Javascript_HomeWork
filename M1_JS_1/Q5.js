let marks = [95,65,80,45,90];

let grades =marks.map(mark => {
    if(mark >= 90){
        return "A";
    }else if(mark >=75){
        return "B";
    }else if(mark >=50){
        return "C";
    }else{
        return "f"
    }
});

console.log("grades",   grades);



const passedMarks = marks.filter(mark => mark >75);
console.log(passedMarks);


let totalmarks = marks.reduce((total,marks)=>
    total +marks,0);

console.log(totalmarks);
