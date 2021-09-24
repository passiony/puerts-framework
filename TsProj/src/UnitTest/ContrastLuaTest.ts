import {UnityEngine,PuertsTest} from 'csharp'
import {$typeof} from 'puerts'

//横向对比puerts和xlua，ILRuntime：做13个标准函数测试
export class ContrastLuaTest {
    /**
     * 运行ts-cs用例，单纯的ts测试写到.test.ts里面
     * @constructor
     */
    static Run(){
        let tester = new ContrastLuaTest()
        let go = new UnityEngine.GameObject("testObject");
        tester.Test0(go.transform)
        tester.Test1(go.transform)
        tester.Test2()
        tester.Test3()
        tester.Test4()
        tester.Test5()
        tester.Test6()
        tester.Test7()
        tester.Test8()
        tester.Test9()
        tester.Test10(go.transform)
        tester.Test11()
    }

    Test0(transform:UnityEngine.Transform)
    {
        let t = Date.now()

        for (let i = 0; i < 2000000; i++) {
            transform.position = transform.position
        }
        console.log("Test0 elapsed time: "+(Date.now() - t))
    }

    Test1(transform:UnityEngine.Transform)
    {
        let t = Date.now()
        // let up = UnityEngine.Vector3.up
        for (let i = 0; i < 2000000; i++) {
            transform.Rotate(UnityEngine.Vector3.up, 1)
        }

        console.log("Test1 elapsed time: "+(Date.now() - t))
    }        

    Test2()
    {
        let t = Date.now()

        for (let i = 0; i < 2000000; i++) {
            let v = new UnityEngine.Vector3(i, i, i)
            let x = v.x
            let y = v.y
            let z = v.z
        }

        console.log("Test2 elapsed time: "+(Date.now() - t))
    }

    Test3(){
        let t = Date.now();
        for (let i = 0; i < 20000; i++) {
            let go = new UnityEngine.GameObject(""+i)
        }
        console.log("Test3 elapsed time: "+(Date.now() - t))
    }

    Test4()
    {
        let t = Date.now()
        let tp = $typeof(UnityEngine.SkinnedMeshRenderer)

        for (let i = 0; i < 20000; i++) {
            let go = new UnityEngine.GameObject()
            go.AddComponent(tp)
            let c = go.GetComponent(tp) as UnityEngine.Renderer
            c.receiveShadows=false
        }

        console.log("Test4 elapsed time: "+(Date.now() - t))
    } 

    Test5()
    {
        let t = Date.now()

        for (let i = 0; i < 2000000; i++) {
            let p = UnityEngine.Input.mousePosition
        }

        console.log("Test5 elapsed time: "+(Date.now() - t))
    }

    Test6()
    {
        let Vector3 = UnityEngine.Vector3 
        let t = Date.now()

        for (let i = 0; i < 2000000; i++) {
            let v = new Vector3(i,i,i)
            Vector3.Normalize(v)
        }

        console.log("Test6 elapsed time: "+(Date.now() - t))
    }

    Test7()
    {
        let Quaternion = UnityEngine.Quaternion
        let t = Date.now()

        for (let i = 0; i < 2000000; i++) {
            let q1 = Quaternion.Euler(i, i, i)        
            let q2 = Quaternion.Euler(i * 2, i * 2, i * 2)
            Quaternion.Slerp(Quaternion.identity, q1, 0.5)      
        }

        console.log("Test7 elapsed time: "+(Date.now() - t))
    }

    Test8()
    {
        let total = 0
        let t = Date.now()

        for (let i = 0; i < 2000000; i++) {
            total = total + i - (i/2) * (i + 3) / (i + 5)
        }

        console.log("Test8 elapsed time: "+(Date.now() - t))
    }
        
    Test9()
    {
        let array = []

        for (let i = 0; i < 1024; i++) {
            array[i] = i
        }

        let total = 0
        let t = Date.now()

        for (let i = 0; i < 20000; i++) {
            for (let i = 0; i < 1024; i++) {
                total = total + array[i]
            }
        }

        console.log("Test9 elapsed time: "+(Date.now() - t))
    }
        
    Test10(transform:UnityEngine.Transform)
    {
        let t = Date.now()

        for (let i = 0; i < 2000000; i++) {
            // PuertsTest.UserClass.TestFunc1(1, "123", transform.position, transform)
        }

        console.log("Test10 elapsed time: "+(Date.now() - t))
    }

    Test11()
    {
        let t = Date.now()
        let c = function(o:UnityEngine.Vector3, x:UnityEngine.Vector3)
        {
            let r = UnityEngine.Vector3.op_Addition(o, x)
        }
            
        for (let i = 0; i < 1000000; i++) {
            let a = new UnityEngine.Vector3(1,2,3)
            let b = new UnityEngine.Vector3(4,5,6)
            c(a,b)
        }

        console.log("Test11 elapsed time: "+(Date.now() - t))
    }
}