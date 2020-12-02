import {CourseSections} from "./../interfaces/course";

export function sectionsMapping(sections_array: CourseSections[]){
    var sections: any = {};
    sections_array.forEach((value:CourseSections, index: Number) =>{
          sections[value.section_type] = value;
          
    })


     return sections;
}