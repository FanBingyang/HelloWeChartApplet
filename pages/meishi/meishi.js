Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 保存请求过来的数据
        shopList:[],
        // 页码，由于第一次加载的时候就要自增1，所以默认值设置为0。
        pageIndex:0,
        // 页面加载数量
        pageSize:20,
        //请求的目录id
        catId : 1,
        //2.1用于记录是否还有更多数据的标志 
        hasMore : true
    },

    // 自定义函数：请求加载数据函数
    /*
    loadMore:function(){
      // 2.2如果没有更多数据就直接返回，结束函数的调用。
      if(!hasMore) return;

        wx.request({
            url: '',
            // 设置请求数据的多少
            data: {
                _limit: this.data.pageSize,
                _page: ++this.data.pageIndex,

            },
            success: (res) => {
                /**
                 * bug:每次请求过来的数据将上一次的数据给替换掉了
                 * 解决办法：
                 * 定义新的列表，先获得之前的数据，然后通过concat将请求过
                 * 来的数据和源数据拼接在一起
                 * /
                var newList = this.data.shopList.concat(res.data)；
                // 2.3获取数据总量，从请求消息头里面获取到本次请求所返回的数据有多少条，数据保存在请求消息头里的
                X-Total-Count，可以通过res.header[]函数进行获取。获取出来的 数据是字符穿类型 
                var count = parseInt(res.header['X-Total-Count]);
                // 2.4 判断当前已经获取的数据是否小于数据总量，如果小于，，证明还有数据，
                var flag = this.data.pageIndex * this.data.pageSize < conut;
                //设置数据，跟新js数据也更新视图层
                this.setData({
                    shopList: newList，
                    hasMore : flag，
                })
            },
        });
    },
    */
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
      /**
       * options:请求页面传递过来的请求数据
       */
      // console.log(options);

    /*  根据首页传递过来的参数，设置导航条标题
        学习方式：微信开发API文档
        如果传参过来有标题的话，就设置，如果没有就延续首页的
        if(options.title){
            wx.setNavigationBarTitle({
                title: options.title,
            });
        }
     */

    // 调用自定义函数
    // this.loadMore();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        // 下拉事件
        console.log("下拉刷新！");
        /**实现下来重新加载页面
        *  首先清除已经加载出来的数据，清空为默认值，
        */
        /**
        this.setData({
          shopList:[],
          pageIndex:0,
          hasMore:true
        });
         */
        //再次重新请求数据
        // this.loadMore();
        // 手动关闭刷新动画，否则手机端回一直存在
        wx.stopPullDownRefresh();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        // 当用户上拉触底时调用自定义加载数据的函数
        // this.loadMore();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})