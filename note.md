##### 1. [小程序的目录结构](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/) 
##### 2. [`flex`](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
##### 3. [小程序自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)
```
// 在clssic.json引用 
{
  "usingComponents":{
    "v-like": "/components/like/like"
  } 
}
// 在clsssic.wxml使用
<v-like></v-like>
```
##### 4. [小程序自定义事件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html)
```
// like.js
let behavior = this.properties.like ? 'like' : 'cancel'
this.triggerEvent('like', {
    behavior
}, {})
// classic.wxml
<v-like bind:like="onLike" like="{{classic.likeStatus}}" count="{{classic.favNums}}" />
```
##### 5.[数据监听](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/observer.html)
```
// observer
properties: {
    index: {
      type: String,
      observer(newVal, oldVal, changedPath) {
        let val = newVal < 10 ? '0' + newVal : newVal
        this.setData({
          _index: val
        })
      }
    },
  },
```
##### 6.[组件的生命周期attached](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html)
```
attached() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    
    this.setData({
      year,
      month: this.data.months[month]
    })
},
```
