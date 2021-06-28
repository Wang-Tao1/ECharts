// 柱状图1模块
(function() {
    // 数据变化
    var dataAll = [
        { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
        { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
    ];
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 2. 指定配置选项 和数据
    var option = {
        //   修改柱子颜色
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // grid决定我们的柱状图的大小
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [{
            type: "category",
            data: [
                "旅游行业",
                "教育培训",
                "游戏行业",
                "医疗行业",
                "电商行业",
                "社交行业",
                "金融行业"
            ],
            //坐标轴刻度相关设置
            axisTick: {
                // 保证刻度线和标签对齐
                alignWithLabel: true
            },
            // x轴的文字颜色和大小
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "8"
                }
            },
            // 不显示x轴的线
            axisLine: {
                show: false
            }
        }],
        yAxis: [{
            type: "value",
            // y轴的文字颜色和大小
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                }
            },
            // y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                }
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                }
            }
        }],
        series: [{
            name: "直接访问",
            type: "bar",
            // 柱子的宽度
            barWidth: "35%",
            data: dataAll[0].data,
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            }
        }]
    };
    // 3. 把配置选项给 实例对象
    myChart.setOption(option);
    // 4.让我们的图表适配屏幕宽度
    window.addEventListener("resize", function() {
        //   让我们图表调用resize方法
        myChart.resize();
    });
    $(".bar h2").on('click', "a", function() {
        // index() 方法返回指定元素相对于其他指定元素的 index 位置。
        option.series[0].data = dataAll[$(this).index()].data;
        myChart.setOption(option);
    })
})();

// 柱状图2模块
(function() {
    var data = [70, 34, 60, 78, 69];
    var myChart = echarts.init(document.querySelector(".bar1 .chart"));
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var titlename = ["HTML5", "CSS3", "javascript", "VUE", "NODE"];
    var valdata = [702, 350, 610, 793, 664];
    option = {
        //图标位置
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            show: true,
            type: 'category',
            data: titlename,
            inverse: true,
            // 不显示y轴的线
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            // 不显示刻度
            axisTick: {
                show: false
            },
            // 把刻度标签里的文字设置为白色
            axisLabel: {
                color: '#fff'
            }
        }, {
            show: true,
            data: valdata,
            inverse: true,
            // 把刻度标签里的文字设置为白色
            axisLabel: {
                fontSize: 12,
                color: '#fff'
            },
            // 不显示y轴的线
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            // 不显示刻度
            axisTick: {
                show: false
            },
        }],
        series: [{
                yAxisIndex: 0,
                name: '条',
                type: 'bar',
                data: data,
                // 柱子的宽度
                barWidth: 10,
                // 柱子之间的距离
                barCategoryGap: 50,
                itemStyle: {
                    // 修改第一组柱子的圆角
                    barBorderRadius: 20,
                    color: function(params) {
                        return myColor[params.dataIndex]
                    }
                },
                // 显示柱子内的文字
                label: {
                    show: true,
                    position: "inside",
                    formatter: "{c}%"
                }
            },
            {
                yAxisIndex: 1,
                name: '框',
                type: 'bar',
                data: [100, 100, 100, 100, 100],
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    // 修改第二组柱子的圆角
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15,
                    color: "none"
                },
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

// 折线图1模块
(function() {
    var myChart = echarts.init(document.querySelector(".line .chart"));
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
    };
    option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: 'axis'
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#4c9bfd"
            },
            // 如果series 里面设置了name，此时图例组件的data可以省略
            // data: ["邮件营销", "联盟广告"]
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true, // 显示边框
            borderColor: "#012f4a", // 边框颜色
            containLabel: true
        },
        xAxis: {
            type: 'category',
            // 去除轴内间距
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除轴线
            axisLine: {
                show: false
            },
            // 去除刻度线
            axisTick: {
                show: false
            },
            // 修饰标签的颜色
            axisLabel: {
                color: "rgba(255,255,255,.7)"
            },
            boundaryGap: false,
        },
        yAxis: {
            type: 'value',
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰标签的颜色
            axisLabel: {
                color: "rgba(255,255,255,.7)"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [{
                name: '新增粉丝',
                type: 'line',
                // 是否让线条圆滑显示
                smooth: true,
                data: data.year[0]
            },
            {
                name: '新增游客',
                type: 'line',
                // 是否让线条圆滑显示
                smooth: true,
                data: data.year[1]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

// 折线图2模块
(function() {
    var myChart = echarts.init(document.querySelector(".line1 .chart"));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#dddc6b'
                }
            }
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: [
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30"
            ]
        }],
        yAxis: [{
            type: 'value',
            axisTick: { show: false },
            // y轴轴线
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            // y轴分割线
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            // 标签文字颜色
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                }
            },
        }],
        series: [{
                name: '播放量',
                type: 'line',
                smooth: true,
                // 设置拐点  小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 开始不显示圆点，鼠标经过显示
                showSymbol: false,
                // 填充区域
                areaStyle: {
                    // 渐变色
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1, [{
                                offset: 0,
                                // 渐变色的起始颜色
                                color: "rgba(1, 132, 213, 0.4)"
                            },
                            {
                                offset: 0.8,
                                // 渐变色的结束颜色
                                color: "rgba(1, 132, 213, 0.1)"
                            }
                        ],
                        false
                    ),
                    // 阴影颜色
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                emphasis: {
                    focus: 'series'
                },
                lineStyle: {
                    color: "#0184d5",
                    width: 2
                },
                // 折线拐点标志的样式
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                data: [
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40
                ]
            },
            {
                name: '转发量',
                type: 'line',
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1, [{
                                offset: 0,
                                color: "rgba(0, 216, 135, 0.4)"
                            },
                            {
                                offset: 0.8,
                                color: "rgba(0, 216, 135, 0.1)"
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                emphasis: {
                    focus: 'series'
                },
                lineStyle: {
                    color: "#00d887",
                    width: 2
                },
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                data: [
                    50,
                    30,
                    50,
                    60,
                    10,
                    50,
                    30,
                    50,
                    60,
                    40,
                    60,
                    40,
                    80,
                    30,
                    50,
                    60,
                    10,
                    50,
                    30,
                    70,
                    20,
                    50,
                    10,
                    40,
                    50,
                    30,
                    70,
                    20,
                    50,
                    10,
                    40
                ]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

// 饼图1模块
(function() {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            // 提示框浮层的位置，
            position: function(p) {
                //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];;
            }
        },
        legend: {
            // 距离顶部90%
            top: "90%",
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "10"
            }
        },
        series: [{
            color: [
                "#065aab",
                "#066eab",
                "#0682ab",
                "#0696ab",
                "#06a0ab",
                "#06b4ab",
                "#06c8ab",
                "#06dcab",
                "#06f0ab"
            ],
            name: '年龄分布',
            type: 'pie',
            // radius第一个值是内圆的半径，第二个值是外圆的半径
            radius: ['40%', '60%'],
            center: ["50%", "42%"],
            // 图形上的文字
            label: {
                show: false
            },
            // 链接文字和图形的线
            labelLine: {
                show: false
            },
            data: [
                { value: 1, name: "0岁以下" },
                { value: 4, name: "20-29岁" },
                { value: 2, name: "30-39岁" },
                { value: 2, name: "40-49岁" },
                { value: 1, name: "50岁以上" }
            ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

// 饼图2模块
(function() {
    var myChart = echarts.init(document.querySelector(".pie1  .chart"));
    var option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            top: 'bottom',
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "10"
            }
        },
        series: [{
            color: [
                "#006cff",
                "#60cda0",
                "#ed8884",
                "#ff9f7f",
                "#0096ff",
                "#9fe6b8",
                "#32c5e9",
                "#1d9dff"
            ],
            name: '点位统计',
            type: 'pie',
            // 如果radius是百分比则必须加引号
            radius: ["10%", "70%"],
            center: ["50%", "42%"],
            roseType: 'radius',
            // itemStyle: {
            //     borderRadius: 8
            // },
            // 修饰饼形图文字相关的样式 label对象
            label: {
                fontSize: 10
            },
            // 修饰引导线样式
            labelLine: {
                // 连接到图形的线长度
                length: 10,
                // 连接到文字的线长度
                length2: 10
            },
            data: [
                { value: 20, name: "云南" },
                { value: 26, name: "北京" },
                { value: 24, name: "山东" },
                { value: 25, name: "河北" },
                { value: 20, name: "江苏" },
                { value: 25, name: "浙江" },
                { value: 30, name: "深圳" },
                { value: 42, name: "广东" }
            ],
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();