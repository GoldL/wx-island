import { ClassicModel } from '../../models/classic'

const classic = new ClassicModel()

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
    classic.getLatest(res => {
      this.setData({
        classic: res
      })
    })
  }
})