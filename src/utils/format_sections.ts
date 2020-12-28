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