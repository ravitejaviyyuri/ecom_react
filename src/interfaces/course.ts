export interface Course {
    id: number;
    slug: string;
    display_title: string;
    analytics_title: string;
    imagename: string;
    image_url: string;
    description_text: string;
    description: string;
    is_selfpaced: string;
    is_master: number;
    rating: number;
    isLive: string;
    learners_count: number;
    skills: string;
    courses_master_no: number;
    courses_master_skills: number;
    categories?: (Categories)[] | null;
    course_type: string;
    course_group: number;
    whythiscourse_title: string;
    upload_curriculum: string;
    live_date: string;
    official_text_visible: string;
    official_partner_text: string;
    official_partner_image?: null;
    certificate_title: string;
    meta: Meta;
    course_tag: string;
    video: Video;
    master_courses?: (MasterCourses)[] | null;
    highlights?: (Highlights)[] | null;
    helpline?: (Helpline)[] | null;
    reviews: Reviews;
    course_sections: any;
    section_types: SectionTypes;
    related_courses?: (RelatedCoursesOrTrendingCourses)[] | null;
    trending_courses?: (RelatedCoursesOrTrendingCourses)[] | null;
    related_live_courses_for_selfpaced?: (null)[] | null;
    course_price: CoursePrice[]
    seo?: (SeoEntity)[] | null;

  }
  export interface Categories {
    id: string;
    name: string;
    slug: string;
    tag: string;
    img: string;
    icon_name: string;
  }
  export interface Meta {
    course_type: string;
    course_type_id: string;
    is_corp: number;
  }
  export interface Video {
    url: string;
    length: string;
    thumbnail: string;
  }
  export interface MasterCourses {
    image_path: string;
    description: string;
    display_title: string;
    slug: string;
    rating: string;
    learners_count: string;
    course_group: string;
    card_default_icon: string;
  }
  export interface Highlights {
    id: string;
    text: string;
    order: string;
  }
  export interface Helpline {
    name: string;
    contact_india: string;
    contact_usa: string;
    contact_email: string;
  }
  export interface Reviews {
    tags?: (null)[] | null;
    video_reviews?: (VideoReviews)[] | null;
    corp_reviews?: (null)[] | null;
    reviews?: (Review)[] | null;
  }
  export interface VideoReviews {
    id: string;
    course_group: number;
    city_id: string;
    review_desc: string;
    review_rating: string;
    picture: string;
    reviewer_profession: string;
    reviewer_linkedin_profile: string;
    reviewer_name: string;
    filename: string;
    video_thumbnail: string;
    video_link_url: string;
    is_wistia: number;
  }
  export interface Review {
    id: string;
    course_group: number;
    city_id: string;
    review_desc: string;
    review_rating: string;
    picture: string;
    reviewer_profession: string;
    reviewer_linkedin_profile: string;
    reviewer_name: string;
  }
  export interface CourseSections {
    id: number;
    section_title: string;
    section_group: string;
    section_type: string;
    section_slug: string;
    expandable: number;
    icon?: string | null;
    section_details?: SectionDetails[] | null;
    json_content?: JsonContent | null;
  }
  export interface SectionDetails {
    id: string;
    section_id: string;
    subsection_title: string;
    subsection_content: string;
    subsection_content_text: string;
    subtitle_visible: string;
    expanded: string;
    icon?: null;
    mediaInfo:  | boolean;
  }
  
 
  export interface Assets {
    title: string;
    description: string;
    channelId: string;
    channelTitle: string;
    categoryId: string;
    tags?: (string)[] | null;
    publishedAt: string;
    statistics: Statistics;
    thumbnails: Thumbnails;
  }
  export interface Statistics {
    commentCount: string;
    dislikeCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
  }
  export interface Thumbnails {
    default: DefaultOrMediumOrHighOrStandardOrMaxres;
    medium: DefaultOrMediumOrHighOrStandardOrMaxres;
    high: DefaultOrMediumOrHighOrStandardOrMaxres;
    standard: DefaultOrMediumOrHighOrStandardOrMaxres;
    maxres: DefaultOrMediumOrHighOrStandardOrMaxres;
  }
  export interface DefaultOrMediumOrHighOrStandardOrMaxres {
    url: string;
    height: number;
    width: number;
  }
  export interface JsonContent {
    about_section?: null;
  }
  export interface SectionTypes {
    pgp_clp_banner: string;
    Features: string;
    course_preview_image: string;
    Description: string;
    FAQ: string;
    Projects: string;
    class_recording: string;
    Certification: string;
    sneak_preview_video: string;
    bread_crum: string;
    video_info: string;
    batches: string;
    Curriculum: string;
    useproof: string;
  }
  export interface RelatedCoursesOrTrendingCourses {
    analytics_title: string;
    course_group: string;
    id: string;
    slug: string;
    learners_count: string;
    display_title: string;
    description: string;
    rating: string;
    image_path: string;
    is_selfpaced: string;
    card_default_icon: string;
    card_course_name?: string | null;
    gradient_color?: string | null;
    image_cdn_path: string;
    batch_type: string;
  }

  export interface CoursePrice{
        currency_id: string,
        value: string
   }
  
  export interface SeoEntity {
    id: string;
    controller: string;
    action: string;
    slug: string;
    title: string;
    keyword: string;
    description: string;
    footer_aboutus: string;
    type: string;
    image: string;
    created: string;
    noindex: string;
    nofollow: string;
    is_sitemap: string;
    frequency?: null;
    priority?: null;
    course_group?: null;
    lastmod?: null;
    course_key?: null;
    analytics_title?: null;
  }
export interface related_courses {
  related_courses:related_course[] | null
}
  export interface related_course{
    analytics_title: string;
    batch_type: string;
    card_course_name: null
    card_default_icon: string;
    course_group: string;
    description: string;
    display_title: string;
    gradient_color: null;
    id: string;
    image_cdn_path: string;
    image_path: string;
    is_selfpaced: string;
    learners_count: string;
    rating: string;
    slug: string;

  } 
