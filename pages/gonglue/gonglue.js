// pages/gonglue/gonglue.js
const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        covers_list: {
            clasic_onDay: [{
                    id: 1,
                    latitude: "23.12705",
                    longitude: "113.24693",
                    label: {
                        content: '陈家祠',
                        color: '#aa2504'
                    }
                },
                {
                    id: 2,
                    latitude: "23.106721",
                    longitude: "113.244667",
                    label: {
                        content: '沙面岛',
                        color: '#aa2504'
                    }
                },
                {
                    id: 3,
                    latitude: "23.1147",
                    longitude: "113.26015",
                    label: {
                        content: '圣心大教堂',
                        color: '#aa2504'
                    }
                },
                {
                    id: 4,
                    latitude: " 23.124359",
                    longitude: "113.296294",
                    label: {
                        content: '东山口',
                        color: '#aa2504'
                    }
                },
                {
                    id: 5,
                    latitude: "23.10647",
                    longitude: "113.32446",
                    label: {
                        content: '广州塔',
                        color: '#aa2504'
                    }
                },
                {
                    id: 6,
                    latitude: "23.114596",
                    longitude: "113.27121",
                    label: {
                        content: '珠江夜游',
                        color: '#aa2504'
                    }
                }
            ],
            old_zonzhou:[
                {
                    id: 1,
                    latitude: "23.140152",
                    longitude: "113.265621",
                    label: {
                        content: '越秀公园',
                        color: '#aa2504'
                    }
                }, {
                    id: 2,
                    latitude: "23.136045",
                    longitude: "113.264349",
                    label: {
                        content: '中山纪念碑',
                        color: '#aa2504'
                    }
                },{
                    id: 3,
                    latitude: "23.132872",
                    longitude: "113.264691",
                    label: {
                        content: '中山纪念堂',
                        color: '#aa2504'
                    }
                },{
                    id: 4,
                    latitude: "23.12748",
                    longitude: "113.26434",
                    label: {
                        content: '人民公园',
                        color: '#aa2504'
                    }
                },{
                    id: 5,
                    latitude: " 23.114511",
                    longitude: "113.26613",
                    label: {
                        content: '北京路',
                        color: '#aa2504'
                    }
                },
            ],
            new_zonzhou:[
                {
                    id: 1,
                    latitude: "23.154847",
                    longitude: "113.32632",
                    label: {
                        content: '燕玲公园',
                        color: '#aa2504'
                    }
                }, {
                    id: 2,
                    latitude: "23.137361",
                    longitude: "113.325289",
                    label: {
                        content: '珠江新城',
                        color: '#aa2504'
                    }
                },{
                    id: 3,
                    latitude: " 23.11999",
                    longitude: "113.32689",
                    label: {
                        content: '天河体育中心',
                        color: '#aa2504'
                    }
                },{
                    id: 4,
                    latitude: "23.120434",
                    longitude: "113.324662",
                    label: {
                        content: '花城广场',
                        color: '#aa2504'
                    }
                },{
                    id: 5,
                    latitude: " 23.111559",
                    longitude: "13.324434",
                    label: {
                        content: '海心沙',
                        color: '#aa2504'
                    },
                },{
                    id: 6,
                    latitude: " 23.10647",
                    longitude: " 113.32446",
                    label: {
                        content: '广州塔',
                        color: '#aa2504'
                    },
                },
                {
                    id: 7,
                    latitude: " 23.083324",
                    longitude: "113.313879",
                    label: {
                        content: '海珠万达广场',
                        color: '#aa2504'
                    },
                },
            ]
        },
        polylines: {
            clasic_onDay: [{
                points: [{
                    latitude: 23.12705,
                    longitude: 113.24693
                }, {
                    latitude: 23.106721,
                    longitude: 113.244667
                }, {
                    latitude: 23.1147,
                    longitude: 113.26015
                }, {
                    latitude: 23.124359,
                    longitude: 113.296294
                }, {
                    latitude: 23.10647,
                    longitude: 113.32446
                }, {
                    latitude: 23.114596,
                    longitude: 113.27121
                }],
                arrowLine: true,
                width: 3,
                arrowIconPath: '/static/gonglue/jiandou.png',
                segmentTexts: [{
                    // name:'陈家祠'
                }]
            }],
            old_zonzhou: [{
                points: [{
                    latitude: 23.140152,
                    longitude: 113.265621
                }, {
                    latitude: 23.136045,
                    longitude: 113.264349
                }, {
                    latitude: 23.132872,
                    longitude: 113.264691
                }, {
                    latitude: 23.12748,
                    longitude: 113.26434
                }, {
                    latitude: 23.122711,
                    longitude: 113.269101
                }, {
                    latitude: 23.114511,
                    longitude: 113.26613
                }],
                arrowLine: true,
                width: 3,
                arrowIconPath: '/static/gonglue/jiandou.png'
            }],
            new_zonzhou: [{
                points: [{
                    latitude: 23.154847,
                    longitude: 113.32632
                }, {
                    latitude: 23.137361,
                    longitude: 113.325289
                }, {
                    latitude: 23.11999,
                    longitude: 113.32689
                }, {
                    latitude: 23.120434,
                    longitude: 113.324662
                }, {
                    latitude: 23.111559,
                    longitude: 113.324434
                }, {
                    latitude: 23.10647,
                    longitude: 113.32446
                }, {
                    latitude: 23.083324,
                    longitude: 113.313879
                }],
                arrowLine: true,
                width: 3,
                arrowIconPath: '/static/gonglue/jiandou.png'
            }]
        },
        Classic_tour: {
            route: '路线：陈家祠——沙面岛—石室圣心大教堂—东山口—广州塔—天字码头乘船夜游',
            content: '  老广州味道和新广州摩登，不分上下。第一次到访肯定都想尝到，那不妨走走这条经典的一日游线路，以陈家祠开始，以夜游珠江结束，把广州的地标建筑、历史街区和美食都涵盖在内。作为沿海城市，岭南的政治经济中心，从海上丝绸之旅开始，再到开埠经商，老一辈广州人在这里安居乐业，建祠堂，修豪宅……他们推动着广州社会的发展，并随着发展逐渐退下历史舞台。老一辈的经商精神以及老广州人的记忆都留在了老区的生活和建筑里。想要了解过去的广州，不妨花上一天的时间，散步广州老街区。'
        },
        oldzonzhou: {
            route: '路线：越秀公园——中山纪念碑—中山纪念碑—中山纪念堂—人民公园—北京路',
            content: '  这条中轴线，起址于钟灵毓秀的越秀山，坐山面水，四象齐全，沿线可游览老建筑。两千多年来，无论是经历多少日夜更替，越秀的东山、北京路、荔湾西关一直是广州最繁荣的地区，是广州当时达官显贵集结地、是政权的中心。'
        },
        newzonzhou: {
            route: '燕岭公园—珠江新城—天河体育中心—花城广场—海心沙—广州塔—海珠万达广场',
            content: '北起燕岭公园，南至海心沙的新中轴线上，傲然挺立的广州塔熠熠生辉，并引领着现代感十足的建筑群落作为“会客厅”，吸引广州的主人和客人们汇聚一堂，共享乐事。晨光熹微，朝霞唤醒城市中轴线，登上广州塔，花城C位风光尽收眼底。珠江之上，秋风拨动着海心桥的“琴弦”，夜幕降临，璀璨灯光为城市披上霓裳。日夜交替，中轴线用独特魅力为广州“代言”。'
        }
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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