import { GetServerSideProps } from "next";
import { getCourse } from "../api/services/course.service";
import { Course, CourseSections } from "../interfaces/course";
import ClpLayout from "../components/layouts/Clp.layout";
import Reviews from "../components/clp/Review/Reviews.component";
import OtherCityLink from "../components/clp/OtherCityLinks/OtherCity.component";
import ICE from "../components/clp/ICE/ICE.component";
import FAQ from "../components/clp/FAQ/FAQ.component";
import EdurekaAdvantage from "../components/clp/Advantage/EdurekaAdvantage.component";
import Certification from "../components/clp/Certification/Certification.component";
import Projects from "../components/clp/Project/Project.component";
import Curriculum from "../components/clp/Curriculum/Curriculum.component";
import {sectionsMapping} from "../utils/section_mapping";

type Props = {
  data: {
    course: Course;
    reviews: String[];
  };
  errors?: string;
};

const CoursePage = ({ data, errors }: Props) => {
  if (errors) {
    return (
      <div>
        <span style={{ color: "red" }}>Error:</span> {errors}
      </div>
    );
  }

  return (
    <ClpLayout>
      <Curriculum />
      <Projects course_section = {data.course.course_sections.clp_project}/>
      <Certification />
      {console.log(data.course.course_sections.clp_project)}
      <EdurekaAdvantage course_sections = {data.course.course_sections.clp_edureka_advantage} />
      <Reviews />
      <FAQ  course_sections = {data.course.course_sections.clp_faq}/>
      <ICE  course_sections = {data.course.course_sections.clp_ice}/>
      <OtherCityLink />
    </ClpLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const slug = params?.slug;

    const course: Course = await getCourse(String(slug));
    //console.log(course.course_sections);
    course.course_sections = sectionsMapping(course.course_sections);
    console.log(course.course_sections.clp_curriuculum_section);
    const reviews = ["review 1", "review 2", "review 3", "review 4"];

    return {
      props: {
        data: {
          course: course,
          reviews: reviews,
        },
      },
    };
  } catch (err) {
    // Pass error to the page via props
    return { props: { errors: err.message } };
  }
};

export default CoursePage;
