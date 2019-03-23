// pages/check.js
Page({

  /**
   * Page initial data
   */
  data: {

    accountNumber: '',//Wi-Fi 的SSID，即账号

    bssid: '',//Wi-Fi 的ISSID

    password: '',//Wi-Fi 的密码



  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.startWifi({
      success: function (res) {
        console.log(res.errMsg)
      },
      fail: function(res){
        console.log(res.errMsg)
      }
    })
    wx.onGetWifiList(function (res) {
      console.log("onGet")
      var a = res.wifiList;
      var showlist = that.data.showlist;
      that.setData({
        showlist: a
      })
      console.log(a);
    });
    wx.getWifiList({
      success(res) {
        console.log(res)
        console.log(wx.onGetWifiList())
      },
      fail(res) {
        console.log(res)
      }
    })
    
    wx.getWifiList()

    // wx.startWifi({
    //   success: function (res) {
    //     wx.getWifiList({
    //     })
    //     console.log(res.wifiList)
    //   },
    //   fail: function(res){
    //     console.log(res.errMsg)
    //   }
    // })
    
    console.log("check page");
  },

  connectWifi: function () {

    var that = this;

    //检测手机型号

    wx.getSystemInfo({

      success: function (res) {

        var system = '';

        if (res.platform == 'android') system = parseInt(res.system.substr(8));

        if (res.platform == 'ios') system = parseInt(res.system.substr(4));

        if (res.platform == 'android' && system < 6) {

          wx.showToast({

            title: '手机版本不支持',

          })

          return

        }

        if (res.platform == 'ios' && system < 11.2) {

          wx.showToast({

            title: '手机版本不支持',

          })

          return

        }



        //2.初始化 Wi-Fi 模块

        that.startWifi();

      }

    })

  },

  //初始化 Wi-Fi 模块

  startWifi: function () {

    var that = this

    wx.startWifi({

      success: function () {

        //请求成功连接Wifi

        that.Connected();

      },

      fail: function (res) {

        wx.showToast({

            title: '接口调用失败',

        })

      }

    })

  },

  Connected: function () {

    var that = this

    wx.connectWifi({

      SSID: that.data.accountNumber,

      BSSID: that.data.bssid,

      password: that.data.password,

      success: function (res) {

        wx.showToast({

          title: 'wifi连接成功',

        })

      },

      fail: function (res) {

        wx.showToast({

          title: 'wifi连接失败',

        })

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