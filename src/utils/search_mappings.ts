import { forEach } from "lodash";

export function searchMapping(searcharr: any){
    const objmaps:any = {};
    searcharr.forEach((val:any,index:number)=>{
        if( val.name in objmaps){
            objmaps[val.name].push(val);
            
        }else{
            objmaps[val.name] = [];
            objmaps[val.name].push(val);
            
        }

    })
    console.log("hello123");
    console.log(objmaps);
    return objmaps;

}