### 1.**标记最大值、最小值、平均值**、标注区间(series对象下)

```javascript
markPoint: { // 标记点
	data: [{ type: 'max',name: '最大值'}, {type: 'min',name: '最小值'}]
}, 
markLine: { // 标记线
	data: [{ type: 'average',name: '平均值'}]
},
markArea: { // 标记区域
    data: [
           [{xAxis: '1月'},{xAxis: '2月'}],
           [{xAxis: '7月'},{xAxis: '8月'}]
          ]
},
```

### **2.紧挨边缘（Axis对象下）**

```javascript
// 坐标轴两边是否留白，也就是说 第1个元素是否与 x/y 轴有距离	
boundaryGap:false
```

### **3.缩放：脱离0值比例（Axis对象下）**

```javascript
// 默认坐标轴从0开始，这样在显示数据时由于差距不大数据看上去像一条直线.设置成 true 后坐标刻度不会强制包含零刻度。
scale: true
```

### 4.**区域缩放(option对象下)**

```javascript
dataZoom: [ // 控制区域缩放效果的实现,对数据范围过滤，x/y 轴都可以拥有.同时它也可以配置多个区域缩放器
	{
		type: 'slider', // 缩放的类型 slide代表滑块 inside代表依靠鼠标滚轮
		xAxisIndex: 0
	},
	{
		type: 'slider', // 设置缩放组件控制的是哪个x轴，一般写0即可
		yAxisIndex: 0, // 设置缩放组件控制的是哪个y轴，一般写0即可
		start: 0, // 渲染完成后, 数据筛选的初始值, 百分比
		end: 80 // 渲染完成后, 数据筛选的结束值, 百分比
	 }
],
```

### **5.高亮样式(series对象下)**

```javascript
emphasis: { // 移动至对应区域变色，优先级高，会覆盖样式
 itemStyle: { color: 'pink'},
 label: {color: 'black'}
}
```

### **6.增量动画的实现(通过按钮点击实现数据新增)**

```java
var btnModify = document.querySelector('#modify')
btnModify.onclick = function () {
	var newYDataArr = [68, 32, 99, 77, 94, 80, 72, 86]
	// setOption 可以设置多次
	// 新旧option的关系并不是相互覆盖的关系, 而是相互整合的关系
	// 我们在设置新的option的时候, 只需要考虑到变化的部分就可以
	 var option = {series: [{data: newYDataArr}]}
     mCharts.setOption(option)
}
```

### **7.距离包含坐标轴上的文字（grid对象）**

```java
// 距离包含坐标轴上的文字
containLabel: true // 如果不设置，它不会把文字也当成整体，这样会让 left/right 需要考虑上文字的宽度
```

### **8.地图中使用地理坐标系**

```java
// 涟漪特效动画的散点（气泡）图
type: 'effectScatter',
coordinateSystem: 'geo'  // 地图想用散点图必须使用地理坐标系
```

### 9.**移除鼠标移入图时的动画效果**

```java
 hoverAnimation: false, // 关闭鼠标移入到饼图时的动画效果
```

### **10.使用多个坐标轴**

```java
// 拿 y轴 来举例子。如果配置了两个对象，y轴默认是一左一右
yAxis: [
        {
            type: 'value',
            name: '水量'
        },
        {
            type: 'value',
            name: '温度'
        }
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 1,  // 通过 yAxisIndex 属性指定使用哪个y轴
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
```

