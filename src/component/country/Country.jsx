import { useState } from 'react';
import './country.css'
import CountryDetails from '../conuntry-details/countryDetails';
const Country = ({country, handleVisitedcountry, handleVisitedFlags}) => {
  // console.log(country);
  const { name, flags, population, area } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  }

  
  
  
  return (
    <div className={`country ${visited ? 'visited':'non-visited'}`}>
      <h3 style={{ color: visited ? 'purple':'red'}}>Name: {name?.common}</h3>
      <img src={flags?.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <button onClick={() => handleVisitedcountry(country)}>Mark Visited</button>

      <br />
      <button onClick={()=> handleVisitedFlags(country.flags.png)}>Add Flag</button>
      <br />
      <button onClick={handleVisited}>{visited ? 'visited': 'Going'}</button>
      {visited ? 'I have visited this country.' : 'I want to visit.'}
      <hr />
      <CountryDetails>
        country={country}
        handleVisitedcountry={handleVisitedcountry}
        handleVisitedFlags={handleVisitedFlags}
      </CountryDetails>
    </div>
    
  );
};

export default Country;


