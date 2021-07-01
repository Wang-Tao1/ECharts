// 引入 echarts.js
import * as echarts from '../../ec-canvas/echarts'
let chart = null
// 引入多张图表
let secChart = null


Page({
  data: {
    ec:{
      onInit:initChart
    },
    // // 引入多张图表
    ec2:{
      onInit:initChart2
    }
  },

  onLoad() {
 
  },
  
})

function initChart(canvas,width,height,dpr){
  chart = echarts.init(canvas,null,{
    width:width,
    height:height,
    devicePixelRatio:dpr
  })
  let option = getOption() // 这里是 echarts 的配置信息
  chart.setOption(option)
  return chart
}

function getOption(){
  return {
      xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
      }]
  }
}


// 引入多张图表
function initChart2(canvas,width,height,dpr){
  secChart = echarts.init(canvas,null,{
    width:width,
    height:height,
    devicePixelRatio:dpr
  })
  canvas.setChart(secChart)
  let option = getOption2() // 这里是 echarts 的配置信息
  secChart.setOption(option)
  return secChart
}

function getOption2(){
  return {
    title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      left: 'center'
  },
  tooltip: {
      trigger: 'item'
  },
  legend: {
      orient: 'vertical',
      left: 'left',
  },
  series: [
      {
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          data: [
              {value: 1048, name: '搜索引擎'},
              {value: 735, name: '直接访问'},
              {value: 580, name: '邮件营销'},
              {value: 484, name: '联盟广告'},
              {value: 300, name: '视频广告'}
          ],
          emphasis: {
              itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }
  ]
  }
}
