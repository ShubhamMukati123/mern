// function print(){
//     console.log("tis is normal funtion")
// }
// print()

// const print = () => console.log("this is arrow function")
// print()
// const sum = (a,b) =>a+b 
// console.log(sum(10,20))

// const sub = (a,b) =>a-b
// const c = sub(10,5)
// console.log(c)
// unction sum = (a,b) => { console.log(`sum of ${a} and ${b} = ${a+b}`) 
// return a*b;};
// console.log(sum(10,20));

// let a=10, b=20;
// console.log(a,b)
// const test = () =>{a=30,b=40}
// test(a,b)
// console.log(a,b)
const calculateCylinderSurfaceArea = (radius, height) => {

    let surfaceArea = 2 * Math.PI * radius * (radius + height);
    return surfaceArea.toFixed(2);
};


let radius = parseInt(prompt("Enter the radius"));
let height = parseInt(prompt("Enter the height"));


if (!isNaN(radius) && !isNaN(height) && radius > 0 && height > 0) {
    let surfaceArea = calculateCylinderSurfaceArea(radius, height);
    console.log("Surface Area of Cylinder:", surfaceArea);
} else {
    console.log("Please enter valid positive numbers for radius and height.");
}

