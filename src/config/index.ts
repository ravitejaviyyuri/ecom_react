export interface URLS {
    BATCH_API_URL : string,
    UTILITIES_API_URL: string,
    COURSE_API_URL:string,
    USERS_API_URL: string,
    ECOM_API_URL:string,
    AUTH_API_URL:string,
}
console.log("endvvvvvv");
console.log(process.env.NODE_ENV);
const development_urls: URLS = {
    BATCH_API_URL : "http://batches.dev-edureka.co",
    UTILITIES_API_URL: "http://utilities.dev-edureka.co",
    COURSE_API_URL: "http://new-course.dev-edureka.co",
    USERS_API_URL: "http://user.dev-edureka.co",
    ECOM_API_URL:"https://ecom.dev-edureka.co",
    AUTH_API_URL:"http://api-auth.dev-edureka.co",
}

const uat_urls:URLS = {
    
    BATCH_API_URL : "https://uat-batches.edureka.in",
    UTILITIES_API_URL: "https://uat-utilities.edureka.in",
    COURSE_API_URL: "https://uat-courses.edureka.in",
    USERS_API_URL: "http://user.dev-edureka.co/",
    ECOM_API_URL:"https://uatcom.edureka.in",
    AUTH_API_URL:"http://api-auth.dev-edureka.co",
}

const production: URLS = {

    BATCH_API_URL : "https://uat-batches.edureka.in",
    UTILITIES_API_URL: "https://uat-utilities.edureka.in",
    COURSE_API_URL: "https://uat-courses.edureka.in",
    USERS_API_URL: "http://user.dev-edureka.co",
    ECOM_API_URL:"https://uatcom.edureka.in",
    AUTH_API_URL:"http://api-auth.dev-edureka.co",
}

let env_urls: any;
if(process.env.NODE_ENV == "production"){
    env_urls = development_urls;
}else{
    env_urls = uat_urls;
}
env_urls = uat_urls; //test remove this line later on

export const server:any = env_urls;