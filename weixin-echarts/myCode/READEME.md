## 在已有项目中使用 echarts ：

**1.需要把 ec-canvas 的文件放到根目录下**

>  **ec-canvas需要把 echarts-for-weixin 包下载下来，里面有这个文件**

**2.在需要用到的页面中的 .json 中注册组件**

```java
{
  "usingComponents": {
	"ec-canvas":"../../ec-canvas/ec-canvas"
  }
}
```

**3.在 js 文件中引入**

```java
// 引入 echarts.js
import * as echarts from '../../ec-canvas/echarts'
let chart = null
```

**4.在 wxml 页面中给顶一个容器**

```java
<view class="my-chart"> 
     // id,canvas-id,ec 是必须给定的三个属性
	 <ec-canvas id="mychart-dom" canvas-id="mychart" ec="{{ec}}"></ec-canvas>
</view>
```

**5.在 js 的 data 中初始化 ec** 

```javascript
data: {
     ec:{
      	onInit:initChart
     }
}
```

**6.写下初始化代码函数****

```javascript
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
```

