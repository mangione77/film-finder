// import React, { Component } from 'react'
import axios from 'axios'
const apiKey = '6bd0d7bca441e9c415f2da64a48c05d8'

export function sendData (state) {
  return axios.get(generateUrl(state))
}

function generateUrl (state) {
  console.log(state)
  let baseUrl = 'https://api.themoviedb.org/3/discover/movie?'
  // state.age

  /* PEOPLE */
  if (state.people.length) {
    state.people.forEach((person, i) => {
      if (i > 0) {
        baseUrl += ','
      }
      baseUrl += getPersonId(person)
    })
  }

  /* AGE */
  if (state.age !== 21) {
    
  }
  /* DATE */
  if (state.date[0] !== state.date[1]) {
    baseUrl += `?primary_release_date.gte=${state.date[0]}-01-01&primary_release_date.lte=${state.date[1]}-12-31`
  } else {
    baseUrl += `?primary_release_year=${state.date[1]}`
  }
  
  /* CATEGORY */
  baseUrl += '?api_key=%%APIKEY%%'
  console.log(baseUrl)
  return baseUrl.replace('%%APIKEY%%', apiKey)
}

function getPersonId (person) {
  return 16
}
