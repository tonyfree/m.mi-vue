import axios from 'axios'
import url from './index.js'

function fetch (api, data) {
  return new Promise((resolve, reject) => {
    axios.post(url[api], data).then(res => {
      // 各种业务处理
      resolve(res.data)
    }).catch(err => {
      if (process.env.NODE_ENV === 'production') {
        reject(err)
      } else {
        let mock = require('../mock/index.js')
        resolve(mock[api])
      }
    })
  })
}

export default fetch
