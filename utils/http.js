import {
  config
} from '../config.js'
import {
  errorTips
} from './errorTips.js'

class HTTP {
  request(params) {
    if (params.method) {
      params.method = 'GET'
    }
    wx.request({
      url: `${config.apiBaseUrl}${params.url}?appKey=iGolden`, //开发者服务器接口地址",
      data: params.data, //请求的参数",
      method: params.method,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: res => {
        let code = res.statusCode.toString()
        if (code.startsWith('2')) {
          params.success(res.data)
        } else {
          const errorCode = res.data.errorCode
          this._showErr(errorCode)
        }
      },
      fail: err => {
        console.log(err)
        this._showErr()
      }
    })
  }

  _showErr(errorCode = '1') {
    wx.showToast({
      title: errorTips[errorCode], //提示的内容,
      icon: 'nonw', //图标,
      duration: 2000, //延迟时间,
      mask: true, //显示透明蒙层，防止触摸穿透
    })
  }
}

export {
  HTTP
}