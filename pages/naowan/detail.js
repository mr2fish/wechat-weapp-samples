Page( {
  data: {
    core: "无",
    modalHidden: true
  },
  onLoad: function( options ) {
    console.log( options, "detail" )
    this.setData( options )

  },
  onReady: function() {

  },
  onShow: function() {

  },
  onHide: function() {

  },
  onUnload: function() {

  },

  bindModalShare: function() {
    this.setData( { modalHidden: false });
  },
  bindRefresh: function() {
    console.log( "refresh" )
  },
  bindModalHide: function() {
    this.setData( { modalHidden: true });
  }
})