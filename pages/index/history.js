// miniprogram/pages/setting/history.js
Page({

  /**
   * Page initial data
   */
  data: {
    articleList:[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    
    const db = wx.cloud.database()
    const articles = db.collection('articles').where({
      like: true
    }).get({
      success: res => {
        this.setData({
          articleList: res.data
        })
        // console.log(this.data.articleList)
      }
    })
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
    const db = wx.cloud.database()
    db.collection('articles').where({
      like: true
    }).get({
      success: res => {
        this.setData({
          articleList: res.data
        })
        // console.log(this.data.articleList)
      }
    })
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