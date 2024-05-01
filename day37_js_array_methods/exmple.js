const salary = [
    {emp:1,salary:100 ,name:"superman"},
    {emp:2,salary:200,name:"uperman"},
    {emp:3,salary:301,name:"perman"},
    {emp:4,salary:400,name:"erman"},
    {emp:5,salary:500,name:"rman"},
    {emp:6,salary:600,name:"an"},
    {emp:7,salary:702,name:"n"},
    {emp:8,salary:800,name:"s"},
    {emp:9,salary:901,name:"su"},
    
];
let evensalaryemp = []

for(let element of salary){
    if(element.salary >300 && element.salary <750 ){
        evensalaryemp.push(element)
    }
}
console.log("even salary array ",evensalaryemp)