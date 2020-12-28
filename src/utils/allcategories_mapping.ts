
export interface SubChildren{
    id?:number;
    name?:string;
    to?:string;
  }
  // interface SubChildren{
  //   id?:number;
  //   name?:string;
  //   to?:string;
  // }
  interface Content{
    content?:(SubChildren);
  }
  
  interface MiddleChildren{
    id?:number;
    name?:string;
    children?:(Content)[];
  }
  
  interface Children  {
      title?:string;
      content?:(MiddleChildren)[];
  }
  
export const allcategoriesMapping = (categories:any)=>{

    let allChildren:(Children)[] = [];
    let allCategories:any = {};
    allCategories["categories"] = [];
    const num = 2;
    categories.forEach((category:any, index:number)=>{
        var optChildren:Children={};

        var optMiddleChildren:MiddleChildren={};
        optMiddleChildren.id = index + num;
        optMiddleChildren.name= category.name;

        optChildren.title= category.name;
        let optChild:SubChildren;
        let contentobj:Content = {};

        let content_arr:any = [];

        category.subCategory.forEach((subcategory: any,indexsub:number)=>{
        indexsub = indexsub + 1;
        indexsub = indexsub + index;
            optChild={
            id:indexsub,
            name:subcategory.display_title,
            to:"/"+subcategory.slug,
            }
            content_arr.push(optChild)
        })  
        contentobj.content = content_arr
        // let arr = [];
        //  arr.push(contentobj);
        optMiddleChildren.children = [contentobj];
        optChildren.content=[optMiddleChildren];
        allChildren.push(optChildren);
    })
    allCategories["categories"]=allChildren;
    // console.log("allcategories");
    // console.log(allChildren);

    return allCategories;
}