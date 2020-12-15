import React, { useState, useEffect,useContext,useReducer } from "react";
import { AppContext, AppReducer } from '../store';
import { createCookie,accessCookie,checkCookie} from "../utils/cookie";
import {cookie_const} from "../utils/constants";
import {verifyCookie} from "../api/services/verifycookie";
import { GetServerSideProps } from "next";
import {searchTabs} from '../api/services/search.service';
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
import BatchComponent from "../components/clp/batch/Batch.component";
import Breadcrumb from "../components/shared/breadcrumb/Breadcrumb.component";
import CourseTitle from "../components/clp/course_title/Title.component";
import VideoInfo from "../components/clp/video_info/VideoInfo.component";
import LearningByEdureka from "../components/clp/learning_by_edureka/LearnEdu.component";
import KnowYourCourse from "../components/clp/know_your_course/KnowYourCourse.component";
import {sectionsMapping} from "../utils/section_mapping";
import ScrollSpy from "../components/clp/ScrollSpy/ScrollSpy.component";
import {searchMapping} from '../utils/search_mappings';
//import {AuthProvider, } from '../components/shared/context/Auth.context';

type Props = {
  data: {
    course: Course;
    batches: any;
    currencies: Currency[];
    countries: Country[];
    reviews: String[];
    searchtabs:any
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


  const [scrollPos, setScrollPos] = useState<number>(0);
  const [fixedScrollSpy, setFixedScrollSpy] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY !== 0) {
      setScrollPos(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    //console.log(scrollPos);
    if (process.browser) {
      if (window.innerWidth < 788) {
        if (scrollPos > 1000) {
          setFixedScrollSpy(true);
        } else {
          setFixedScrollSpy(false);
        }
      } else {
        if (scrollPos > 622) { 
          setFixedScrollSpy(true);
        } else {
          setFixedScrollSpy(false);
        }
      }
    }
    if (checkCookie(cookie_const.COOKIE_BRAIN4CE)){
      //console.log("check")
      const data =  verifyCookie();
      data.then((res: any) => {
         //console.log(res);
      })
    }

  }, [scrollPos]);


     
  return (
    <AppContext.Provider value={{ state, dispatch }}>
    <ClpLayout countries={data.countries} searchtabs={data.searchtabs}>
      {console.log(data.searchtabs)}
      <Breadcrumb />
      <CourseTitle />
      <VideoInfo />
      {fixedScrollSpy ? <ScrollSpy /> : null}
      <LearningByEdureka course_section = {data.course.course_sections.clp_360_deg_section} />
      <KnowYourCourse knowYourCourse= {data.course.course_sections.clp_get_to_know_your_course} getaGlimpse = {data.course.course_sections.clp_get_a_glimpse} courseOverview = {data.course.course_sections.clp_course_overview}/>
      <Curriculum  course_section = {data.course.course_sections.clp_curriuculum_section}/>
      <BatchComponent batches= {data.batches} price={data.course.course_price} currencies={data.currencies} countries={data.countries}/>
      <Curriculum course_section = {data.course.course_sections.clp_curriuculum_section}/>
      <Projects course_section = {data.course.course_sections.clp_project}/>
      <Certification />
      <EdurekaAdvantage course_sections = {data.course.course_sections.clp_edureka_advantage} />
      <Reviews rating_section = {data.course.course_sections.clp_rating_section} review_section = {data.course.reviews}/>
      <FAQ  course_sections = {data.course.course_sections.clp_faq}/>
      <ICE  course_sections = {data.course.course_sections.clp_ice}/>
      <OtherCityLink />
    </ClpLayout>
    </AppContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const slug = params?.slug;
    // if(checkCookie(cookie_const.COOKIE_BRAIN4CE)){
    //      const data = await verifyCookie();
    //      console.log(data);
    // }


    const course: Course = await getCourse(String(slug));
    //console.log(course.course_sections);
    course.course_sections = sectionsMapping(course.course_sections);
    //console.log(course.course_sections);
    const batches = await getBatches(course.id);
    const currencies = await getCurrencies();
    const countries = await getCountries();
    const searchData = await searchTabs();
    
   const tabdata = searchMapping(searchData);
     
    return {
      props: {
        data: {
          course: course,
          batches: batches,
          currencies:currencies,
          countries:countries,
          searchtabs:tabdata
        },
      },
    };
  } catch (err) {
    // Pass error to the page via props
    return { props: { errors: err.message } };
  }
};

export default CoursePage;
