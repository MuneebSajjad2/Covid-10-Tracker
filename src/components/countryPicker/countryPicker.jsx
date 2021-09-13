import { NativeSelect, StylesProvider } from "@material-ui/core";
import Styles from "../countryPicker/countryPicker.module.css"
import {fetchCountryData} from "../../api/index"; 
import { useState,useEffect } from "react";

export default function CountryPicker({handleCountryChange}){
    let [countries, setCountries] = useState([])
    useEffect(async()=>{
        let data = await fetchCountryData();
        setCountries(data)
        },[])
        let countryName = countries.countries;
        if(!countryName){
            return ""
        }
    return <div className={Styles.container}>
        <NativeSelect onChange={(evt)=>{handleCountryChange(evt.target.value)}}>
       <option>Global</option>
       {countries.countries.map((country, i)=>{
            return <option key={i}>{country.name}</option>
       })}
        </NativeSelect>
    </div>
}