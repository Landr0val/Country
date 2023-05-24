import React from 'react';
import { useState, useEffect } from 'react';
import Country from './Country';
import '../styles/Search.css';

const Search = () => {
  // API

  const [name, setName] = useState([]);
  const [flag, setFlag] = useState([]);
  const [lang, setLang] = useState([]);
  const [capital, setCapital] = useState([]);
  const [continent, setContinent] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [population, setPopulation] = useState([]);

  const callAPI = (country) => {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setName(data[0].name),
          setFlag(data[0].flags.svg),
          setLang(data[0].languages[Object.keys(data[0].languages)[0]]),
          setContinent(data[0].continents),
          setCapital(data[0].capital[0]),
          setPopulation(data[0].population),
          setCurrency(data[0].currencies[Object.keys(data[0].currencies)]);
      });
  };

  // API END

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      callAPI(event.target.value);
    }
  };

  return (
    <div className='app-container'>
      <div className='inputBox'>
        <input type='text' id='info' name='info' onKeyDown={handleKeyDown} />
        <span>Search</span>
        {name.common != undefined && 
        <Country
        name={name.common}
        flag={flag}
        lang={lang}
        continent={continent}
        currency={currency.name}
        capital={capital}
        population={population}
      />}
      </div>
    </div>
  );
};

export default Search;
