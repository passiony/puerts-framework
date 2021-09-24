import {Value} from "inkjs/engine/Value";

export class AlgorithmTest {
    /**
     * 运行ts-cs用例，单纯的ts测试写到.test.ts里面
     * @constructor
     */
    static Run(){
        let tester = new AlgorithmTest();
        tester.binarySearchTest();
        tester.doubleStack();
    }

    /**
     * 二分查找测试
     */
    private binarySearchTest(){
        console.log("--------------binary search test start--------------");
        let sourceData = [1,15,23,30,213,324,4456,4578,31435,343445,2123354,3574853784,2318627163];
        let indexOf = (sortedArray:Array<number>,findValue:number)=>{
            if(sortedArray.length <= 0) return -1;
            let low = 0;
            let high = sortedArray.length - 1;
            while (low <= high){
                let mid = low + Math.ceil((high - low) / 2);
                if(findValue < sortedArray[mid]) high =  mid - 1;
                else if(findValue > sortedArray[mid]) low = mid + 1;
                else return mid;
            }
            return -1;
        };
        let tValue = 31435;
        let findIndex = indexOf(sourceData,tValue);
        console.log(sourceData.join(","));
        console.log(`find value=>${tValue},find index=>${findIndex}`);
        console.log("--------------binary search test over--------------");
    }

    /**
     * 双栈实现字符串解析计算算术表达式
     */
    private doubleStack():number{
        //基本思路是遇到反括号，出栈计算表达式的值，但是有很大局限，主要是针对字符串解析上的问题，括号必须首位衔接，运算式都必须用括号包围
        let testStr = "((10+10)-(20*5))";//-80
        let stackOps = new Array<string>();
        let stackVals = new Array<number>();
        for(let i = 0;i < testStr.length;i++){
            let s:string = testStr[i];
            if(s === "("){
            }else if(s === "+" || s === "-" || s === "*" || s === "/"){
                stackOps.push(s);
            }else if(s === ")"){
                let op = stackOps.pop();
                let v = stackVals.pop();
                if(op === "+"){
                    v = stackVals.pop() + v;
                }else if(op === "-"){
                    v = stackVals.pop() - v;
                }else if(op === "*"){
                    v = stackVals.pop() * v;
                }else if(op === "/"){
                    v = stackVals.pop() / v;
                }
                stackVals.push(v)
            }else{
                stackVals.push(parseFloat(s));
            }
        }
        return stackVals.pop();
    }
}