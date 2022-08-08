// pages/zhoubian/zhoubian.js
var QQMapWX = require('../../utils/qqmap-wx.js');
var qqmapsdk = new QQMapWX({
    key: 'LL4BZ-JVBCP-LF3DD-LHLXP-N2TT3-FIBNX' // 必填
});

Page({
    /**
     * 页面的初始数据
     */
    data: {
        markers: [],
        Latitude: 0,
        Longitude: 0,
    },
    //点击“到这里事件”
    toOpenLocation: function (e) {
        let id = e.currentTarget.id;
        let length = this.data.markers.length;
        for (var i = 0; i < length; i++) {
            if (this.data.markers[i].id == id) {
                wx.openLocation({
                    type: 'gcj02',
                    latitude:parseFloat( this.data.markers[i].location),
                    longitude:parseFloat( this.data.markers[i].location),
                    name: this.data.markers.title
                });
            }
        }
    },
    //点击路线规划事件
    toRoute: function (e) {
        let id = e.currentTarget.id;
        let length = this.data.markers.length;
        for (var i = 0; i < length; i++) {
            if (this.data.markers[i].id == id) {
                let userLocation= JSON.parse(wx.getStorageSync("userLocation"));
                let plugin = requirePlugin('routePlan');
                let key = 'LL4BZ-JVBCP-LF3DD-LHLXP-N2TT3-FIBNX'; //使用在腾讯位置服务申请的key
                let referer = '位置服务地铁图'; //调用插件的app的名称
                let endPoint = JSON.stringify({ //终点
                    'name': '终点',
                    'latitude': this.data.markers[i].location,
                    'longitude': this.data.markers[i].location
                });
                let startPoint = JSON.stringify({ //起点
                    'name': '起点',
                    'latitude': userLocation.latitude,
                    'longitude':  userLocation.longitude
                   
                });
                wx.navigateTo({
                    url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
                });
            }
        }
    },
    //点击标记点事件函数
    marker: function (e) {
        const longitude = this.data.markers[i].location.lng;
        const latitude = this.data.markers[i].location.lat;
        wx.openLocation({
            type: 'gcj02',
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            name: this.data.markers.title
        });

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options.key)
        let searchKey = options.key;
        let userLocation = JSON.parse(wx.getStorageSync("userLocation"));
        var _this = this;
      
        const center_point = userLocation.latitude + ',' + userLocation.longitude;
        //    console.log(userLocation);
        // 调用接口
        if (searchKey.substr(0,2)=="广州"){
            qqmapsdk.geocoder({
                //获取表单传入地址
                address:`广州市 ${searchKey}`, //地址参数，例：固定地址，address: '北京市海淀区彩和坊路海淀西大街74号'
                success: function (res) { //成功后的回调
                  console.log(res);
                  var res = res.result;
                //   var latitude = res.location.lat;
                //   var longitude = res.location.lng;
               
                  //根据地址解析在地图上标记解析地址位置
                  _this.setData({ // 获取返回结果，放到markers及poi中，并在地图展示
                    markers: [{
                      id: 0,
                      title: res.title,
                      latitude: res.location.lat,
                      longitude: res.location.lng,
                      iconPath: '/static/maps/location.png', //图标路径
                      width: 20,
                      height: 20,
                      callout: { //可根据需求是否展示经纬度
                        content: res.title,
                        color: '#000',
                        display: 'ALWAYS'
                      }
                    }], //根据自己data数据设置相应的地图中心坐标变量名称
                      latitude: res.location.lat,
                      longitude: res.location.lng
                    
                  })
                }
              })
        }else{
            this.setData({
                Latitude: userLocation.latitude,
                Longitude: userLocation.longitude
            });
            qqmapsdk.search({
                keyword:searchKey, //搜索关键词
                location: center_point, //设置周边搜索中心点
                success: function (res) { //搜索成功后的回调
                    var mks = []
                    for (var i = 0; i < res.data.length; i++) {
                        mks.push({ // 获取返回结果，放到mks数组中
                            title: res.data[i].title,
                            id: parseInt(res.data[i].id),
                            latitude: res.data[i].location.lat,
                            longitude: res.data[i].location.lng,
                            address: res.data[i].address.split("广州市")[1],
                            width: 20,
                            height: 20
                        })
                    }
                    _this.setData({ //设置markers属性，将搜索结果显示在地图中
                        markers: mks
                    })
                },
                fail: function (res) {
                    // console.log(res);
                },
                complete: function (res) {
                    // console.log(res);
                }
            });
        }
      

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

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})