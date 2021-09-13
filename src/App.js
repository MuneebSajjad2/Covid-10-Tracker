import { useEffect, useState } from 'react';
import styles from'./App.module.css';
import image from "./images/image.png";
import {fetchData,fetchDailyData} from "./api/index"; 
import Card from "./components/cards/cards"
import CountryPicker from "./components/countryPicker/countryPicker"
import Chart from "./components/chart/chart"

function App() {
  let [state, setState] = useState({data:{},country:""});
  useEffect(async()=>{
    let data = await fetchData();
      setState({data})
    },[])

  let handleCountryChange = async (country) => {
        const data = await fetchData(country)
          setState({data, country: country})
        }
     


    const {data, country} = state;
  return (
    <div className={styles.container}>
      <h2>COVID Tracker by Muneeb Sajjad</h2>
    <img src={image} alt="covid_19 logo"/>
    <Card data={data} country={country} />
    <CountryPicker handleCountryChange={handleCountryChange} />
    <Chart data={data} country={country} />
    </div>
  );
}

export default App;
