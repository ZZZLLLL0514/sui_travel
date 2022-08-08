// pages/home/home.js
const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
   
    toGZH:function(){
       wx.navigateTo({
         url: '/pages/guangzhou/guangzhou',
       })
    },
    toGL:function(){
      wx.navigateTo({
         url: '/pages/gonglue/gonglue',
       })
    },
    //实时获取搜索框输入
    handleInput(event){
      this.setData({
         searchKey:event.detail.value
       });
       console.log(event.detail.value)
    },
    search(){
      wx.navigateTo({
         url:`/pages/zhoubian/zhoubian?key=广州${this.data.searchKey}`
      })
    },
    data: {
      searchKey:"",
      userLatitude: 0,
      userLongitude: 0,
      userLocation:{},
        banners:['/static/lunbotu/baiyun.png','/static/lunbotu/quangjin.png','/static/lunbotu/shamian.png','/static/lunbotu/shidi.png','/static/lunbotu/yuexiu.png'],
        recommendList:[
         {
            id:1,
            picUrl:'https://wx4.sinaimg.cn/orj360/007cuTStgy1h1orb7xt2fj30au07zwid.jpg',
            name:'白云山',
            mapName:'baiyunshan'
         },
         {
            id:2,
            picUrl:'https://wx2.sinaimg.cn/orj360/007cuTStgy1h1orb84d0zj30aa07ln1n.jpg',
            name:'北京路',
            mapName:'beijinlu'
         },
         {
            id:3,
            picUrl:'https://wx1.sinaimg.cn/orj360/007cuTStgy1h1orb8a18tj30at08fdjf.jpg',
            name:'广州塔',
            mapName:'gzta'
         },
         {
            id:4,
            picUrl:'https://wx1.sinaimg.cn/orj360/007cuTStgy1h1orb8ibdzj30cc08b44r.jpg',
            name:'海珠湿地公园',
            mapName:'wetland park'
         },
         {
            id:5,
            picUrl:'https://wx3.sinaimg.cn/orj360/007cuTStgy1h1orb8szt0j30id0bfnaj.jpg',
            name:'华南农业大学',
            mapName:'scau'
         },
         {
            id:6,
            picUrl:'https://wx2.sinaimg.cn/orj360/007cuTStgy1h1orb992jqj30id0blan5.jpg',
            name:'中山大学(广州校区南校园)',
            mapName:'sysu'
         }
        ],
        cateList:[
           { picUrl:'https://wx2.sinaimg.cn/orj360/007cuTStly1h1ofeaxgloj30fx0anqd1.jpg',
           name:'早茶',
           mapUrl:'zhaocha'
          },
          { picUrl:'https://wx3.sinaimg.cn/orj360/007cuTStly1h1ofeac9kwj30ha0bids2.jpg',
           name:'火锅',
           mapUrl:'huoguo'
          },
          { picUrl:'https://wx1.sinaimg.cn/orj360/007cuTStly1h1ofeanf1ij30g40atdpm.jpg',
           name:'烧烤',
           mapUrl:'shaokao'
          },
          { picUrl:'https://wx2.sinaimg.cn/orj360/007cuTStly1h1ofeastqej30if0c4qdl.jpg',
           name:'烧腊',
           mapUrl:'shaola'
          },
          { picUrl:'https://wx1.sinaimg.cn/orj360/007cuTStly1h1ofeagtn0j30i00b2wmn.jpg',
           name:'烧鹅',
           mapUrl:'shaoe'
          }
        ]
    },
    methods:{
      toBaiYun(){
         wx.navigateTo({
           url: '/pages/Map/Map',
         })
      }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      db.collection('huiwan').doc('ca780ad5629dd78d063f83eb62784b5a').get({
     
         success: function(res) {
            wx.setStorageSync('mapInfo', res.data);
         
         },
              fail: res => {
           console.log(res)
         }
       })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      wx.showModal({
         title: '提示',
         content: '请求获取位置信息',
         success: (res) => {
             if (res.confirm) {
                 wx.getLocation({
                     type: 'wgs84',
                     success: (res) => {
                         const latitude = res.latitude
                         const longitude = res.longitude
                         //保存用户位置信息
                         this.setData({
                           userLocation:res
                           });
                           //将用户信息保存至本地
                           wx.setStorageSync('userLocation', JSON.stringify(this.data.userLocation));
                           
                     },
                     fail(res) {
                         wx.showToast({
                             title: '请打开位置信息',
                         })
                     }
                 })
             }
         }
     })
      // let userLocation= JSON.parse(wx.getStorageSync("userLocation"));
      // console.log(userLocation)
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