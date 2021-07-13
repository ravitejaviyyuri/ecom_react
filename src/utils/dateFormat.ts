import { time } from "console";

let date_str = "2020-07-06 09:00:00"
var month_names= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export function getMonthName(date_str: string){
    let str = date_str.replace(" ", "T") + "Z";
    let date = new Date(str);
    return month_names[date.getMonth()]+ " "+date.getUTCDate();
} 

export function getTimeString(date_str: string){
    let str = date_str.replace(" ", "T") + "Z";
    let date = new Date(str);
    let hours:any  = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return  hours + ":" + minutes  + am_pm;
    
}