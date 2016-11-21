
Page( {
  data: {
    screenHeight: 0,
    screenWidth: 0
  },
  onLoad: function( options ) {
    var that = this
    wx.getSystemInfo( {
      success: function( res ) {
        that.setData( {
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
        })
      }
    })
  },
  onReady: function() {
    var that = this
    toIndexPage.call(that)
  },
  onShow: function() {
  },
  onHide: function() {
  },
  onUnload: function() {
  }
});

function toIndexPage() {
  setTimeout( function() {
    wx.redirectTo( {
      url: '../index/index'
    });
  }, 1500 );
}