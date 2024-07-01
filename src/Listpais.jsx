// src/components/CountryList.js
import React from 'react';
import CountryCard from './card';

const CountryList = ({ countries, onFavorite }) => {
  return (
    <div>
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
          onFavorite={onFavorite}
          isFavorite={false}
        />
      ))}
    </div>
  );
};

export default CountryList;
