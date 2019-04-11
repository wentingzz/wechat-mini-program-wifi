Page({
  data: {
    inputShowed: false,
    inputVal: "",
    wifilist: [],
    name: "",
    mac: "",
    max_speed: "",
    signal:"",
    encryption:"",
    red: "",
    display: false
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    db.collection('wifis').where({
      inuse: true
    }).get({
      success: res => {
        this.setData({
          wifilist: res.data
        })
        // console.log(this.data.wifilist)
      }
    })
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false,
      display: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: "",
      display: false
    });
    
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
    this.setData({
      name: "",
      mac: "",
      max_speed: "",
      encryption: "",
      signal: "",
      red: "",
      display: false
    })
    for(var i = 0; i < 3; ++i){
      if (this.data.wifilist[i].name == this.data.inputVal){
        this.setData({
          name : this.data.wifilist[i].name,
          mac: this.data.wifilist[i].mac,
          max_speed: this.data.wifilist[i].max_speed,
          encryption: this.data.wifilist[i].encryption,
          signal: this.data.wifilist[i].signal,
          red: this.data.wifilist[i].red,
          display: true
        })
        break
      }
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
});