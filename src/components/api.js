// import React, { Component } from 'react'
import axios from 'axios'
const apiKey = '6bd0d7bca441e9c415f2da64a48c05d8'

export function sendData (state) {
  return axios.get(generateUrl(state))
}

export function generateUrl (state) {
  console.log(state)
  const url = 'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=%%APIKEY%%'
  return url.replace('%%APIKEY%%', apiKey)
}
