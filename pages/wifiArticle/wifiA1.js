// miniprogram/pages/wifiArticle/wifiA1.js
Page({

  /**
   * Page initial data
   */
  data: {
    like:"",
    aid:""
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    db.collection('articles').where({
      id: "1"
    }).get({
      success: res => {
        this.setData({
          aid: res.data[0]._id,
          like: res.data[0].like
        })
        // console.log(this.data.aid)
      }
    })
  },

  addcollection: function(){
    const db = wx.cloud.database()
    db.collection('articles').doc(this.data.aid).update({
      data: {
        like: true
      }
    })
    db.collection('articles').where({
      id: "1"
    }).get({
      success: res => {
        this.setData({
          aid: res.data[0]._id,
          like: res.data[0].like
        })
        // console.log(this.data.aid)
      }
    })
  },

  removecollection: function () {
    const db = wx.cloud.database()
    db.collection('articles').doc(this.data.aid).update({
      data: {
        like: false
      }
    })
    db.collection('articles').where({
      id: "1"
    }).get({
      success: res => {
        this.setData({
          aid: res.data[0]._id,
          like: res.data[0].like
        })
        // console.log(this.data.aid)
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