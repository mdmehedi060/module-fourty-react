import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/Country";
import './Countries/countries.css'
const Countries = () => {
  const [countries, setCountries] = useState([])
  const [visitedCountries, setvisitedCountries] = useState([]);
const [visitedFlags,setVisitedFlags]=useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
    .then(data=>setCountries(data))
  }, [])
  const handleVisitedcountry = country => {
    console.log('add this to your visited country');
    const newVisitedCountries = [...visitedCountries, country];
    setvisitedCountries(newVisitedCountries);
  }

  const handleVisitedFlags = flag => {
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag);
}
  // remove for a item in a state
  // use filter to select all the elements expets one you want to remove 

  return (
    <div >
      <h3>Countries: {countries.length}</h3>
     {/* visited countries */}
      <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
          {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>
      {/* display flag */}
      <div className="flag-container">
        {
          visitedFlags.map((flag, idx) =><img key={idx} src={flag}></img>)
        }
      </div>
      
      {/* display countries */}
      <div className="countries">
          {
          countries.map(country => <Country
            key={country.cca3}
            handleVisitedcountry={handleVisitedcountry}
            handleVisitedFlags={handleVisitedFlags}
            country={country}></Country>)
      }
    </div>
    </div>
  );
};

export default Countries;