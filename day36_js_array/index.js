let List = [1,4,0,9,11,8];
let High = List[0];
let SH

for(let i=1;i<List.length;i++){
    if(High<List[i]){
        SH = High;}
        else if(SH<List[i]){
            SH = List[i]

        }
        
        High = List[i];
    }

console.log(SH);

