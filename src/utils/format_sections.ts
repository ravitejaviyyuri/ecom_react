export function formatCLP360DegSection(edureka360degSection: any) {
    // const edureka360degSection = course_section.section_details;
    const formattedData: any = edureka360degSection.map((value: any) => {
        const title = value.subsection_title;
        const parsedValue = JSON.parse(value.subsection_content);
        const cardImageName = parsedValue.card_image_name;
        const dataPoints = JSON.parse(parsedValue.data);
        return {
            title,
            cardImageName,
            dataPoints
        }
    });

    return formattedData;
}

export function formatCLPGetAGlimpse(getaGlimpse: any) {
    const formattedGetaGlimpse: any = getaGlimpse.map((value: any) => {
        const title = value.subsection_title;
        const parsedValue = JSON.parse(value.subsection_content);
        const cardImageName = parsedValue.get_glimpse_image;
        const keyStat = parsedValue.get_glimpse_key_stat;
        const keyStatDescription = parsedValue.get_glimpse_key_stat_desc;
        return {
            title,
            cardImageName,
            keyStat,
            keyStatDescription
        }
    });
    return formattedGetaGlimpse
}

export function formatCLPCourseOverview(courseOverview: any) {
    let formattedCourseOverview: any = courseOverview.map((value: any) => {
        const title = value.subsection_title;
        const parsedValue = JSON.parse(value.subsection_content);
        const courseDuration = parsedValue.course_duration;
        const noOfLiveClasses = parsedValue.no_of_live_classes;
        const noOfAssignments = parsedValue.number_of_assingments;
        const noOfProjects = parsedValue.number_of_projects;
        const nameOfCertificate = parsedValue.name_of_certificate;
        return {
            title,
            courseDuration,
            noOfLiveClasses,
            noOfAssignments,
            noOfProjects,
            nameOfCertificate
        }
    });

    formattedCourseOverview = Object.assign({}, ...formattedCourseOverview);

    return formattedCourseOverview;
}

export function formatCLPCurriculum(curicullumData: any) {
    const formattedData: any = curicullumData.map((value: any) => {
        const title = value.subsection_title;
        const parsedValue = JSON.parse(value.subsection_content);
        const noofassignments = parsedValue.numberOfAssingments;
        const nooftopics = parsedValue.numberOfTopics;
        const handson = parsedValue.handsOn;
        const skills = parsedValue.skillsTolearn;
        const topics = parsedValue.topics;
        return {
            title,
            noofassignments,
            nooftopics,
            skills,
            handson,
            topics
        }

    });
    return formattedData;
}


export function formatCLPEdurekaAdvantage(advantageData: any){
    type advanatge = { title: any;
        other: any;
        edureka: any;
     };
     let section_data:any = {};
      let advantages_arr: advanatge = {title: "", other: "", edureka:""};
       advantageData.section_details.map((data: any) => {
           console.log(data);
          var  subsection_data = JSON.parse(data.subsection_content);
          subsection_data.map((section: any, index: number)=>{
              if(index == 0){
                advantages_arr.title = section;
              }else if(index == 1){
               advantages_arr.other = section;
             }else if(index == 2){
               advantages_arr.edureka = section;
             }
          })
       })
       section_data["section_title"] = advantageData.section_title;
       section_data["advantages_arr"] = advantages_arr;
       return section_data;
}


export function formatCLPRatings(rating_section: any){
    let platform_ratings: any;
    rating_section.section_details.forEach((data: any, index: Number) => {
      if(index == 0 )
         platform_ratings = data.subsection_content;
    })
    let ratings = JSON.parse(platform_ratings);

    return ratings;
}

export function formatCLPIce(course_sections:any){
    let section:any = {};
     let value_content: any;
    let list_items = course_sections.section_details.map((value: any) => {
        value_content  = JSON.parse(value.subsection_content);
    })
    section["value_content"] = value_content;
    section["section_title"] = course_sections.section_title;
    return section;
}

export function formatCLPFaq(course_sections:any){
    let obj:any = {specific_title:"",general_title:"",course_specific:"",general_queries:""};
    // var course_specific: any;
    // var general_queries: any;
    course_sections.section_details.map((value: any, index: Number) => {
      let value_content  = JSON.parse(value.subsection_content);
          if(value_content.querytype == "course_specific"){
            obj["specific_title"] =  value.subsection_title; 
            obj["course_specific"] = value_content.course_specific;
          }
          if(value_content.querytype == "general_queries") {
            obj["general_title"] =  value.subsection_title; 
            obj["general_queries"] = value_content.general_queries;
          }
    })
    return obj;
}