const phones = ["iphone","oneplus","realme","redmi","sony-xperia","samsung","redmi","asus","blackbery",]


console.log(phones.sort())

// const num = [90,130,4033,30,5,3330,23,7,6,338]

//  console.log(num.sort((a,b)=>a-b))

const arr = [10,20,30,40,1,2,3,4,5,6,7,8,843]
const target = 254;

while(i<arr.length){
    if(arr[i]== target){
        console.log("element found",i);
        break;

    }

else{
    console.log("not found");
    break;

}
i++;
}
if(i== arr.length){
    
}