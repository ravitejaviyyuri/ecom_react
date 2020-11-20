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
