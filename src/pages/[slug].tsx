import { GetServerSideProps } from "next";
import { getCourse } from "../api/services/course.service";
import { Course } from "../interfaces/course";
import ClpLayout from "../components/layouts/Clp.layout";
import Reviews from "../components/clp/Review/Reviews.component";
import OtherCityLink from "../components/clp/OtherCityLinks/OtherCity.component";
import ICE from "../components/clp/ICE/ICE.component";
import FAQ from "../components/clp/FAQ/FAQ.component";
import EdurekaAdvantage from "../components/clp/Advantage/EdurekaAdvantage.component";
import Certification from "../components/clp/Certification/Certification.component";
import Projects from "../components/clp/Project/Project.component";
import Curriculum from "../components/clp/Curriculum/Curriculum.component";
import BatchComponent from "../components/clp/batch/Batch.component";
import Breadcrumb from "../components/shared/breadcrumb/Breadcrumb.component";
import CourseTitle from "../components/clp/course_title/Title.component";
import VideoInfo from "../components/clp/video_info/VideoInfo.component";
import LearningByEdureka from "../components/clp/learning_by_edureka/LearnEdu.component";
import KnowYourCourse from "../components/clp/know_your_course/KnowYourCourse.component";
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
      <Breadcrumb />
      <CourseTitle />
      <VideoInfo />
      <LearningByEdureka course_section = {data.course.course_sections.clp_360_deg_section} />
      <BatchComponent />
      <KnowYourCourse knowYourCourse= {data.course.course_sections.clp_get_to_know_your_course} getaGlimpse = {data.course.course_sections.clp_get_a_glimpse} courseOverview = {data.course.course_sections.clp_course_overview}/>
      <Curriculum  course_section = {data.course.course_sections.clp_curriuculum_section}/>
      <Projects />
      <Certification />
      <EdurekaAdvantage />
      <Reviews />
      <FAQ />
      <ICE />
      <OtherCityLink />
    </ClpLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const slug = params?.slug;

    const course: Course = await getCourse(String(slug));
    course.course_sections = sectionsMapping(course.course_sections);
  //  console.log(course.course_sections);
    const reviews = ["review 1", "review 2", "review 3", "review 4"];

    // Pass data to the page via props
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
