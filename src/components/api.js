// import React, { Component } from 'react'
import axios from 'axios'
const apiKey = '6bd0d7bca441e9c415f2da64a48c05d8'

export function sendData (state) {
  return axios.get(generateUrl(state))
}

function generateUrl (state) {
  console.log(state)
  let baseUrl = 'https://api.themoviedb.org/3/discover/movie?'

  /* PEOPLE */
  if (state.people.length) {
    baseUrl += 'with_people='
    state.people.forEach((person, i) => {
      baseUrl += (i ? ',' : '') + getPersonId(person)
    })
    baseUrl += '&'
  }

  /* AGE */
  /*
    NR: NO INFO
    G: ALL AGES
    PG: 10
    PG-13: 13
    R: 21
    NC-17: SEXO, DROGAS & ROCK

  */
  baseUrl += `certification_country=US&certification.lte=${state.age}`

  /* DATE */
  if (state.date[0] !== state.date[1]) {
    baseUrl += `&primary_release_date.gte=${state.date[0]}-01-01&primary_release_date.lte=${state.date[1]}-12-31`
  } else {
    baseUrl += `&primary_release_year=${state.date[1]}`
  }

  /* GENRE */
  if (state.genres.length) {
    baseUrl += '&with_genres='
    state.genres.forEach((genre, i) => {
      baseUrl += (i ? ',' : '') + genre
    })
  }
  /*
    "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
}

  */

  /* ORDER */
  baseUrl += `&sort_by=${state.sort}`

  /* PAGE */
  baseUrl += `&page=${state.page}`
  baseUrl += '&api_key=%%APIKEY%%'
  console.log(baseUrl)
  return baseUrl.replace('%%APIKEY%%', apiKey)
}

function getPersonId (person) {
  return 16
}
