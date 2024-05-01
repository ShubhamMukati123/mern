// const area = (r,h)=>{
//     a=(2*3.14*r*r )+ (2*3.14*r*h)
//     console.log(a)
// }

// let r = parseInt(prompt("Enter the radius"));
// let h = parseInt(prompt("Enter the height"));

const sArea = (r,h) => 2*Math.PI*r*r + 2*Math.PI * r* h;
const r = parseFloat(prompt("enter the radius of cylinder"))
const h = parseFloat(prompt("enter the height of cylinder"))

const result = sArea(r,h)

console.log(`the surface area of cylinder with radius "${r}" and height "${h}" = ${result}`)

alert(`the surface area of cylinder with radius "${r}" and height "${h}" = ${result}`);