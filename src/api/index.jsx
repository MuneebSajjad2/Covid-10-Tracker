import axios from "axios";

let url = "https://covid19.mathdro.id/api";


 export async function fetchData  (country){
     let countryUrl = url;
     if(country && country !== "Global"){
             countryUrl = `${url}/countries/${country}`
     }
     try {
         let {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(countryUrl);
         return {confirmed,recovered,deaths,lastUpdate}
         
     } catch (error) {
         console.log(error);
         return error
     }
}
export async function fetchCountryData (){
     try {
        let {data:{countries}} = await axios.get(`${url}/countries`);
        return {countries}
         
     } catch (error) {
         console.log(error);
         return error
     }
}
export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(`${url}/daily`);
  
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
      return error;
    }
}