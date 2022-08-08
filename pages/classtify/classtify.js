// pages/classtify/classtify.js
const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        region: ['天河', '越秀', '荔湾', '海珠', '番禺', '白云', '黄埔', '花都', '从化', '增城'],
        TabCur: 0,
        scrollLeft: 0,
        scenic_spot: []
    },
    tabSelect(e) {
        this.setData({
            TabCur: e.currentTarget.dataset.id,
            scrollLeft: (e.currentTarget.dataset.id - 1) * 60
        });
//获取本地存储的景点数据数据
const scenicInfo= wx.getStorageSync("scenicInfo")
        switch (this.data.TabCur) {
            case 0:
                this.setData({
                    scenic_spot: scenicInfo.tianhe
                });
                break;
            case 1:
                this.setData({
                    scenic_spot: scenicInfo.yuexiu
                });
                break;
            case 2:
                this.setData({
                    scenic_spot: scenicInfo.liwan
                });
                break;
            case 3:
                this.setData({
                    scenic_spot: scenicInfo.haizhu
                });
                break;
            case 4:
                this.setData({
                    scenic_spot: scenicInfo.panyu
                });
                break;
            case 5:
                this.setData({
                    scenic_spot: scenicInfo.baiyun
                });
                break;
            case 6:
                this.setData({
                    scenic_spot: scenicInfo.huanpu
                });
                break;
            case 7:
                this.setData({
                    scenic_spot: scenicInfo.huadu
                });
                break;
            case 8:
                this.setData({
                    scenic_spot: scenicInfo.conhua
                });
                break;
                case 9:
                    this.setData({
                        scenic_spot: scenicInfo.zhenchen
                    });
                    break;
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        db.collection('huiwan').doc('f6e08a64629dfa4006e630d97011616e').get({
     
            success: function(res) {
               wx.setStorageSync('scenicInfo', res.data);
            
            },
                 fail: res => {
              console.log(res)
            }
          })

        this.setData({
            scenic_spot: wx.getStorageSync("scenicInfo").tianhe
        })
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