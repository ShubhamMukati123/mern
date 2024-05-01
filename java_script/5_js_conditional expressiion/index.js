//condditional statement//
let a = prompt("hey whats ur age")

a = Number.parseInt(a)

if(a<0){
    alert("this is valid age")
}
else if (a<9){
    alert("you area a kid and you can not think for drivinmg")
}
else if(a<18 && a>=9){
    alert("you area a kid and you can think of driving after 18")
}
else {
    alert("you can driver now")
}
console.log("you can",(age>18 ? "drive" : "not drive"))