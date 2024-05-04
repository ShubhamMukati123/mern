// Define an array of objects representing employees
let employees = [
    { name: "John", age: 30, salary: 50000 },
    { name: "Jane", age: 35, salary: 60000 },
    { name: "Bob", age: 40, salary: 70000 }
];

// Function to calculate the total salary of all employees
function calculateTotalSalary(employees) {
    let totalSalary = 0;

    // Loop through each employee object and add their salary to the total
    for (let i = 0; i < employees.length; i++) {
        totalSalary += employees[i].salary;
    }

    return totalSalary;
}

// Calculate and print the total salary of all employees
let totalSalary = calculateTotalSalary(employees);
console.log("Total salary of all employees: $" + totalSalary);