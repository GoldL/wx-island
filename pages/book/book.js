import {
  BookModel
} from '../../models/book'

const bookModel = new BookModel()

// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    searching: false,
    more: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    bookModel.getHotList().then(res => {
      this.setData({
        books: res
      })
    })
  },

  onSearching(event) {
    this.setData({
      searching: true
    })
  },
})