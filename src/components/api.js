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
  /* TIME */
  /* CATEGORY */
  baseUrl += 'api_key=%%APIKEY%%'
  console.log(baseUrl)
  return baseUrl.replace('%%APIKEY%%', apiKey)
}

function getPersonId (person) {
  return 16
}
