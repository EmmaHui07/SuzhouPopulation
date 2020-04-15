function resize() {
    bodyHeight = document.body.offsetHeight;
    pageSize = parseInt((bodyHeight - 100) / 50);
    $('#tb_censusData').bootstrapTable('refresh', {silent: true});
}

$(function () {
    resize();
    window.addEventListener('resize', resize);
    $('#tb_censusData').bootstrapTable({
        url: g_BasePath + "admin/ais/list",
        method: 'get', //请求方式（*）
        toolbar: '#toolbar', //工具按钮用哪个容器
        striped: true, //是否显示行间隔色
        cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true, //是否显示分页（*）
        paginationLoop: false,//设置为 true 启用分页条无限循环的功能
        sortable: true, //是否启用排序
        sortOrder: "asc", //排序方式
        queryParams: function (params) {
            var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
                pageSize: params.pageSize, //页面大小
                pageNumber: params.pageNumber, //页码,
                searchValue: $("#search_year").val()
            };
            return temp;
        },
        sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1, //初始化加载第一页，默认第一页
        pageSize: 10, //每页的记录行数（*）
        pageList: [10, 15], //可供选择的每页的行数（*）
        paginationFirstText: "首页",
        paginationPreText: "上一页",
        paginationNextText: "下一页",
        paginationLastText: "末页",
        search: false, //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        strictSearch: true,
        showColumns: true, //是否显示所有的列
        showRefresh: true, //是否显示刷新按钮
        minimumCountColumns: 2, //最少允许的列数
        clickToSelect: true, //是否启用点击选中行
        uniqueId: "id", //每一行的唯一标识，一般为主键列
        showToggle: true, //是否显示详细视图和列表视图的切换按钮
        cardView: false, //是否显示详细视图
        detailView: false, //是否显示父子表
        queryParamsType: "undefined",
        columns: [
            {
                width: 120,
                align: "center",
                title: '编号',//标题  可不加
                formatter: function (value, row, index) {
                    var pageSize = $('#tb_censusData').bootstrapTable('getOptions').pageSize;     //通过table的#id 得到每页多少条
                    var pageNumber = $('#tb_censusData').bootstrapTable('getOptions').pageNumber; //通过table的#id 得到当前第几页
                    return pageSize * (pageNumber - 1) + index + 1;    // 返回每条的序号： 每页条数 *（当前页 - 1 ）+ 序号
                },
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 120,
                align: "center",
                field: 'year',
                title: '年份',
                valign: "middle",
                formatter: function (value, row, index) {
                    return value;
                },
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 120,
                align: "center",
                field: 'zrk',
                title: '总人口（人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 120,
                align: "center",
                field: 'nan',
                title: '男（人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 120,
                align: "center",
                field: 'nv',
                title: '女（人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 120,
                align: "center",
                field: 'jthgm',
                title: '家庭户规模（人/户）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 100,
                halign: 'center',
                align: "",
                field: 'children',
                title: '0-14岁人数（万人）',
                valign: "middle",
                sortable: true,
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 150,
                halign: 'center',
                align: "left",
                field: 'youth',
                title: '15-65岁人数（万人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 250,
                halign: 'center',
                align: "left",
                field: 'old',
                title: '65岁以上（万人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 100,
                align: "center",
                field: 'man',
                title: '劳动适龄-男性(16-59岁)（万人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 100,
                align: "center",
                field: 'lady',
                title: '劳动适龄-女性(16-54岁)（万人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 100,
                align: "center",
                field: 'hz',
                title: '汉族（万人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 100,
                align: "center",
                field: 'hzbl',
                title: '汉族占比（%）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 100,
                align: "center",
                field: 'ssmz',
                title: '少数民族（万人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 100,
                align: "center",
                field: 'ssmzbl',
                title: '少数民族占比（%）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 100,
                align: "center",
                field: 'eduzrk',
                title: '受教育程度的人口总数（万人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 100,
                align: "center",
                field: 'xx',
                title: '小学（万人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 100,
                align: "center",
                field: 'cz',
                title: '初中（万人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 100,
                align: "center",
                field: 'gz',
                title: '高中（万人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 100,
                align: "center",
                field: 'dxbk',
                title: '大学本科（万人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 100,
                align: "center",
                field: 'dxzk',
                title: '大学专科（万人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 100,
                align: "center",
                field: 'yjs',
                title: '研究生（万人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 100,
                align: "center",
                field: 'czrk',
                title: '城镇人口（万人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 100,
                align: "center",
                field: 'xcrk',
                title: '乡村人口（万人）',
                valign: "middle",
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            },
            {
                width: 300,
                field: '',
                title: "操作",
                align: "center",
                valign: "middle",
                formatter: function fun(value, row, index) {
                    var f = '<button style="background-color: #39ADB4" class="btn btn-primary btn-sm" onclick="checkDetail()">查看详细</button>';
                    return f;
                },
                cellStyle: function () {
                    return {
                        classes: '',
                        css: {"font-size": "15px"}
                    };
                }
            }],
        onError: function (e) {
        }
    });

    hideColumn();
    //搜索
    $("#button_search").click(function () {
        $('#tb_censusData').bootstrapTable('refreshOptions', {pageNumber: 1})
        $("#tb_censusData").bootstrapTable('refresh', {silent: true});
    });
    $("#search_year").keypress(function (key) {
        if (key.charCode == 13) {
            $('#tb_censusData').bootstrapTable('refreshOptions', {pageNumber: 1})
            $("#tb_censusData").bootstrapTable('refresh', {silent: true});
        }
    });

});

function hideColumn() {
    $('#tb_censusData').bootstrapTable('hideColumn', 'nan');
    $('#tb_censusData').bootstrapTable('hideColumn', 'nv');
    $('#tb_censusData').bootstrapTable('hideColumn', 'jthgm');
    $('#tb_censusData').bootstrapTable('hideColumn', 'children');
    $('#tb_censusData').bootstrapTable('hideColumn', 'youth');
    $('#tb_censusData').bootstrapTable('hideColumn', 'old');
    $('#tb_censusData').bootstrapTable('hideColumn', 'man');
    $('#tb_censusData').bootstrapTable('hideColumn', 'lady');
    $('#tb_censusData').bootstrapTable('hideColumn', 'hz');
    $('#tb_censusData').bootstrapTable('hideColumn', 'ssmz');
    $('#tb_censusData').bootstrapTable('hideColumn', 'xx');
    $('#tb_censusData').bootstrapTable('hideColumn', 'cz');
    $('#tb_censusData').bootstrapTable('hideColumn', 'gz');
    $('#tb_censusData').bootstrapTable('hideColumn', 'dxbk');
    $('#tb_censusData').bootstrapTable('hideColumn', 'dxzk');
    $('#tb_censusData').bootstrapTable('hideColumn', 'yjs');
}

//查看详细信息
function checkDetail() {

    
}

//新增数据
function addData() {
    var params = $('#censusForm').serialize();
    var exaturl = g_BasePath + "admin/ais/add";
    $.ajax({
        type: 'get',
        url: exaturl,
        dataType: 'json',
        data: params,
        error: function (data) {
            alert('新增失败');
        },
        success: function (data) {
            alert('新增成功');
        }
    })


}