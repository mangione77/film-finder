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
    state.people.forEach((person, i) => {
      baseUrl += '&with_people=' + (i ? ',' : '') + getPersonId(person)
    })
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
  baseUrl += `&certification_country=US&certification.lte=${state.age}`

  /* DATE */
  if (state.date[0] !== state.date[1]) {
    baseUrl += `&primary_release_date.gte=${state.date[0]}-01-01&primary_release_date.lte=${state.date[1]}-12-31`
  } else {
    baseUrl += `&primary_release_year=${state.date[1]}`
  }

  /* GENRE */
  if (state.genres.length) {
    state.genres.forEach((genre, i) => {
      baseUrl += '&with_genres=' + (i ? ',' : '') + genre
    })
  }

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
