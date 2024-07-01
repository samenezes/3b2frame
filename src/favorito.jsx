// src/components/Favorites.js
import React from 'react';
import CountryCard from './card';

const Favorites = ({ favorites, onFavorite }) => {
  return (
    <div>
      {favorites.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
          onFavorite={onFavorite}
          isFavorite={true}
        />
      ))}
    </div>
  );
};

export default Favorites;
