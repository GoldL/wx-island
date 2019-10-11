import {
  ClassicModel
} from '../../models/classic'
import {
  LikeModel
} from '../../models/like'

const classicModel = new ClassicModel()
const likeModel = new LikeModel()

Page({

  /**
   * 页面的初始数据
   */
  properties: {
    cid: Number,
    type: Number,
    needNavi: {
      type: Boolean,
      value: true
    }
  },
  data: {
    classic: null,
    latest: true,
    first: false,
    likeCount: 0,
    likeStatus: false
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

  onLike(event) {
    const {
      behavior
    } = event.detail
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type)
  },
  onNext(event) {
    this._updateClassic('next')
  },
  onPrevious(event) {
    this._updateClassic('previous')
  },
  _updateClassic(nextOrPrevious) {
    const index = this.data.classic.index
    const classic = classicModel.getClassic(index, nextOrPrevious, res => {
      this._getLikeStatus(res.id, res.type)
      this.setData({
        classic: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    })
  },
  _getLikeStatus(artId, category) {
    const status = likeModel.getClassicLikeStatus(artId, category, res => {
      this.setData({
        likeCount: res.favNums,
        likeStatus: res.likeStatus
      })
    })
  }
})