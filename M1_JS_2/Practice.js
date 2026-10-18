//  class BankAccount{
//      accountNumber =125025

//      accountHolderName = "Shoeb"
//      balance = 2000

//      deposit(num){
//          console.log("amount is succesfully deposited in"+" "+this.accountNumber+" "+this.accountHolderName+" "+(num+this.balance));
        
//      }

//      withdraw(num){
//          console.log("amount succesfully withdrawn"+" "+this.accountNumber+" "+this.accountHolderName+" "+(this.balance-num));
        
//      }

//  }

//  const a = new BankAccount();
//  a.deposit(200);
//  a.withdraw(100);


//  Array Destructing

// const num = [10,20,30,40,50]

// const [A,B, ...b] = num

// console.log(...b);


// Object Destructing 

//  const Emp = {
//      id : 2,
//      name : "Shoeb",
//      Salary:2500

//  }

//  const {id, name , salary} = Emp

//  console.log(name);


//  function MaxNum(num){
//      return Math.max(...num)
//  }

//  num = [20,50,60,80,90]
//  console.log(MaxNum(num));

// function greet(name, guest="shoeb"){
//     console.log(name + " "+ guest);
    
// }

// greet("Adil")


//  function add(num, num2=10){
//      return num+num2;
//  }

//  console.log(add(12));


//  question 7

//  try {
//      console.log(a);
    
//  } catch (error) {
//      console.log(error.name+":"+error.message)
//  }


// // function age(num){
// //     try {
// //         if(age>18){
// //             console.log("you are eligible");
            
// //         }else{
// //             throw new Error("You are not eligible")
// //         }
// //     } catch (error) {
// //         console.log(error.name+":"+error.message);
// //     }
// // }

// // age(15);


// function validate_age(age){
//     try {
//         if(age>18){
//             console.log("you are eligible");
            
//         }else{
//             console.log("you are not eligible")
//         }
//     } catch (error) {
//         console.log(error.name+":"+error.message);
//     }
// }

// validate_age(0);


// Question 10

// function validate(num1,num2){
//     try {
        
     
//     if(num2 ==0){
//         throw new Error("Zero cannot be accepeted")
//     }else{
//         console.log(num1+num2);
        
//     }}catch (error) {
//          console.log(error.name+":"+error.message);
//     }
// }

// validate(1,0)




// Question 11

// class InvalidSalaryError extends Error {
//     constructor(message){
//         super(message);
//         this.name ="InvalidSalaryError";
//     }
// }


// function emp (sal){
//     try {
//         if(sal<=0){
//             throw new InvalidSalaryError("Sal can't be Zero")
//         }else{
//             console.log("you sal is "+sal);
            
//         }
//     } catch (error) {
//         console.log(error.name+";"+error.message);
        
//     }
// }

// emp(0)



//Question 12

// class InvalidUserNameError extends Error {
//     constructor(message){
//         super(message)
//         this.name ="InvalidUserNameError"
//     }
// }


// function emp (username){
//     try {
//         if(username == ""){
//             throw new InvalidUserNameError("USername is invalid")
//         }else{
//             console.log("Your username is "+username);
            
//         }
//     } catch (error) {
//         console.log(error.name+":"+error.message);
        
//     }
// }

// emp("")


// question 13


// function first(){
//     throw new Error("An error occured in first()");
// }

// function second(){
//     first();
// }

// function third(){
//     try {
//         second();
//     } catch (error) {
//         console.log(error.name+":"+error.message);
        
//     }
// }

// third()


// question 15

// import {addition, subtract, multiply , divide} from "./calculator.js"

// console.log(addition(10,5));
// console.log(subtract(60,5));
// console.log(multiply(9,5));
// console.log(divide(10,5));


// question 16

// const Employee = require('./Emp');

// const emp1 = new Employee(200,"Tom","Mumbai");

// console.log(emp1);

// question 17

// const taskPromise = new Promise((resolve, reject) => {
//   resolve("Task completed");
// });


//  question 18

// taskPromise.then((message)=>{
//     console.log(message);
    
// });

// const taskPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Task not completed");
//     }, 3000);
  
// });


// taskPromise2.catch((message)=>{
//     console.log(message);
    
// });

// question 20 

// async function task(){
//     await new Promise(resolve => setTimeout(resolve,2000));
//       console.log("task complted");
      
    
    
// }

// task();


// question 20

async function getUser(params) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log("Error", error);
        
    }
}

getUser();