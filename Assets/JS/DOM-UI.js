'use strict';

// 1. Mapeia primeiro os contêineres e elementos principais com ID
const containers = {
  search: document.getElementById('search-container'),
  location: document.getElementById('location-header'),
  mainTemp: document.getElementById('main-temp-container'),
  daily: document.getElementById('daily-summary-container'),
  metrics: document.getElementById('detailed-metrics-container')
};

// 2. Mapeia os elementos internos usando a referência dos contêineres pais
export const DOM = {
  // Busca
  search: {
    input: containers.search.querySelector('#input-city-search'),
    button: containers.search.querySelector('#btn-city-search')
  },

  // Informações Principais
  current: {
    city: containers.location.querySelector('#text-city-name'),
    date: containers.location.querySelector('#text-current-date'),
    temp: containers.mainTemp.querySelector('#text-main-temp'),
    icon: containers.mainTemp.querySelector('#icon-weather-condition'),
    condition: containers.mainTemp.querySelector('#text-weather-condition')
  },

  // Resumo Diário
  daily: {
    maxTemp: containers.daily.querySelector('#value-max-temp'),
    uvIndex: containers.daily.querySelector('#value-uv-index'),
    minTemp: containers.daily.querySelector('#value-min-temp')
  },

  // Métricas Detalhadas
  metrics: {
    humidity: containers.metrics.querySelector('#value-humidity'),
    wind: containers.metrics.querySelector('#value-wind'),
    rainfall: containers.metrics.querySelector('#value-rainfall'),
    rainChance: containers.metrics.querySelector('#value-rain-chance')
  }
};
