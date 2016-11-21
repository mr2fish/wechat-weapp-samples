var app = getApp()
Page( {
  data: {
    swipers: [
      { image: 'http://img05.tooopen.com/images/20151016/tooopen_sy_145433412174.jpg', title: '中国 万里长城' },
      { image: 'http://img02.tooopen.com/images/20150828/tooopen_sy_140423486639.jpg', title: '唯美的故宫 角楼景色' },
      { image: 'http://img05.tooopen.com/images/20140510/sy_60782719757.jpg', title: '西湖 美景' }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    activemenu:'',
    navItems: [
      { name: '热文', id: 'wxhot', icon: '/resources/demo/nav/wxhot.png' },
      { name: '脑弯', id: 'naowan', icon: '/resources/demo/nav/naowan.png' },
      { name: '糯米', id: 'nuomi', icon: '/resources/demo/nav/nuomi.png' },
      { name: 'PM2.5', id: 'airquality', icon: '/resources/demo/nav/airquality.png' },
      { name: '天气', id: 'weather', icon: '/resources/demo/nav/weather.png' },
      { name: '倒计时', id: 'cutcount', icon: '/resources/demo/nav/cutcount.png' },
      { name: '计时器', id: 'timer', icon: '/resources/demo/nav/cutcount.png' },
      { name: '定位', id: 'location', icon: '/resources/demo/nav/location.png' },
      { name: '我的', id: '0', icon: '/resources/demo/nav/0.png' }
    ],
    loading: false,

    slideMaskDisplay: 'none',
    slideMenus: [
      {
        name: '修改密码'
      }, {
        name: '清空缓存'
      }, {
        name: '未读消息'
      }
    ],
    slideWindow: {},
    slideAnimation: {},
    userInfo: {},
  },
  onLoad: function() {
    console.log( 'onLoad' )
    this.slideInit()
  },
  onReady: function() {
    console.log( 'onReady' )
    var that = this
    that.setData( {
      venuesItems: app.getVenues()
    })
  },

  slideInit: function() {
    console.log( 'slideInit' )
    var that = this
    wx.getSystemInfo( {
      success: function( res ) {
        console.log( res )
        that.setData( {
          slideWindow: {
            screenHeight: res.windowHeight,
            screenWidth: res.windowWidth,
            slideHeight: res.windowHeight,
            slideRight: res.windowWidth,
            slideWidth: res.windowWidth * 0.7
          }
        })
      }
    })
    app.getUserInfo( function( data ) {
      that.setData( { userInfo: data })
    })
  },

  bindSlideSetting: function( e ) {
    wx.navigateTo( { url: '../setting/index' })
  },
  slideOpen: function() {
    slideUp.call( this )
  },
  slideClose: function() {
    slideDown.call( this )
  },

  bindMenu: function(e) {
    if(e.currentTarget.dataset.menu != null )
      this.setData( { activemenu: e.currentTarget.dataset.menu })
  }

})

function slideUp() {
  var animation = wx.createAnimation( {
    duration: 600
  });
  this.setData( { slideMaskDisplay: 'block' })
  animation.translateX( '100%' ).step()
  this.setData( {
    slideAnimation: animation.export()
  })
}
function slideDown() {
  var animation = wx.createAnimation( {
    duration: 800
  })
  animation.translateX( '-100%' ).step()
  this.setData( {
    slideAnimation: animation.export()
  })
  this.setData( { slideMaskDisplay: 'none' })
}