Page({

    /**
     * 页面的初始数据
     */
    data: {
        TabCur: 0,
        scrollLeft: 0,
        classtify: '书店',
        cultural: [],
        searPOI:'shudian'
    },
    //点击路线规划事件
    toRoute: function (e) {
        let id = e.currentTarget.id;
        let userLocation = JSON.parse(wx.getStorageSync("userLocation"));
        let plugin = requirePlugin('routePlan');
        let key = 'LL4BZ-JVBCP-LF3DD-LHLXP-N2TT3-FIBNX'; //使用在腾讯位置服务申请的key
        let referer = '位置服务地铁图'; //调用插件的app的名称
        let endPoint = JSON.stringify({ //终点
            'name': '终点',
            'latitude': this.data.cultural[id - 1].latitude,
            'longitude': this.data.cultural[id - 1].longitude

        });
        let startPoint = JSON.stringify({ //起点
            'name': '起点',
            'latitude': userLocation.latitude,
            'longitude': userLocation.longitude

        });
        wx.navigateTo({
            url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint+'&startPoint'+startPoint
        });
    },
    //点击“到这里事件”
    toOpenLocation: function (e) {
        let id = e.currentTarget.id;
        wx.openLocation({
            type: 'gcj02',
            latitude: parseFloat(this.data.cultural[id - 1].latitude),
            longitude: parseFloat(this.data.cultural[id - 1].longitude),
            name: this.data.cultural.name
        });
    },
    tabSelect(e) {
        const  bookshop=[{
            id: 1,
            imagURL: 'https://wx2.sinaimg.cn/orj360/007cuTStly1h1xtjszd0vj30c4083gpc.jpg',
            name: '广州购书中心',
            latitude: 23.134245,
            longitude: 113.320686,
        },
        {
            id: 2,
            imagURL: 'https://wx3.sinaimg.cn/orj360/007cuTStly1h1xtju5833j30bs089gop.jpg',
            name: '留灯书店',
            latitude: 23.121178,
            longitude: 113.265681,
        },
        {
            id: 3,
            imagURL: 'https://wx1.sinaimg.cn/orj360/007cuTStly1h1xtjwwnj0j30af06h40t.jpg',
            name: '1200 book shop',
            latitude: 23.128781,
            longitude: 113.327759,
        },
        {
            id: 4,
            imagURL: 'https://wx3.sinaimg.cn/orj360/007cuTStly1h1xtjuui4yj30dg0890xq.jpg',
            name: '方所书店',
            latitude: 23.134677,
            longitude: 113.331356,
        },
        {
            id: 5,
            imagURL: 'https://wx3.sinaimg.cn/orj360/007cuTStly1h1xtjvt3fej30av07lad0.jpg',
            name: '联合书店',
            latitude: 23.124845,
            longitude: 113.269001,
        },
        {
            id: 6,
            imagURL: 'https://wx1.sinaimg.cn/orj360/007cuTStly1h1xtjwi2l5j30c108b78h.jpg',
            name: '博尔赫斯书店',
            latitude: 23.125977,
            longitude: 113.268349,
        },
        {
            id: 7,
            imagURL: 'https://wx2.sinaimg.cn/orj360/007cuTStly1h1xtjvacfvj30cl08bwih.jpg',
            name: '学而优书店',
            latitude: 23.092968,
            longitude: 113.290198,
        },
        {
            id: 8,
            imagURL: 'https://wx2.sinaimg.cn/orj360/007cuTStly1h1xtjtktfrj30d1089q76.jpg',
            name: '小古堂书店',
            latitude: 23.094534,
            longitude: 113.304382,
        }
    ];
        const bowuguan = [{
                id: 1,
                imagURL: 'https://wx2.sinaimg.cn/orj360/007cuTStly1h1xtjszd0vj30c4083gpc.jpg',
                name: '广州购书中心',
                latitude: 23.134245,
                longitude: 113.320686,
            },
            {
                id: 2,
                imagURL: 'https://wx3.sinaimg.cn/orj360/007cuTStly1h1xtju5833j30bs089gop.jpg',
                name: '留灯书店',
                latitude: 23.121178,
                longitude: 113.265681,
            },
            {
                id: 3,
                imagURL: 'https://wx1.sinaimg.cn/orj360/007cuTStly1h1xtjwwnj0j30af06h40t.jpg',
                name: '1200 book shop',
                latitude: 23.128781,
                longitude: 113.327759,
            },
            {
                id: 4,
                imagURL: 'https://wx3.sinaimg.cn/orj360/007cuTStly1h1xtjuui4yj30dg0890xq.jpg',
                name: '方所书店',
                latitude: 23.134677,
                longitude: 113.331356,
            },
            {
                id: 5,
                imagURL: 'https://wx3.sinaimg.cn/orj360/007cuTStly1h1xtjvt3fej30av07lad0.jpg',
                name: '联合书店',
                latitude: 23.124845,
                longitude: 113.269001,
            },
            
        ];
        const daxue =[{
            id: 1,
            imagURL: 'https://wx2.sinaimg.cn/orj360/007cuTStly1h1xtjszd0vj30c4083gpc.jpg',
            name: '广州购书中心',
            latitude: 23.134245,
            longitude: 113.320686,
        },
        {
            id: 2,
            imagURL: 'https://wx3.sinaimg.cn/orj360/007cuTStly1h1xtju5833j30bs089gop.jpg',
            name: '留灯书店',
            latitude: 23.121178,
            longitude: 113.265681,
        },
        {
            id: 3,
            imagURL: 'https://wx1.sinaimg.cn/orj360/007cuTStly1h1xtjwwnj0j30af06h40t.jpg',
            name: '1200 book shop',
            latitude: 23.128781,
            longitude: 113.327759,
        },
        {
            id: 4,
            imagURL: 'https://wx3.sinaimg.cn/orj360/007cuTStly1h1xtjuui4yj30dg0890xq.jpg',
            name: '方所书店',
            latitude: 23.134677,
            longitude: 113.331356,
        },
        {
            id: 5,
            imagURL: 'https://wx3.sinaimg.cn/orj360/007cuTStly1h1xtjvt3fej30av07lad0.jpg',
            name: '联合书店',
            latitude: 23.124845,
            longitude: 113.269001,
        },
        {
            id: 6,
            imagURL: 'https://wx1.sinaimg.cn/orj360/007cuTStly1h1xtjwi2l5j30c108b78h.jpg',
            name: '博尔赫斯书店',
            latitude: 23.125977,
            longitude: 113.268349,
        },
        {
            id: 7,
            imagURL: 'https://wx2.sinaimg.cn/orj360/007cuTStly1h1xtjvacfvj30cl08bwih.jpg',
            name: '学而优书店',
            latitude: 23.092968,
            longitude: 113.290198,
        },
        {
            id: 8,
            imagURL: 'https://wx2.sinaimg.cn/orj360/007cuTStly1h1xtjtktfrj30d1089q76.jpg',
            name: '小古堂书店',
            latitude: 23.094534,
            longitude: 113.304382,
        }];
        this.setData({
            TabCur: e.currentTarget.dataset.id,
            scrollLeft: (e.currentTarget.dataset.id - 1) * 60
        });
        let Cur= parseInt(e.currentTarget.dataset.id);
        switch(Cur){
            case 0:
                this.setData({
                    classtify:'书店',
                    cultural:bookshop,
                    searPOI:'shudian'
                });
                break;
            case 1:
                this.setData({
                    classtify:'博物馆',
                    cultural:bowuguan,
                    searPOI:'bowuguan'
                });
                break;
                case 2:
                    this.setData({
                        classtify:'大学',
                        cultural:daxue,
                        searPOI:'daxue'
                    });
                    break;
        };
        // console.log(this.data.TabCur);
        console.log(this.data.classtify)
     
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let shudian = [{
                id: 1,
                imagURL: 'https://wx2.sinaimg.cn/orj360/007cuTStly1h1xtjszd0vj30c4083gpc.jpg',
                name: '广州购书中心',
                latitude: 23.134245,
                longitude: 113.320686,
            },
            {
                id: 2,
                imagURL: 'https://wx3.sinaimg.cn/orj360/007cuTStly1h1xtju5833j30bs089gop.jpg',
                name: '留灯书店',
                latitude: 23.121178,
                longitude: 113.265681,
            },
            {
                id: 3,
                imagURL: 'https://wx1.sinaimg.cn/orj360/007cuTStly1h1xtjwwnj0j30af06h40t.jpg',
                name: '1200 book shop',
                latitude: 23.128781,
                longitude: 113.327759,
            },
            {
                id: 4,
                imagURL: 'https://wx3.sinaimg.cn/orj360/007cuTStly1h1xtjuui4yj30dg0890xq.jpg',
                name: '方所书店',
                latitude: 23.134677,
                longitude: 113.331356,
            },
            {
                id: 5,
                imagURL: 'https://wx3.sinaimg.cn/orj360/007cuTStly1h1xtjvt3fej30av07lad0.jpg',
                name: '联合书店',
                latitude: 23.124845,
                longitude: 113.269001,
            },
            {
                id: 6,
                imagURL: 'https://wx1.sinaimg.cn/orj360/007cuTStly1h1xtjwi2l5j30c108b78h.jpg',
                name: '博尔赫斯书店',
                latitude: 23.125977,
                longitude: 113.268349,
            },
            {
                id: 7,
                imagURL: 'https://wx2.sinaimg.cn/orj360/007cuTStly1h1xtjvacfvj30cl08bwih.jpg',
                name: '学而优书店',
                latitude: 23.092968,
                longitude: 113.290198,
            },
            {
                id: 8,
                imagURL: 'https://wx2.sinaimg.cn/orj360/007cuTStly1h1xtjtktfrj30d1089q76.jpg',
                name: '小古堂书店',
                latitude: 23.094534,
                longitude: 113.304382,
            }
        ]
        this.setData({
            cultural: shudian
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