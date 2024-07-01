// src/components/CountryCard.js
import React from 'react';

const CountryCard = ({ country, onFavorite, isFavorite }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="100" />
      <h3>{country.name.common}</h3>
      <p>Population: {country.population.toLocaleString()}</p>
      <button onClick={() => onFavorite(country)}>
        {isFavorite ? 'Desfavoritar' : 'Favoritar'}
      </button>
    </div>
  );
};

export default CountryCard;
