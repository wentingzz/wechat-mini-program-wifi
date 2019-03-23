// miniprogram/pages/setting/feedback.js
Page({

  /**
   * Page initial data
   */
  data: {
    feedback: [],
    error: ""
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  formSubmit(e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value["input"])
    var input = e.detail.value["input"]
    if (input) {
      this.data.feedback.push(input)
      this.setData({
        error: "提交成功"
      })
      console.log(this.data.feedback)
    } else {
      this.setData({
        error: "提交文本不能为空"
      })
    }
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})