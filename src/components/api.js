// import React, { Component } from 'react'
import axios from 'axios'
const apiKey = '6bd0d7bca441e9c415f2da64a48c05d8'
const discoverUrl = 'https://api.themoviedb.org/3/discover/movie?'
const peopleUrl = 'https://api.themoviedb.org/3/search/person?'

export function sendData (url) {
  return axios.get(url)
}

export function generateUrl (state) {
  console.log('recieved by api', state)
  let url = discoverUrl

  /* PEOPLE */
  // console.log(state.people)
  let count = 0
  url += 'with_cast='
  state.people.forEach((item, i) => {
    if (item.id !== undefined) {
      url += ((i - count) ? ',' : '') + item.id
    } else {
      count++
    }
  })
  url += '&'

  /* AGE */
  // console.log(state.age)
  url += `certification_country=US&certification=${state.age}`

  /* DATE */
  if (state.date[0] !== state.date[1]) {
    url += `&primary_release_date.gte=${state.date[0]}-01-01&primary_release_date.lte=${state.date[1]}-12-31`
  } else {
    url += `&primary_release_year=${state.date[1]}`
  }

  /* GENRE */
  url += '&with_genres=' + state.genres.toString()
  // state.genres.forEach((genre, i) => {
  //   url += (i ? ',' : '') + genre
  // })

  /* ORDER */
  url += `&sort_by=${state.sort}`

  /* PAGE */
  url += `&page=${state.page}`

  /* API KEY */
  url += addApiKey()

  console.log(url)
  return url
}

export function getPersonId (person) {
  person = person.trim().replace(' ', '%20')
  var urlPersonId = peopleUrl + `&query=${person}` + addApiKey()
  return axios.get(urlPersonId)
}

function addApiKey () {
  return `&api_key=${apiKey}`
}

/*

const aId = state.people.map(person => getPersonId(person))

Promise.all(aId).then(data => {
      data.forEach((data, i) => {
        let personId
        if (data.data.results.length) {
          personId = data.data.results[0].id
          console.log(data.data.results[0].id)
        }
      })
    })

*/
