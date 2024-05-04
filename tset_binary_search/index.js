let ar = [ {name:raj,salary:125000,age:25},{name:Shree,salary:130000,age:33},{name:harsh,salary:135000,age:26},{name:kajal,salary:135000,age:18},{name:Ram,salary:140000,age:19},{name:rishabh,salary:200000,age:21},{name:negi,salary:190000,age:22},{name:pawan,salary:180000,age:24},{name:santosh,salary:185000,age:33},{name:sanjay,salary:192000,age:27}];


function ts(ar){
    let totalsalary = 0;
      for (let i = 0; i < ar.length; i++) {
        if(salary>100000 && salary<150000)

        totalsalary += ar[i].salary;
    }

    return totalsalary;
}
let totalsalary = ts(ar);
console.log("Total salary of all ar: $" + totalsalary);