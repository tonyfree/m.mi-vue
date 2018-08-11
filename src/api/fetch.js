import axios from 'axios'
import url from './index.js'
import mock from '../mock/index.js'

function fetch (api, data) {
  return new Promise((resolve, reject) => {
    axios.post(url[api], data).then(res => {
      resolve(res.data)
    }).catch(err => {
      // reject(err)
      console.error(err)
      resolve(mock[api])
    })
  })
}

export default fetch
