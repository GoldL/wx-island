import {
  HTTP
} from '../utils/http.js'
import {
  classicLatestUrl
} from '../api/index.js'

class ClassicModel extends HTTP {
  getLatest(sCallback) {
    this.request({
      url: classicLatestUrl,
      success: res => {
        sCallback(res)
      }
    })
  }
}

export {
  ClassicModel
}