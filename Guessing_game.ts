#! /usr/bin/env node

import inquirer from "inquirer"


const R_num=Math.floor(Math.random()*100)+1

let m=5;

let i:number
for(i=0;i<5;i++){
const user_num:{
    user_number:number
} = await inquirer.prompt([
    {
    type:"number",
    name:"user_number",
    message:"Enter any number between 1 to 100 (you have only five tries) : "
    }
])
if(R_num === user_num.user_number){
    console.log("Right answer")
    break
}
else if (user_num.user_number<=R_num+3  && user_num.user_number>=R_num-3){
    console.log("Very close")
    console.log(--m," try left ")

}
else if (m==1){
    console.log("Better luck next time")
}
else{
    console.log(--m," try left")
}
}

