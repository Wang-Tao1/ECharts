// 延迟加载 echarts + 切换echarts配置项数据

import * as echarts from '../../ec-canvas/echarts' // 引入 echarts.js
Page({
  data: {
    lazyEc:{
      lazyLoad:true
    },
    type:'outcome',
    chartOptionsData:{
      income:[],
      outcome:[]
    }
  },

  onLoad: function (options) {
    //获取到组件
    this.lazyComponent = this.selectComponent('#lazy-mychart-dom') 
    setTimeout(()=>{
      this.setData({
        chartOptionsData:{
          income:[150, 230, 224, 218, 135, 147, 260],
          outcome:[300, 100, 500, 700, 240, 190, 210]
        }
      })
      this.init([300, 100, 500, 700, 240, 190, 210])
    },1000)
  },
  init(optionData){   // 手动初始化
    this.lazyComponent.init((canvas,width,height,dpr)=>{
      let chart = echarts.init(canvas,null,{
        width:width,
        height:height,
        devicePixelRatio:dpr
      })
      let option = getOption(optionData) // 这里是 echarts 的配置信息
      chart.setOption(option)
      this.chart = chart   // 将图标实例绑定到this上，方便在其他函数中访问
      return chart
    })
  },
  changeType(e){ // 切换效果
    this.setData({
      type:e.currentTarget.dataset.type
    })
    let option = getOption(this.data.chartOptionsData[e.currentTarget.dataset.type])
    this.chart.setOption(option)
  }
})

function getOption(data){
  return {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
   },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: data,
      type: 'line'
    }]
  }
}