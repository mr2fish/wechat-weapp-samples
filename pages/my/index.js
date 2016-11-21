var app = getApp()
Page( {
  data: {
    userInfo: {},
    projectSource: 'https://github.com/sobne/wechat-weapp-samples',
    userListInfo: [ 
      {
        icon: '../../resources/images/64x64/dingdan.png',
        text: '我的消息',
        isunread: true,
        unreadNum: 2
      }, {
        icon: '../../resources/images/64x64/dizhi.png',
        text: '所在城市'
      }, {
        icon: '../../resources/images/64x64/kefu.png',
        text: '在线客服',
        groupLine: true
      }, {
        icon: '../../resources/images/64x64/help.png',
        text: '关于我们'
      }, {
        icon: '../../resources/images/64x64/logout.png',
        text: '退出登录',
        hideArrow: true
      }
    ]
  },
  bindViewTap: function(e) {
    wx.showModal({
      title: '关于',
      content: 'http://sobne.github.io',
      showCancel:false
    })
  },
  onLoad: function() {
    var that = this
    app.getUserInfo( function( userInfo ) {
      that.setData( {
        userInfo: userInfo
      })
    })
  }
})