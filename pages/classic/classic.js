import { ClassicModel } from '../../models/classic'
import { LikeModel } from '../../models/like'

const classicModel = new ClassicModel()
const likeModel = new LikeModel()

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
    classicModel.getLatest(res => {
      this.setData({
        classic: res
      })
    })
  },

  onLike (event) {
    const { behavior } = event.detail
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type)
  }
})