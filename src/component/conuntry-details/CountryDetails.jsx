import CountryData from "../Country Data/CountryData";

const CountryDetails = ({country, handleVisitedcountry, handleVisitedFlags}) => {
  return (
    <div>
      <h4>Country Details:</h4>
      <hr />
      <CountryData
       country={country}
        handleVisitedcountry={handleVisitedcountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryData>
    </div>
  );
};

export default CountryDetails;