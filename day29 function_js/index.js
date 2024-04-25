
function sum(a,b){
    console.log('sum is',a+b)
}
function sub(a,b){
    console.log('sub is',a-b)
}
function mult(a,b){
    console.log('mult is',a*b)
}
function divide(a,b){
    console.log('devide is',a/b)
}
let userchoice = parseInt(prompt("for sum enter 1 \n for sub entr 2 \n for mul enter 3\n for div enter 4\n"));

let a = parseInt(prompt("enter first number"))
let b = parseInt(prompt("enter second number"))
switch(userchoice)
{
    case 1:
        {
           sum(a,b)
           break;
        }
        
    case 2:
        {
           sub(a,b)
           break;
        }
        
    case 3:
        {
           mult(a,b)
           break;
        }
        
    case 4:
        {
           divide(a,b)
           break; 
        }
        default : console.log('NOT FOUND')
}