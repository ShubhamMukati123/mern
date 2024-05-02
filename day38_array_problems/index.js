const arr = [10,20,30,40,50,"superman","spiderman","thor","chennai","expres"]

const mySlice = (start,end)=>{
    const temp = [];
    for(let i=start; i<end; i++){
        temp.push(arr[i])
    }
    return temp;
}
console.log("original slice",arr.slice(5,7))
console.log("apna slice slice",mySlice(5,7))
