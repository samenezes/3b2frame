import React, { useState } from 'react';
import CountryList from './Listpais.jsx';
import Favorites from './favorito.jsx';
import { fetchCountries } from './api.jsx';
import './paises.css'



    // src/App.js

const paises = () => {
  const [countries, setCountries] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const loadCountries = async () => {
    try {
      const countriesData = await fetchCountries();
      setCountries(countriesData);
    } catch (error) {
      console.error("Error fetching countries: ", error);
    }
  };

  const handleFavorite = (country) => {
    if (favorites.find(fav => fav.cca3 === country.cca3)) {
      // Remove from favorites and add back to countries
      setFavorites(prevFavorites => prevFavorites.filter(fav => fav.cca3 !== country.cca3));
      setCountries(prevCountries => [...prevCountries, country].sort((a, b) => a.name.common.localeCompare(b.name.common)));
    } else {
      // Remove from countries and add to favorites
      setCountries(prevCountries => prevCountries.filter(c => c.cca3 !== country.cca3));
      setFavorites(prevFavorites => [...prevFavorites, country].sort((a, b) => a.name.common.localeCompare(b.name.common)));
    }
  };




    return(
        <>
     <div className='app-container'>
      <h1>LISTA DE PAÍSES</h1>
      <button onClick={loadCountries}>Carregar Países</button>
      <div className='lists-container'>
        <div className='list'>
            <h2>LISTA</h2>
      <CountryList countries={countries} onFavorite={handleFavorite} favorites={favorites} />
        </div>
        <div className='list'>
      <h2>FAVORITOS</h2>
      <Favorites favorites={favorites} onFavorite={handleFavorite} />
    </div>
    </div>
    </div>

  

        </>
    )
}
export default paises

  