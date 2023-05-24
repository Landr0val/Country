import React from 'react';
import '../styles/Country.css';
import Copy from './Copy';

const Country = ({ name, flag, continent, lang, currency, capital, population }) => {
  return (
    <div className='main-container'>
      <div className='info-container'>
        <p id='title'>{name}</p>
        <img className='flag' src={flag} alt='' />
        <p><b>Capital:</b> {capital} <Copy element={capital} /></p>
        <p><b>Main languaje:</b> {lang} <Copy element={lang} /> </p>
        <p><b>Continent:</b> {continent} <Copy element={continent} /></p>
        <p><b>Currency:</b> {currency} <Copy element={currency} /></p>
        <p><b>Population:</b>{' '}{new Intl.NumberFormat('ja-JP', {maximumSignificantDigits: 3}).format(population)} <Copy element={new Intl.NumberFormat('ja-JP', {maximumSignificantDigits: 3}).format(population)} /></p>
      </div>
    </div>
  );
};

export default Country;
