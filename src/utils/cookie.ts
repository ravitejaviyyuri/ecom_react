
var  dom = ".dev-edureka.co";
export function createCookie(cookieName:any,cookieValue:any ,daysToExpire = 1)
{

  
  var date = new Date();
  console.log(dom);
  console.log("create cookie calle");
  date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
  document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toUTCString()+";path=/;"+ "domain="+ dom.toString();
}

export function accessCookie(cookieName:any)
{
  var name = cookieName + "=";
  var allCookieArray = document.cookie.split(';');
  for(var i=0; i<allCookieArray.length; i++)
  {
    var temp = allCookieArray[i].trim();
    if (temp.indexOf(name)==0)
    return temp.substring(name.length,temp.length);
     }
    return "";
}
export function checkCookie(cookieName:any)
{
  var user = accessCookie(cookieName);
  if (user!="")
    return true;
  else
  {
    return false;
    // if (user!="" && user!=null)
    // {
    //   createCookie(cookieName, user);
    // }
  }
}
export function deleteCookie(cookieName:any, daysToExpire = 1)
{
  let cookieValue = accessCookie(cookieName);
  var date = new Date();
  date.setTime(date.getTime()+(daysToExpire*24*60*60*1000))-2;
  document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toUTCString()+";path=/;"+ "domain="+ dom.toString();
}