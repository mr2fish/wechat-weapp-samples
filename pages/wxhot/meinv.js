Page( {
    data: {
        url: "",
        hidden: false,
        loadingText: "加载中..."
    },

    onLoad: function( options ) {
        that = this
        if( options == null || options.url == null ) {
            this.setData( { hidden: true })
            return
        }

        this.setData( {
            hidden: true,
            url: options.url
        })
    },
    onlongclick: function( e ) {
        var mUrl = "";
        if( e.currentTarget.dataset.url != null )
            mUrl = e.currentTarget.dataset.url
        console.log( "download：" + mUrl )
        wx.showModal({
            title: '提示',
            content: '是否保存',
            confirmText:'保存',
            success: function(res) {
                if (res.confirm) {
                    console.log('save image')
                    saveImage( mUrl )
                }
            }
        })
        
    },
    previewImgEvent: function( e ) {
        console.log( e,"previewImgEvent" )
        var src = e.currentTarget.dataset.src
        if( src && src.length > 0 ) {
            wx.previewImage( {
                urls: [ src ]
            })
        }
    }
})

var that;

function saveImage( mUrl ) {
    that.setData( {
        hidden: false,
        loadingText: "下载中..."
    });
    wx.downloadFile( {
        url: mUrl,
        type: 'image',
        success: function( res ) {
            console.log( res,"download success" )
            that.setData( {
                hidden: true
            })
            wx.showToast({
                title: '恭喜你，图片保存成功',
                icon: 'success'
            })
        },
        fail: function( res ) {
            console.log( "download fail" );
            that.setData( {
                hidden: true
            })
            wx.showToast({
                title: '保存失败，请稍后再试',
                icon: 'success'
            })
        },
        complete: function( res ) {
            console.log( "download complete" )
        }
    })
}