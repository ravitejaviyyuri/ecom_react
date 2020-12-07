import { GetServerSideProps } from "next";
import { getCourse } from "../api/services/course.service";
import { getBatches } from "../api/services/batch.service";
import {getCurrencies} from "../api/services/currency.service";
import {getCountries} from "../api/services/country.service";
import { Course, CourseSections } from "../interfaces/course";
import { Currency } from '../interfaces/currency';
import { Country } from '../interfaces/country';
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
import BatchComponent from "../components/clp/batch/Batch.component";
import Breadcrumb from "../components/shared/breadcrumb/Breadcrumb.component";
import CourseTitle from "../components/clp/course_title/Title.component";
import VideoInfo from "../components/clp/video_info/VideoInfo.component";
import LearningByEdureka from "../components/clp/learning_by_edureka/LearnEdu.component";
import KnowYourCourse from "../components/clp/know_your_course/KnowYourCourse.component";

type Props = {
  data: {
    course: Course;
    batches: any;
    currencies: Currency[];
    countries: Country[];
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
      <LearningByEdureka />
      <BatchComponent batches= {data.batches}/>
      <KnowYourCourse />
      <Curriculum course_section = {data.course.course_sections.clp_curriuculum_section}/>
      <Projects course_section = {data.course.course_sections.clp_project}/>
      <Certification />
      {console.log(data.course.course_sections.clp_ice.section_details[0].subsection_content)};
      {console.log(data.course.course_sections.clp_rating_section.section_details[0].subsection_content)};
      <EdurekaAdvantage course_sections = {data.course.course_sections.clp_edureka_advantage} />
      <Reviews rating_section = {data.course.course_sections.clp_rating_section} review_section = {data.course.reviews}/>
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
    //console.log(course.course_sections);
    const batches = await getBatches(course.id);
    const currencies = await getCurrencies();
    const countries = await getCountries();
    console.log(batches);
    const reviews = ["review 1", "review 2", "review 3", "review 4"];

    return {
      props: {
        data: {
          course: course,
          batches: batches,
          currencies:currencies,
          countries:countries,
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
