const calculateGrade = (scores)=>{
    if(scores>=90){
        return "A"
    }else if(scores >= 75){
        return "B";
    }else if(scores >=50){
        return "C";
    }else{
        return "F";
    }
};

console.log(calculateGrade(80));
console.log(calculateGrade(60));
