import React, { useState, useEffect, useContext, useReducer } from "react";
import UPDATE_USER_STATE from "../store/user/action";
import { AppContext, AppReducer } from "../store";
import { createCookie, accessCookie, checkCookie } from "../utils/cookie";
import { cookie_const } from "../utils/constants";
import { verifyCookie } from "../api/services/verifycookie";
import { GetServerSideProps,GetStaticProps,GetStaticPaths } from "next";
import { searchTabs } from "../api/services/search.service";
import { getCourse } from "../api/services/course.service";
import { getBatches } from "../api/services/batch.service";
import { getCurrencies } from "../api/services/currency.service";
import { getCountries } from "../api/services/country.service";
import { Course, CourseSections } from "../interfaces/course";
import { Currency } from "../interfaces/currency";
import { Country } from "../interfaces/country";
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
import { sectionsMapping } from "../utils/section_mapping";

import { searchMapping } from "../utils/search_mappings";
import {allcategoriesMapping} from "../utils/allcategories_mapping";
import {countryCodeMapping} from '../utils/countrycode_mapping';
import {server} from "../config/index";
import {formatCLP360DegSection, formatCLPGetAGlimpse, formatCLPCourseOverview, formatCLPCurriculum, formatCLPEdurekaAdvantage,formatCLPRatings,formatCLPIce, formatCLPFaq} from "../utils/format_sections";

//import {AuthProvider, } from '../components/shared/context/Auth.context';

type Props = {
  data: {
    course: Course;
    batches: any;
    currencies: Currency[];
    countries: Country[];
    reviews: String[];
    searchtabs: any;
    countryCodeOptions:any;
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

  const initialState = useContext(AppContext);
  const [state, dispatch] = useReducer(AppReducer, initialState.state);

  useEffect(() => {
    if (checkCookie(cookie_const.COOKIE_BRAIN4CE)) {
      const data = verifyCookie(accessCookie(cookie_const.COOKIE_BRAIN4CE));
      data.then((res: any) => {
        const loginStatus = { islogin: true };
        if (res.status_code == 200) {
          console.log(res);
          dispatch({
            type: UPDATE_USER_STATE.type,
            action: UPDATE_USER_STATE.action.UPDATE_LOGIN,
            data: { userData: res.data, loginStatus: loginStatus },
          });
        }
      });
    }
  }, []);
 

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <ClpLayout countries={data.countries} countryopt = {data.countryCodeOptions.countryopt} options={data.countryCodeOptions.options} searchtabs={data.searchtabs} categories={data.course.allcategories.categories}>
      
        {console.log(data.course.course_sections)}
        <Breadcrumb />
        <CourseTitle />
        <VideoInfo />
        <LearningByEdureka
          edureka360degSection={data.course.course_sections.clp_360_deg_section}
        />
        <KnowYourCourse
          knowYourCourse={
            data.course.course_sections.clp_get_to_know_your_course
          }
          getaGlimpse={data.course.course_sections.clp_get_a_glimpse}
          courseOverview={data.course.course_sections.clp_course_overview}
        /> 
        <BatchComponent
          batches={data.batches}
          price={data.course.course_price}
          currencies={data.currencies}
          countries={data.countries}
        />
        <Curriculum
          curicullumData={data.course.course_sections.clp_curriuculum_section}
        />
        <Projects course_section={data.course.course_sections.clp_project} /> 
        <Certification />
        <EdurekaAdvantage
          course_sections={data.course.course_sections.clp_edureka_advantage}
        />
        <Reviews
          rating_section={data.course.course_sections.clp_rating_section}
          review_section={data.course.reviews}
        />
        <FAQ course_sections={data.course.course_sections.clp_faq} />
        <ICE course_sections={data.course.course_sections.clp_ice} />
        <OtherCityLink />
      </ClpLayout>
     </AppContext.Provider>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   try {
//     const slug = params?.slug;
//     // if(checkCookie(cookie_const.COOKIE_BRAIN4CE)){
//     //      const data = await verifyCookie();
//     //      console.log(data);
//     // }

//     const course: Course = await getCourse(String(slug));
//     //console.log(course.course_sections);
//     course.course_sections = sectionsMapping(course.course_sections);
//     //console.log(course.course_sections);
//     const batches = await getBatches(course.id);
//     const currencies = await getCurrencies();
//     const countries = await getCountries();
//     const searchData = await searchTabs();

//     const tabdata = searchMapping(searchData);

//     return {
//       props: {
//         data: {
//           course: course,
//           batches: batches,
//           currencies: currencies,
//           countries: countries,
//           searchtabs: tabdata,
//         },
//       },
//     };
//   } catch (err) {
//     // Pass error to the page via props
//     return { props: { errors: err.message } };
//   }
// };

//ISR code
export const getStaticProps: GetStaticProps = async ({params}) => {
  try {
    const slug =params?.slug;

    const course: Course = await getCourse(String(slug))
    course.course_sections = sectionsMapping(course.course_sections);
    course.allcategories = allcategoriesMapping(course.allcategories);
    const countries = await getCountries();
    const countryCodeOptions =  countryCodeMapping(countries);
    const currencies = await getCurrencies();
    const batches = await getBatches(course.id);
    const searchData = await searchTabs();
    const tabdata = searchMapping(searchData);
    course.course_sections.clp_360_deg_section = formatCLP360DegSection(course.course_sections.clp_360_deg_section.section_details);
    course.course_sections.clp_get_a_glimpse = formatCLPGetAGlimpse(course.course_sections.clp_get_a_glimpse.section_details);
    course.course_sections.clp_course_overview = formatCLPCourseOverview(course.course_sections.clp_course_overview.section_details);
    course.course_sections.clp_curriuculum_section = formatCLPCurriculum(course.course_sections.clp_curriuculum_section.section_details);
    course.course_sections.clp_edureka_advantage = formatCLPEdurekaAdvantage(course.course_sections.clp_edureka_advantage);
    course.course_sections.clp_rating_section = formatCLPRatings(course.course_sections.clp_rating_section);
    course.course_sections.clp_ice = formatCLPIce(course.course_sections.clp_ice);
    course.course_sections.clp_faq = formatCLPFaq(course.course_sections.clp_faq);

    // Pass data to the page via props
    return {
      props: {
        data: {
          course: course,
          batches: batches,
          currencies:currencies,
          countries: countries,
          searchtabs: tabdata,
          countryCodeOptions:countryCodeOptions,
        }
      },
      revalidate: 100000
    }
  } catch (err) {
    // Pass error to the page via props
    return { props: { errors: err.message } }
  }
}

export const getStaticPaths: GetStaticPaths<{slug:string}> = async () => {
  
  


    // Pass data to the page via props
    return {
     paths:[{params:{slug:"devops-certification-training"}}
            ],
     fallback:false,
    };
  
}


export default CoursePage;
