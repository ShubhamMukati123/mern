// let n = 10
// let fact = 1

// for(let i=1;i<n;i++)
// {
//    fact =fact*i
// }
// console.log("fact is ",fact)

let obj = {
    harry:20,
    shubh:45,
    sharda:56,
    suman:30,
}
for(let a in obj){
    console.log("marks is " + a + " are" +  obj[a])
}
for(let b  of obj){
    console.log("marks is " + a + " are" +  obj[a])
}