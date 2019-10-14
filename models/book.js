import {
  HTTP
}
from '../utils/http-p.js'
import {
  bookHotList
}
from '../api/index.js'

class BookModel extends HTTP {
  getHotList() {
    return this.request({
      url: bookHotList
    })
  }
}

export {
  BookModel
}