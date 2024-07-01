// src/services/api.js

export const fetchCountries = async () => {
    const response = await fetch('./paises.json');
    const data = await response.json();
    return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
  };
  