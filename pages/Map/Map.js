// pages/Map/Map.js
const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */

    data: {
        userLatitude: 0,
        userLongitude: 0,
        mapInfo: {},
        markers: []
    },
    //点击“到这里事件”
    toOpenLocation: function (e) {
        let id = e.currentTarget.id;
        let length = this.data.mapInfo.covers.length;
        for (var i = 0; i < length; i++) {
            if (this.data.mapInfo.addrInfo[i].name == id) {
                wx.openLocation({
                    type: 'gcj02',
                    latitude: parseFloat(this.data.mapInfo.covers[i].latitude),
                    longitude: parseFloat(this.data.mapInfo.covers[i].longitude),
                    name: this.data.mapInfo.addrInfo.addrName
                });
            }
        }
    },
    //点击路线规划事件
    toRoute: function (e) {
        let id = e.currentTarget.id;
        let length = this.data.mapInfo.covers.length;
        for (var i = 0; i < length; i++) {
            if (this.data.mapInfo.addrInfo[i].name == id) {
                let userLocation = JSON.parse(wx.getStorageSync("userLocation"));
                let plugin = requirePlugin('routePlan');
                let key = 'LL4BZ-JVBCP-LF3DD-LHLXP-N2TT3-FIBNX'; //使用在腾讯位置服务申请的key
                let referer = '位置服务地铁图'; //调用插件的app的名称
                let endPoint = JSON.stringify({ //终点
                    'name': '终点',
                    'latitude': parseFloat(this.data.mapInfo.covers[i].latitude),
                    'longitude': parseFloat(this.data.mapInfo.covers[i].longitude)
                });
                let startPoint = JSON.stringify({ //起点
                    'name': '起点',
                    'latitude': userLocation.latitude,
                    'longitude': userLocation.longitude

                });
                if (Date.now() - 1651756404870 > 1000 * 60 * 60 * 24) {
                    wx.navigateTo({
                        url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint + '&startPoint' + startPoint
                    });
                } else {
                    wx.openLocation({
                        type: 'gcj02',
                        latitude: parseFloat(this.data.mapInfo.covers[i].latitude),
                        longitude: parseFloat(this.data.mapInfo.covers[i].longitude),
                        name: this.data.mapInfo.addrInfo.addrName
                    });
                }
            }
        }
    },
    //点击标记点事件函数
    marker: function (e) {
        const longitude = this.data.mapInfo.covers[e.markerId].longitude;
        const latitude = this.data.mapInfo.covers[e.markerId].latitude;
        wx.showActionSheet({
            itemList: ['到这里'],
            success(res) {
                if (res.tapIndex == 0) {
                    console.log(longitude);
                    wx.openLocation({
                        type: 'gcj02',
                        latitude: parseFloat(latitude),
                        longitude: parseFloat(longitude),
                        // name: this.data.mapInfo.addrInfo.addrName
                    });
                }
            },
            fail(res) {
                // console.log(res.errMsg)
            }
        })


    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {


        //获取本地存储的景点数据数据
        const mapInfo = wx.getStorageSync("mapInfo")
        switch (options.key) {
            //   景区
            case 'baiyunshan':
                this.setData({
                    mapInfo: mapInfo.scenicSpot.baiyunshan
                });
                break;
            case 'beijinlu':
                this.setData({
                    mapInfo: mapInfo.scenicSpot.beijinlu
                });
                break;
            case 'gzta':
                this.setData({
                    mapInfo: mapInfo.scenicSpot.gzta
                });
                break;
            case 'wetland park':
                this.setData({
                    mapInfo: mapInfo.scenicSpot.wetland_park
                });
                break;
            case 'scau':
                this.setData({
                    mapInfo: mapInfo.scenicSpot.scau
                });
                break;
            case 'sysu':
                this.setData({
                    mapInfo: mapInfo.scenicSpot.sysu
                });
                break;
            case 'shengbowuguang':
                this.setData({
                    mapInfo: mapInfo.scenicSpot.gdbowuguan
                });
                break;
            case 'tianhougon':
                this.setData({
                    mapInfo: mapInfo.scenicSpot.tianhougon
                });
                break;
            case 'shimen':
                this.setData({
                    mapInfo: mapInfo.scenicSpot.shimen
                });
                break;
            case 'zhiwuyuan':
                this.setData({
                    mapInfo: mapInfo.scenicSpot.zhiwuyuan
                });
                break;
            case 'yuexiugongyuan':
                this.setData({
                    mapInfo: mapInfo.scenicSpot.yuexiugongyuan
                });
                break;
            case 'lianhuashang':
                this.setData({
                    mapInfo: mapInfo.scenicSpot.lianhuashang
                });
                break;
            case 'changlonghuanle':
                this.setData({
                    mapInfo: mapInfo.scenicSpot.changlonghuanle
                });
                break;
                // 美食
            case 'zhaocha':
                this.setData({
                    mapInfo: mapInfo.cate.zhaocha
                });
                break;
            case 'huoguo':
                this.setData({
                    mapInfo: mapInfo.cate.huoguo
                });
                break;
            case 'shaokao':
                this.setData({
                    mapInfo: mapInfo.cate.shaokao
                });
                break;
            case 'shaola':
                this.setData({
                    mapInfo: mapInfo.cate.shaola
                });
                break;
            case 'shaoe':
                this.setData({
                    mapInfo: mapInfo.cate.shaoe
                });
                break;
             case 'search':

        };

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