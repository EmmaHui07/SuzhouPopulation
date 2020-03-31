function resize() {
    bodyHeight = document.body.offsetHeight;
    pageSize = parseInt((bodyHeight - 100) / 50);
    $("#tb_data").height(bodyHeight-55-60);
    $('#tb_data').bootstrapTable('refresh',{silent:true});
}
$(function () {
    resize();
    window.addEventListener('resize', resize);
    $('#tb_data').bootstrapTable({
        url: g_BasePath + "admin/ais/list",
        method: 'get', //请求方式（*）
        toolbar: '#toolbar', //工具按钮用哪个容器
        striped: true, //是否显示行间隔色
        cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true, //是否显示分页（*）
        paginationLoop:false,//设置为 true 启用分页条无限循环的功能
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
        paginationFirstText:"首页",
        paginationPreText:"上一页",
        paginationNextText:"下一页",
        paginationLastText:"末页",
        search: false, //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        strictSearch: true,
        showColumns: true, //是否显示所有的列
        showRefresh: true, //是否显示刷新按钮
        minimumCountColumns: 2, //最少允许的列数
        clickToSelect: true, //是否启用点击选中行
        //height: bodyHeight, //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "shipMMSI", //每一行的唯一标识，一般为主键列
        showToggle: true, //是否显示详细视图和列表视图的切换按钮
        cardView: false, //是否显示详细视图
        detailView: false, //是否显示父子表
        //设置为undefined可以获取pageNumber，pageSize，searchText，sortName，sortOrder
        //设置为limit可以获取limit, offset, search, sort, order
        queryParamsType: "undefined",
        columns: [{
            align: "center",
            title: '编号',//标题  可不加
            formatter: function (value, row, index) {
                var pageSize = $('#tb_data').bootstrapTable('getOptions').pageSize;     //通过table的#id 得到每页多少条
                var pageNumber = $('#tb_data').bootstrapTable('getOptions').pageNumber; //通过table的#id 得到当前第几页
                return pageSize * (pageNumber - 1) + index + 1;    // 返回每条的序号： 每页条数 *（当前页 - 1 ）+ 序号
            },
            valign: "middle",
            cellStyle: function () {
                return {
                    classes: '',
                    css: {"font-size": "15px"}
                };
            }
        }, {
            width: 120,
            align: "center",
            field: 'year',
            title: '年份',
            valign: "middle",
            formatter:function(value,row,index){
                return  '<a class="openMapA" onClick=openMap(\'' + value + '\')>'+value+'</a>'
            },
            cellStyle: function () {
                return {
                    classes: '',
                    css: {"font-size": "15px"}
                };
            }
        }, {
            width: 100,
            halign: 'center',
            align: "",
            field: '0-14岁',
            title: '中文名',
            valign: "middle",
            sortable:true,
            cellStyle: function () {
                return {
                    classes: '',
                    css: {"font-size": "15px"}
                };
            }
        }, {
            width: 150,
            halign: 'center',
            align: "left",
            field: '',
            title: '家庭户规模',
            valign: "middle",
            cellStyle: function () {
                return {
                    classes: '',
                    css: {"font-size": "15px"}
                };
            }

        }, {
            width: 250,
            halign: 'center',
            align: "left",
            field: '',
            title: '劳动适龄人口（男）',
            valign: "middle",
            cellStyle: function () {
                return {
                    classes: '',
                    css: {"font-size": "15px"}
                };
            }

        },{
            width: 100,
            align: "center",
            field: '',
            title: '劳动适龄人口（女）',
            valign: "middle",
            cellStyle: function () {
                return {
                    classes: '',
                    css: {"font-size": "15px"}
                };
            }
        }, {
            width: 100,
            align: "center",
            field: '',
            title: '受教育总人口',
            valign: "middle",
            cellStyle: function () {
                return {
                    classes: '',
                    css: {"font-size": "15px"}
                };
            }
        }, {
            width: 300,
            field: '',
            title: "操作",
            align: "center",
            valign: "middle",
            formatter: function fun(value, row, index) {
                var f ='<button style="background-color: #39ADB4" class="btn btn-primary btn-sm" >查看详细</button>';
                return f;
            },
            cellStyle: function () {
                return {
                    classes: '',
                    css: {"font-size": "15px"}
                };
            }
        }],
        onError: function (e) {}
    });

    //搜索
    $("#button_search").click(function () {
        $('#tb_data').bootstrapTable('refreshOptions',{pageNumber:1})
        $("#tb_data").bootstrapTable('refresh',{silent: true});
    });
    $("#search_year").keypress(function (key) {
        if (key.charCode == 13) {
            $('#tb_data').bootstrapTable('refreshOptions',{pageNumber:1})
            $("#tb_data").bootstrapTable('refresh',{silent: true});
        }
    });

});

//新增数据
function addData() {

}