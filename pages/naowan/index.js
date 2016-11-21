var apibaidu = require( '../../utils/apibaidu' )
var app = getApp()
Page( {
  data: {
    listnaowan: []
  },
  bindReload: function( e ) {
    console.log( 'Reload' )
    this.requestData()
  },
  onPullDownRefresh: function() {
    console.log( "pulldown refresh..." )
    wx.stopPullDownRefresh()
    this.requestData()
  },
  onLoad: function() {
    console.log( 'onLoad' )
  },
  onReady: function() {
    console.log( 'onReady' )
    this.requestData()
  },
  requestData: function() {
    console.log( 'loading data' )
    var that = this
    wx.request( {
      url: apibaidu.NAOWAN_URL,
      header: { 'apikey': apibaidu.API_KEY },
      success: function( res ) {
        console.log( res.data )
        if( res.data.code == 200 ) {
          that.setData( {
            listnaowan: res.data.newslist
          })
        } else {
          console.log( '获取失败' );
        }
      }
    })
  }
})
