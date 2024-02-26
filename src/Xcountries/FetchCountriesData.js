import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FetchCountriesData.css";

const FetchCountriesData = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <div className="country-flags">
        {countries.map((country, index) => (
          <div className="data">
            <img
              key={index}
              src={country.flags.png}
              alt={country.name.common}
            />
            <p>{country.name.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchCountriesData;
