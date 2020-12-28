
import {Country } from '../interfaces/country';

export const countryCodeMapping = (countries:(Country)[]) =>{
    const obj:any = {};
        obj['options'] = [];
      countries.forEach((country: Country) => {
        obj['options'].push({ "value":country.country_name+"#"+country.currency+"#"+country.phone_code, "label": country.currency+" - "+country.country_name});
      //console.log(Object.create({ "value":country.country_name+"#"+country.currency+"#"+country.phone_code, "label": country.country_name+"#"+country.currency}).label)
     })
     console.log("hell");
     console.log(obj);
     return obj;
}