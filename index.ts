#! /usr/bin/env node


import inquirer from "inquirer";

console.log("\n\tWellcome To \'Coding\' - CLI mini calculator\n");

let answers = await inquirer.prompt([
  {message: "Enter First Number", type: "number", name: "firstNumber"},
  {message: "Enter Second Number", type: "number", name: "secondNumber"},
  {
  message: "Select one operator to perform operation",
  type: "list",
  name: "operator",
  choices: [ "Addition", "Subtraction", "Multiplication", "Division"],

  },

]);

//console.log(answers);

  if(answers.operator === "Addition"){
  console.log(answers.firstNumber + answers.secondNumber)  
  }
   else if (answers.operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
   }
   else if (answers.operator === "Multipliction"){
    console.log(answers.firstNumber * answers.secondNumber)
   }
   else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
   }
     else{
      console.log("invalid input")
     }

