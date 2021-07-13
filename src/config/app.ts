declare global {
    interface Window {
        SERVER_URL: any;
        COURSE_API_URL: any;
        BATCH_API_URL: any;
        APP_ID: any;
        IMAGE_HOST_URL: any;
        GA_ID: any;
    }
}
  
export default {
    appid: window.APP_ID || 'ecom_react',
    serverUrl: window.SERVER_URL || 'http://localhost:3000',
    courseApiUrl: window.COURSE_API_URL || 'http://localhost:3000',
    batchApiUrl: window.BATCH_API_URL || 'http://localhost:3000',
    imageHostUrl: window.IMAGE_HOST_URL || 'https://d25qem54r5kbml.cloudfront.net',
    googleAnalyticsId: window.GA_ID || 'UA-XXXXXXXXX',
};
  