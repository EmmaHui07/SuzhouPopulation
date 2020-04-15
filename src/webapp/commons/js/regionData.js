function resize() {
    bodyHeight = document.body.offsetHeight;
    pageSize = parseInt((bodyHeight - 100) / 50);
    $('#tb_regionData').bootstrapTable('refresh', {silent: true});
}

$(function () {
    resize();
    window.addEventListener('resize', resize);
    $('#tb_regionData').bootstrapTable({
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
                    var pageSize = $('#tb_regionData').bootstrapTable('getOptions').pageSize;     //通过table的#id 得到每页多少条
                    var pageNumber = $('#tb_regionData').bootstrapTable('getOptions').pageNumber; //通过table的#id 得到当前第几页
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
                width: 100,
                halign: 'center',
                align: "",
                field: 'district',
                title: '区',
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
                field: 'cyry',
                title: '从业人员（万人）',
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
                field: 'dycy',
                title: '第一产业（万人）',
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
                field: 'decy',
                title: '第二产业（万人）',
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
                field: 'dscy',
                title: '第三产业（万人）',
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
                title: '常住人口（万人）',
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
                field: 'czrkbz',
                title: '城镇人口比重',
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
                field: 'zhs',
                title: '总户数（户）',
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
                width: 100,
                align: "center",
                field: 'man',
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
                width: 100,
                align: "center",
                field: 'lady',
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
                width: 100,
                align: "center",
                field: 'csrs',
                title: '出生人数（人）',
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
                field: 'csl',
                title: '出生率（%）',
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
                field: 'swrs',
                title: '死亡人数（人）',
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
                field: 'swl',
                title: '死亡率（%）',
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
                field: 'zrzzrs',
                title: '自然增长人数（人）',
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
                field: 'zrzzl',
                title: '自然增长率（%）',
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
                field: 'qres',
                title: '迁入人数（人）',
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
                field: 'qcrs',
                title: '迁出人数（人）',
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
                field: 'zyjhdj',
                title: '准予结婚登记（对）',
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
                field: 'ch',
                title: '初婚（人）',
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
                field: 'zh',
                title: '再婚（人）',
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
                field: 'lh',
                title: '离婚（人）',
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
                field: 'nxwhl',
                title: '女性晚婚率（%）',
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
                field: 'ylfvrs',
                title: '育龄妇女人数（万人）',
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
                field: 'jhsyl',
                title: '计划生育率（%）',
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
                field: 'dsziyxlzl',
                title: '独生子女证有效领证率（%）',
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
                field: 'jyl',
                title: '节育率（%）',
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
                field: 'zhsyl',
                title: '总和生育率（%）',
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
                    var f = '<button style="background-color: #39ADB4" class="btn btn-primary btn-sm" >查看详细</button>';
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
        $('#tb_regionData').bootstrapTable('refreshOptions', {pageNumber: 1})
        $("#tb_regionData").bootstrapTable('refresh', {silent: true});
    });
    $("#search_year").keypress(function (key) {
        if (key.charCode == 13) {
            $('#tb_regionData').bootstrapTable('refreshOptions', {pageNumber: 1})
            $("#tb_regionData").bootstrapTable('refresh', {silent: true});
        }
    });

});

function hideColumn() {
    $('#tb_regionData').bootstrapTable('hideColumn', 'dycy');
    $('#tb_regionData').bootstrapTable('hideColumn', 'decy');
    $('#tb_regionData').bootstrapTable('hideColumn', 'dscy');
    $('#tb_regionData').bootstrapTable('hideColumn', 'zhs');
    $('#tb_regionData').bootstrapTable('hideColumn', 'man');
    $('#tb_regionData').bootstrapTable('hideColumn', 'lady');
    $('#tb_regionData').bootstrapTable('hideColumn', 'zyjhdj');
    $('#tb_regionData').bootstrapTable('hideColumn', 'ch');
    $('#tb_regionData').bootstrapTable('hideColumn', 'zh');
    $('#tb_regionData').bootstrapTable('hideColumn', 'lh');
    $('#tb_regionData').bootstrapTable('hideColumn', 'nxwhl');
    $('#tb_regionData').bootstrapTable('hideColumn', 'ylfvrs');
    $('#tb_regionData').bootstrapTable('hideColumn', 'dsziyxlzl');
    $('#tb_regionData').bootstrapTable('hideColumn', 'jyl');
    $('#tb_regionData').bootstrapTable('hideColumn', 'csrs');
    $('#tb_regionData').bootstrapTable('hideColumn', 'swrs');
    $('#tb_regionData').bootstrapTable('hideColumn', 'zrzzrs');
}

//新增数据
function addData() {
    var params = $('#regionForm').serialize();
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