$(function () {
    initMap();
    initTables();
});

//初始化地图
function initMap() {
    require(["esri/Map", "esri/views/MapView"], function (Map, MapView) {
        var map = new Map({
            basemap: "streets-night-vector"
        });

        var view = new MapView({
            container: "viewDiv",
            map: map,
            zoom: 9,
            center: [121.10, 31.40],
            slider: false,
            maxZoom: 18,
            minZoom: 5
        });
        view.ui.remove('attribution')

    });
}

var myChart_popchange,myChart_city,myChart_sex,myChart_marrage,myChart_producer;
function initTables() {
    initTableBottom();
    initTablePopChange();
    initTableCity();
    initTableSex();
    initTableMarrage();
    initTableProducer();
    window.onresize = function () {
        myChart_popchange.resize();
        myChart_city.resize();
        myChart_sex.resize();
        myChart_marrage.resize();
        myChart_producer.resize();
    }
}

//底部表格绘制
function initTableBottom() {
    var data1 = [
        {
            name: '企业',
            value: 2885494,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default',
                        opacity: 0.8, // 图表中各个图区域的透明度
                        color: "#1686c2" // 图表中各个图区域的颜色
                    }
                }
            },
        }, {
            name: '事业',
            value: 187079
        }, {
            name: '机关',
            value: 63645
        }, {
            name: '其他',
            value: 17978
        }];
    var data2 = [
        {
            name: '内资单位',
            value: 1086769
        }, {
            name: '国有单位',
            value: 295169
        }, {
            name: '集体单位',
            value: 57949
        }, {
            name: '股份合作单位',
            value: 6518
        }, {
            name: '联营单位',
            value: 1362
        }, {
            name: '有限责任公司',
            value: 511972
        }, {
            name: '股份有限公司',
            value: 195733
        }, {
            name: '其他单位',
            value: 18066
        }, {
            name: '港澳台商投资单位',
            value: 648800
        }, {
            name: '外商投资单位',
            value: 1418627
        }];
    var data3 = [
        {
            name: '农林牧渔业',
            value: 197,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default',
                        opacity: 0.8, // 图表中各个图区域的透明度
                        color: "#1686c2" // 图表中各个图区域的颜色
                    }
                }
            },
        }, {
            name: '采矿业',
            value: 1026
        }, {
            name: '制造业',
            value: 2194249
        }, {
            name: '电力、燃气及水的生产和供应业',
            value: 17003
        }, {
            name: '建筑业',
            value: 177528
        }, {
            name: '批发和零售业',
            value: 119948
        }, {
            name: '交通运输、仓储和邮政业',
            value: 69539
        }, {
            name: '住宿和餐饮业',
            value: 38217
        }, {
            name: '信息传输、软件和信息技术服务业',
            value: 44843
        }, {
            name: '金融业',
            value: 63396
        }, {
            name: '房地产业',
            value: 54315
        }, {
            name: '租赁和商务服务业',
            value: 53840
        }, {
            name: '科学研究和技术服务业',
            value: 23237
        }, {
            name: '水利、环境和公共设施管理业',
            value: 21390
        }, {
            name: '居民服务和其他服务业',
            value: 8522
        }, {
            name: '教育',
            value: 96726
        }, {
            name: '卫生和社会工作 ',
            value: 63798
        }, {
            name: '文化、体育和娱乐业',
            value: 9871
        }, {
            name: '公共管理和社会组织业',
            value: 96551
        }];

    var dom = document.getElementById("chart_job");
    var myChart = echarts.init(dom);
    var option = {
        title: [
            {
                text: '分行业人员统计',
                textStyle: {
                    color: '#01cbf6',        //颜色
                    fontStyle: 'normal',     //风格
                    fontWeight: 'bold',    //粗细
                    fontFamily: 'Microsoft yahei',   //字体
                    fontSize: 15,     //大小
                    align: 'center'   //水平对齐
                },
                left: "10",      //位置
                top: "10",
                // rich: {
                //     img0: {
                //         height: 15,
                //         backgroundColor: {image: '../commons/image/table/title.png'}
                //     },
                //
                // }
            },
            {
                subtext: '按机构类型分',
                subtextStyle: {
                    color: '#f0f0f0',        //颜色
                    fontStyle: 'normal',     //风格
                    fontWeight: 'normal',    //粗细
                    fontFamily: 'Microsoft yahei',   //字体
                    fontSize: 13,     //大小
                    align: 'center'   //水平对齐
                },
                left: '16.67%',
                top: '80%',
                textAlign: 'center'
            },
            {
                subtext: '按登记注册类型分',
                subtextStyle: {
                    color: '#f0f0f0',        //颜色
                    fontStyle: 'normal',     //风格
                    fontWeight: 'normal',    //粗细
                    fontFamily: 'Microsoft yahei',   //字体
                    fontSize: 13,     //大小
                    align: 'center'   //水平对齐
                },
                left: '50%',
                top: '80%',
                textAlign: 'center'
            },
            {
                subtext: '按行业分',
                subtextStyle: {
                    color: '#f0f0f0',        //颜色
                    fontStyle: 'normal',     //风格
                    fontWeight: 'normal',    //粗细
                    fontFamily: 'Microsoft yahei',   //字体
                    fontSize: 13,     //大小
                    align: 'center'   //水平对齐
                },
                left: '83.33%',
                top: '80%',
                textAlign: 'center'
            }],
        tooltip: {
            trigger: 'item',
            show: true
        },
        series: [
            {
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                data: data1,
                animation: true,
                label: {
                    position: 'outer',
                    alignTo: 'none',
                    bleedMargin: 5
                },
                left: 0,
                right: '66.6667%',
                top: 0,
                bottom: 0
            },
            {
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                data: data2,
                animation: true,
                label: {
                    position: 'outer',
                    alignTo: 'labelLine',
                    bleedMargin: 5
                },
                left: '33.3333%',
                right: '33.3333%',
                top: 0,
                bottom: 0
            },
            {
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                data: data3,
                animation: true,
                label: {
                    position: 'outer',
                    alignTo: 'edge',
                    margin: 20,
                    // normal: {
                    //     formatter(v) {
                    //         let text = v.name;
                    //         if (text.length <= 8) {
                    //             return text;
                    //         } else if (text.length > 8 && text.length <= 16) {
                    //             return text = `${text.slice(0, 8)}\n${text.slice(8)}`
                    //         } else if (text.length > 16 && text.length <= 24) {
                    //             return text = `${text.slice(0, 8)}\n${text.slice(8, 16)}\n${text.slice(16)}`
                    //         } else if (text.length > 24 && text.length <= 30) {
                    //             return text = `${text.slice(0, 8)}\n${text.slice(8, 16)}\n${text.slice(16, 24)}\n${text.slice(24)}`
                    //         } else if (text.length > 30) {
                    //             return text = `${text.slice(0, 8)}\n${text.slice(8, 16)}\n${text.slice(16, 24)}\n${text.slice(24, 30)}\n${text.slice(30)}`
                    //         }
                    //     },
                    // }
                },
                left: '66.6667%',
                right: 0,
                top: 0,
                bottom: 0
            }
            ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

//绘制人口变化雷达图
function initTablePopChange() {
    var dom = document.getElementById("chart_popchange");
    myChart_popchange = echarts.init(dom);
    var option = {
        color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae'], //环形图每块的颜色
        title: {
            text: '人口变化雷达图',
            textStyle: {
                color: '#01cbf6',        //颜色
                fontStyle: 'normal',     //风格
                fontWeight: 'bold',    //粗细
                fontFamily: 'Microsoft yahei',   //字体
                fontSize: 15,     //大小
                align: 'center'   //水平对齐
            },
            left: "10",      //位置
            top: "10"
        },
        tooltip: {
            trigger: 'item',
            show: true,
            position: ['90%', '10%']
        },
        legend:[
            {
                orient: 'horizontal',
                x : '5%',
                y : '15%',
                align: 'left',
                data: ['出生人数'],
                itemHeight:10,
                itemWidth:15,
                textStyle:{
                    fontSize: 15,
                    color:'#c23531'
                }
            },
            {
                orient: 'horizontal',
                x : '5%',
                y : '20%',
                align: 'left',
                data: ['死亡人数'],
                itemHeight:10,
                itemWidth:15,
                textStyle:{
                    fontSize: 15,
                    color:'#5f7e90'
                }
            },
            {
                orient: 'horizontal',
                x : '5%',
                y : '25%',
                align: 'left',
                data: ['自然增长人数'],
                itemHeight:10,
                itemWidth:15,
                textStyle:{
                    fontSize: 15,
                    color:'#61a0a8'
                }
            },
            {
                orient: 'horizontal',
                x : '5%',
                y : '30%',
                align: 'left',
                data: ['迁入人数'],
                itemHeight:10,
                itemWidth:15,
                textStyle:{
                    fontSize: 15,
                    color:'#d48265'
                }
            },
            {
                orient: 'horizontal',
                x : '5%',
                y : '35%',
                align: 'left',
                data: ['迁出人数'],
                itemHeight:10,
                itemWidth:15,
                textStyle:{
                    fontSize: 15,
                    color:'#a6e1c8'
                }
            }
        ],
        radar: [
            {
                indicator: [
                    {name: '姑苏区', max: 15000},
                    {name: '吴中区', max: 15000},
                    {name: '相城区', max: 15000},
                    {name: '高新区', max: 15000},
                    {name: '工业园区', max: 15000},
                    {name: '吴江区', max: 15000},
                    {name: '常  熟', max: 15000},
                    {name: '张家港', max: 15000},
                    {name: '昆  山', max: 15000},
                    {name: '太  仓', max: 15000}
                ],
                center: ['65%', '60%'],
                radius: 60
            }
        ],
        series: [
            {
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                areaStyle: {},
                data: [
                    {
                        value: [6568, 7671, 5141, 4718, 6922, 7861, 8053, 8214, 9311, 3638],
                        name: '出生人数'
                    },
                    {
                        value: [5512, 3741, 2601, 1802, 1652, 6078, 8648, 6797, 4418, 3761],
                        name: '死亡人数'
                    },
                    {
                        value: [1056, 3930, 2540, 2916, 5270, 1783, -595, 1417, 4893, -123],
                        name: '自然增长人数'
                    },
                    {
                        value: [8101, 6452, 3261, 6201, 12727, 3233, 4088, 5119, 12942, 3733],
                        name: '迁入人数'
                    },
                    {
                        value: [7418, 4555, 692, 4328, 3698, 1612, 2401, 2710, 3966, 1168],
                        name: '迁出人数'
                    }
                ]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart_popchange.setOption(option, true);
    }
}

//绘制城镇人口比重图
function initTableCity() {
    var value = (732.95 / 1045.99);
    var data = [value, value, value];
    var dom = document.getElementById("chart_city");
    myChart_city = echarts.init(dom);
    var option = {
        backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
            {
                offset: 0,
                color: '#040913'
            }, {
                offset: 1,
                color: '#040913'
            }]),
        title: {
            text: (value * 100).toFixed(0) + '{a|%}',
            textStyle: {
                fontSize: 30,
                fontFamily: 'Microsoft Yahei',
                fontWeight: 'normal',
                color: '#bcb8fb',
                rich: {
                    a: {
                        fontSize: 20,
                    }
                }
            },
            x: 'center',
            y: '35%'
        },
        graphic: [
            {
                type: 'group',
                left: 'center',
                top: '60%',
                children: [{
                    type: 'text',
                    z: 100,
                    left: '10',
                    top: 'middle',
                    style: {
                        fill: '#aab2fa',
                        text: '城镇人口占比',
                        font: '15px Microsoft YaHei'
                    }
                }]
            }],
        series: [{
            type: 'liquidFill',
            radius: '80%',
            center: ['50%', '50%'],
            //  shape: 'roundRect',
            data: data,
            backgroundStyle: {
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0.5,
                    y2: 1,
                    colorStops: [{
                        offset: 1,
                        color: 'rgba(68, 145, 253, 0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(68, 145, 253, .25)'
                    }, {
                        offset: 0,
                        color: 'rgba(68, 145, 253, 1)'
                    }],
                    globalCoord: false
                },
            },
            outline: {
                borderDistance: 0,
                itemStyle: {
                    borderWidth: 20,
                    borderColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(69, 73, 240, 0)'
                        }, {
                            offset: 0.5,
                            color: 'rgba(69, 73, 240, .25)'
                        }, {
                            offset: 1,
                            color: 'rgba(69, 73, 240, 1)'
                        }],
                        globalCoord: false
                    },
                    shadowBlur: 10,
                    shadowColor: '#000',
                }
            },
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 1,
                    color: 'rgba(58, 71, 212, 0)'
                }, {
                    offset: 0.5,
                    color: 'rgba(31, 222, 225, .2)'
                }, {
                    offset: 0,
                    color: 'rgba(31, 222, 225, 1)'
                }],
                globalCoord: false
            },
            label: {
                normal: {
                    formatter: '',
                }
            }
        },]
    };
    if (option && typeof option === "object") {
        myChart_city.setOption(option, true);
    }
}

//绘制性别比重图
function initTableSex() {
    var dom = document.getElementById("chart_sex");
    myChart_sex = echarts.init(dom);
    var option = {
        color: ['#f36f8a', '#25f3e6'], //环形图每块的颜色
        title: {
            text: '性别比重',
            textStyle: {
                color: '#01cbf6',        //颜色
                fontStyle: 'normal',     //风格
                fontWeight: 'bold',    //粗细
                fontFamily: 'Microsoft yahei',   //字体
                fontSize: 15,     //大小
                align: 'center'   //水平对齐
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        // legend: {
        //     orient: 'vertical', //图例列表的布局朝向。 horizontal - 横向 ， vertical - 竖向
        //     left: 10,
        //     top: 30,
        //     data: [
        //         {
        //             name: '男',
        //             textStyle: {
        //                 color: '#25f3e6'//字体颜色
        //             }
        //         },
        //         {
        //             name: '女',
        //             textStyle: {
        //                 color: '#f36f8a'//字体颜色
        //             }
        //         }],
        // },
        series: [
            {
                name: '性别比重',
                type: 'pie',
                radius: ['30%', '75%'],  //饼图半径（内圈，外圈）
                center: ['50%', '55%'],  //饼图位置
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'normal'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 3189087, name: '女'},
                    {value: 3288967, name: '男'}
                ]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart_sex.setOption(option, true);
    }
}

//婚姻与生育历年统计
function initTableMarrage() {
    var dom = document.getElementById("chart_marrage");
    myChart_marrage = echarts.init(dom);
    var option = {
        title: {
            text: '婚姻与生育历年统计',
            textStyle: {
                color: '#01cbf6',        //颜色
                fontStyle: 'normal',     //风格
                fontWeight: 'bold',    //粗细
                fontFamily: 'Microsoft yahei',   //字体
                fontSize: 15,     //大小
                align: 'center'   //水平对齐
            },
            left: "10",      //位置
            top: "10"
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [
                {
                    name: '晚婚率',
                    textStyle: {
                        color: '#a9311e'//字体颜色
                    }
                }, {
                    name: '节育率',
                    textStyle: {
                        color: '#c8a22f'//字体颜色
                    }
                }, {
                    name: '计划生育率',
                    textStyle: {
                        color: '#9f81d2'//字体颜色
                    }
                }, {
                    name: '总和生育率',
                    textStyle: {
                        color: '#07a7d0'//字体颜色
                    }
                }],
            top: 30,
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false, /*改变x轴颜色*/
            axisLine: {
                lineStyle: {
                    color: '#f0f0f0',
                    width: 1, //这里是为了突出显示加上的
                }
            },
            data: ['姑苏区', '吴中区', '相城区', '高新区', '工业园区', '吴江区', '常  熟', '张家港', '昆  山', '太  仓']
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#f0f0f0',
                    width: 1, //这里是为了突出显示加上的
                }
            },
        },
        series: [
            {
                name: '晚婚率',
                type: 'line',
                itemStyle: {
                    normal: {
                        color: '#a9311e', //改变折线点的颜色
                        lineStyle: {
                            color: '#a9311e' //改变折线颜色
                        }
                    }
                },
                data: [0.8651, 0.6839, 0.6084, 0.7304, 0.8751, 0.6926, 0.6705, 0.7507, 0.7349, 0.6908]
            },
            {
                name: '节育率',
                type: 'line',
                itemStyle: {
                    normal: {
                        color: '#c8a22f', //改变折线点的颜色
                        lineStyle: {
                            color: '#c8a22f' //改变折线颜色
                        }
                    }
                },
                data: [0.8929, 0.8433, 0.8367, 0.8672, 0.8815, 0.824, 0.852, 0.8026, 0.8357, 0.7634]
            },
            {
                name: '计划生育率',
                type: 'line',
                itemStyle: {
                    normal: {
                        color: '#9f81d2', //改变折线点的颜色
                        lineStyle: {
                            color: '#9f81d2' //改变折线颜色
                        }
                    }
                },
                data: [0.9998, 0.9947, 0.9968, 0.9966, 0.9992, 0.9983, 0.9999, 0.9994, 0.9993, 0.9988]
            },
            {
                name: '总和生育率',
                type: 'line',
                itemStyle: {
                    normal: {
                        color: '#07a7d0', //改变折线点的颜色
                        lineStyle: {
                            color: '#07a7d0' //改变折线颜色
                        }
                    }
                },
                data: [0.0072, 0.0125, 0.0131, 0.0128, 0.0096, 0.0125, 0.0101, 0.0099, 0.0129, 0.0093]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart_marrage.setOption(option, true);
    }
}

//三大产业人员历年统计
function initTableProducer() {
    var dom = document.getElementById("chart_producer");
    myChart_producer = echarts.init(dom);
    var option = {
        legend: {
            top: 30,
            textStyle: {
                color: '#f0f0f0',
            },
        },
        title: {
            text: '三大产业人员历年统计',
            textStyle: {
                color: '#01cbf6',        //颜色
                fontStyle: 'normal',     //风格
                fontWeight: 'bold',    //粗细
                fontFamily: 'Microsoft yahei',   //字体
                fontSize: 15,     //大小
                align: 'center'   //水平对齐
            },
            left: "10",      //位置
            top: "10"
        },
        grid:{
            left:'10',
            right:'10',
            bottom:'10',
            containLabel:true
        },
        dataset: {
            source: [
                ['product', '第一产业', '第二产业', '第三产业'],
                ['姑苏区', 0.06, 17.94, 31.81],
                ['吴中区', 5.54, 45.58, 25.65],
                ['相城区', 1.12, 31.05, 15.75],
                ['高新区', 0.63, 24.28, 12.93],
                ['工业园区', 0.42, 33.15, 16.99],
                ['吴江区', 3.93, 55.26, 26.94],
                ['常  熟', 4.27, 66.86, 34.29],
                ['张家港', 4.67, 48.38, 24.74],
                ['昆  山', 1.91, 76.59, 37.22],
                ['太  仓', 2.74, 28.02, 15.58]
            ]
        },
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#f0f0f0',
                    width: 1, //这里是为了突出显示加上的
                }
            },
        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    color: '#f0f0f0',
                    width: 1, //这里是为了突出显示加上的
                }
            },
        },
        series: [
            {
                type: 'bar',
                itemStyle: {
                    //通常情况下：
                    normal: {
                        color: '#069bf6',  //设置所有柱状图颜色
                    },
                    //鼠标悬停时：
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            {
                type: 'bar',
                itemStyle: {
                    //通常情况下：
                    normal: {
                        color: '#35eaff',  //设置所有柱状图颜色
                    },
                    //鼠标悬停时：
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            {
                type: 'bar',
                itemStyle: {
                    //通常情况下：
                    normal: {
                        color: '#e4b71f',  //设置所有柱状图颜色
                    },
                    //鼠标悬停时：
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart_producer.setOption(option, true);
    }
}
