test("binary search test",()=>{
    let sourceData = [1,15,23,30,213,324,4456,4578,31435,343445,2123354,3574853784,2318627163];
    let indexOf = (source:Array<number>,find:number)=>{
        if(source.length <= 0)return -1;
        let low = 0;
        let high = source.length - 1;
        while(low <= high){
            let mid = low + Math.ceil((high - low) / 2);
            if(find < source[mid]) high = mid - 1;
            else if(find > source[mid]) low = mid + 1;
            else return mid;
        }
        return -1;
    };
    let key:number = 31435;
    let findIndex = indexOf(sourceData,key);
    console.log("binary search over:")
    console.log(sourceData.join(","))
    console.log(`find key=>${key},index is=>${findIndex}`);
});