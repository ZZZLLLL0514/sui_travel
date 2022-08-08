// Component/tour/tour.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tile_CHN:{
            type:String,
            value:''
        },
        tile_ENG:{
            type:String,
            value:''
        },
      route_text:{
          type:String,
          value:''
      },
      content:{
          type:String,
          value:''
      },
      route_tile:{
        type:String,
        value:''
    },
    polyline:{
        type:Array,
        value:[]
    },
    markers:{
        type:Array,
        value:[]
    },
    scale:{
type:Number,
value:12
    },
    longitude:{
        type:Number,
        value:0
    },
    latitude:{
        type:Number,
        value:0
    }
     
    },
    
    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
