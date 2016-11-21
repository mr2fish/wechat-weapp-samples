var apibaidu = require('../../utils/apibaidu')
var app = getApp()
Page({
    data: {
        navLeftItems: [],
        navRightItems: [],
        curNav: 316,
		curIndex: 0
    },
    onLoad: function() {

        var that = this
        
        wx.request({
            url: apibaidu.NUOMI_CATEGORY_URL,
            method: 'GET',
            data: {},
            header: {'apikey':apibaidu.API_KEY},
            success: function(res) {
                console.log(res.data)
                that.setData({
                    navLeftItems: res.data.categories,
                    navRightItems: res.data.categories
                })
            }
        })
    },

    switchRightTab: function(e) {
        let id = e.target.dataset.id,
			index = parseInt(e.target.dataset.index);
		this.setData({
			curNav: id,
			curIndex: index
		})
    }

})