var util = require('../../utils/util')
var apibaidu = require('../../utils/apibaidu')

Page( {
  data: {
    inputValue: "",
    loading: false,
    disabled: true
  },
  
  bindKeyInput: function( e ) {
    let value = e.detail.value;
    
    this.setData( {
      inputValue: value,
      disabled: !value.length > 0
    });
  },
  search: function( e ) {
    
    this.setData( {
      loading: true,
      disabled:true
    });
    let that = this;
    
    wx.request( {
      url: apibaidu.AIR_QUALITY_URL,
      header: {
        "Content-Type": "application/json",
        "apikey": apibaidu.API_KEY
      },
      data: {
        "city": this.data.inputValue
      },
      
      success: function( res ) {
        console.log( res.data )
        if( res.data.errNum === 0 ) {
          wx.navigateTo( {  
            url:util.createURL( "./result", res.data.retData),
          });
        }else{
          wx.showModal({
            title: '提示',
            content: res.data.retMsg,
            success: function(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        }

      },
      
      fail: function() {
        wx.showModal({
          title: '提示',
          content: "请求失败,请检查网络",
          success: function(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      },
      complete: function() {
        console.log("complete")
        that.setData( {
          loading: false,
          disabled:false
        })
      }
    });
  }

});