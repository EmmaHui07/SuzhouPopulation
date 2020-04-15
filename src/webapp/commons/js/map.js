var quxian_url = baseHttp + "arcgis/rest/services/SZ/MapServer/0";   //区县
var zhen_url = baseHttp +  "arcgis/rest/services/SZ/MapServer/1";   //镇
var url_all = baseHttp + "arcgis/rest/services/SZ/MapServer";

$(function () {
    initMap();
});
var quxianList,zhenList;
var map,view,graphicsLayer;
//初始化地图
function initMap() {
    require(["esri/map",
            "esri/layers/ArcGISDynamicMapServiceLayer",
            "esri/layers/GraphicsLayer",
            "esri/layers/MapImageLayer",
            "esri/layers/FeatureLayer",
            "esri/tasks/QueryTask",
            "esri/tasks/query",
            "esri/symbols/SimpleLineSymbol",
            "esri/symbols/SimpleFillSymbol",
            "esri/graphic",
            'dojo/on',
            "dojo/dom",
            "dojo/domReady!"],
        function (Map, ArcGISDynamicMapServiceLayer, GraphicsLayer,  MapImageLayer, QueryTask, Query,
                  on, dom, SimpleLineSymbol, SimpleFillSymbol) {

            graphicsLayer = new GraphicsLayer();

            map = new Map("mapView", {
                basemap: "gray",
                center: [121.10, 31.40],
                zoom: 9,
                logo:false
            });

            var layer = new ArcGISDynamicMapServiceLayer(url_all);
            map.addLayer(layer);
            var layer_all = new MapImageLayer({
                url: url_all
            });
            //map.addLayer(layer_all);


            //查询区县街镇

            // var Ob_district = [];
            // //(所有)区县查询
            // var queryTask_quxian = new QueryTask(quxian_url);
            // var query_quxian = new Query({
            //     returnGeometry: true,
            //     outFields: ["*"]
            // });
            // query_quxian.where = "shi = '苏州市'";
            // queryTask_quxian.execute(query_quxian, function (results) {
            //     quxianList = results.features;
            //
            //     //(所有)街镇查询
            //     var queryTask_zhen = new QueryTask(zhen_url);
            //     var query_zhen = new Query({
            //         returnGeometry: true,
            //         outFields: ["*"]
            //     });
            //     query_zhen.where = "shi = '苏州市'";
            //     queryTask_zhen.execute(query_zhen,function (results) {
            //         zhenList = results.features;
            //         queryTown(quxianList,zhenList);
            //     });
            // });
            // function queryTown(quxianList,zhenList) {
            //     //获得所有区县名称集合
            //     for (var i = 0; i < quxianList.length; i++) {
            //         var quname = quxianList[i].attributes.NAME;
            //         var object = {};
            //         object["DistrictName"] = quname;
            //         var zhens = [];
            //         for (var j = 0; j < zhenList.length; j++) {
            //             if(zhenList[j].attributes.xian == quname){
            //                 zhens.push(zhenList[j]);
            //             }
            //         }
            //         object["Districtzhen"] = zhens;
            //         Ob_district.push(object);
            //     }
            //
            //     if (Ob_district != []) {
            //         initLayers(Ob_district);
            //     }
            // }

            //创建线符号
            var lineSymbol = {
                type: "simple-line",  // autocasts as new SimpleLineSymbol()
                color: "lightblue",
                width: "2px",
                style: "short-dot"
            };
            //创建面符号
            var fillSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_NULL, lineSymbol);

            //点击菜单树

            // view.when(function(){
            //     //点击区
            //     $('.district').on('click',function(){
            //         var districtname = $(this).text();
            //         // for(var i=0;i< quxianList.length;i++){
            //         //     if(quxianList[i].attributes.NAME == districtname){
            //         //         var graphic = new Graphic(quxianList[i].geometry, fillSymbol);
            //         //         graphic.setAttribute(quxianList[i].getAttribute());
            //         //
            //         //         //var graphic = quxianList[i];
            //         //         //graphic.setSymbol(fillSymbol);
            //         //         //map.graphics.clear();
            //         //         //map.graphics.add(graphic);
            //         //
            //         //         graphicsLayer.removeAll();
            //         //         graphicsLayer.add(graphic);
            //         //         //var gGeoExt = graphic.geometry.getExtent();
            //         //         //map.setExtent(gGeoExt);
            //         //         view.extent = graphicsLayer.fullExtent;
            //         //     }
            //         // }
            //
            //         var queryTask_dis = new QueryTask({"url":quxian_url});
            //         var query_dis = new Query({
            //             returnGeometry: true,
            //             outFields: ["*"]
            //         });
            //         query_dis.where = "NAME = '" + districtname + "'";
            //         queryTask_dis.execute(query_dis).then(function (results) {
            //             graphicsLayer.removeAll();
            //             var graphic = results.features;
            //             graphic.symbol = (fill);
            //             graphicsLayer.add(graphic);
            //         });
            //     });
            //     //点击镇
            //     $('.town').on('click',function(){
            //         var townname = $(this).text();
            //         for(var i=0;i< zhenList.length;i++){
            //             if(zhenList[i].attributes.NAME == townname){
            //                 graphicsLayer.removeAll();
            //                 graphicsLayer.add(zhenList[i]);
            //                 view.extent = graphicsLayer.fullExtent;
            //             }
            //
            //         }
            //
            //     });
            // });

        });
}


function initLayers(Ob_district) {
    var str = "";
    //加区县 & 镇
    for(var i=0;i<Ob_district.length;i++){
        if(Ob_district[i].Districtzhen.length > 1){
            var str1="";
            for(var j=0;j < Ob_district[i].Districtzhen.length;j++){
                str1 += "<li class='town'><a href='#0'>"+ Ob_district[i].Districtzhen[j].attributes.NAME + "</a></li>"
            }
            str += " <li class='has-children'>" +
                "<input type='checkbox' name ='sub-group-"+ i +"' id='sub-group-"+ i +"' >" +
                "<label for='sub-group-"+ i +"'  class='district'>" + Ob_district[i].DistrictName + "</label>" +
                "<ul>" + str1 +
                "</ul>" +
                "</li>";
        }else {
            str += "<li><label class='district'>" + Ob_district[i].DistrictName + "</label></li>";
        }
    }
    //仅加区县
    // for(var i=0;i<Ob_district.length;i++){
    //     str += "<li><label>" + Ob_district[i].DistrictName + "</label></li>";
    // }

    $("#qulist").append(str);

}

function itemsClickEvent(QueryTask, Query) {

}
