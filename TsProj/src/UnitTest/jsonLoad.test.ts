import {$typeof} from "puerts";
import Handler from "../framework/utils/Handler";
import {UnityEngine} from "csharp";
import {ResourceManager} from "../framework/resource/ResourceManager";

test("load json",()=>{
    ResourceManager.Instance.initialize();
    ResourceManager.Instance.loadAssetAsync("config/json/Residents.json",$typeof(UnityEngine.TextAsset),Handler.create(this,(asset)=>{
        let obj = JSON.parse(asset);
        expect(obj["1"].id).toBe("1");
    },null,true));
});