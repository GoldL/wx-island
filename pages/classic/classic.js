import {
  classicLatestUrl
} from '../../api/index.js'
import {
  HTTP
} from '../../utils/http.js'
const http = new HTTP()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    http.request({
      url: classicLatestUrl,
      success: res => {
        console.log(res)
      }
    })
  }
})