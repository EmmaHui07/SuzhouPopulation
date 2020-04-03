var quxian_url = baseHttp + "arcgis/rest/services/SZ/MapServer/0";   //区县
var zhen_url = baseHttp +  "arcgis/rest/services/SZ/MapServer/1";   //镇
var url_all = baseHttp + "arcgis/rest/services/SZ/MapServer";

$(function () {
    initMap();
});
var quxianList,zhenList;

//初始化地图
function initMap() {
    require(["esri/Map",
            "esri/layers/GeoJSONLayer",
            "esri/layers/MapImageLayer",
            "esri/views/MapView",
            "esri/tasks/QueryTask",
            "esri/tasks/support/Query",
            "esri/layers/FeatureLayer",
            "esri/renderers/SimpleRenderer",
            "dojo/domReady!"],
        function (Map, GeoJSONLayer, MapImageLayer, MapView, QueryTask, Query) {
            var map = new Map({
                basemap: "gray",
            });
            var layer_all = new MapImageLayer({
                url: url_all
            });
            map.add(layer_all);

            const view = new MapView({
                container: "mapView",
                map: map,
                zoom: 9,
                center: [121.10, 31.40]
            });
            view.ui.remove('attribution');//清除底部powered by ESRI

            var Ob_district = [];
            //区县查询
            var queryTask_quxian = new QueryTask({
                url: quxian_url
            });
            var query_quxian = new Query({
                returnGeometry: true,
                outFields: ["*"]
            });
            query_quxian.where = "shi = '苏州市'";
            queryTask_quxian.execute(query_quxian).then(function (results) {
                quxianList = results.features;

                //街镇查询
                var queryTask_zhen = new QueryTask({
                    url: zhen_url
                });
                var query_zhen = new Query({
                    returnGeometry: true,
                    outFields: ["*"]
                });
                query_zhen.where = "shi = '苏州市'";
                queryTask_zhen.execute(query_zhen).then(function (results) {
                    zhenList = results.features;
                    queryTown(quxianList,zhenList);
                });
            });

            function queryTown(quxianList,zhenList) {
                //获得所有区县名称集合
                for (var i = 0; i < quxianList.length; i++) {
                    var quname = quxianList[i].attributes.NAME;
                    var object = {};
                    object["DistrictName"] = quname;
                    var zhens = [];
                    for (var j = 0; j < zhenList.length; j++) {
                        if(zhenList[j].attributes.xian == quname){
                            zhens.push(zhenList[j]);
                        }
                    }
                    object["Districtzhen"] = zhens;
                    Ob_district.push(object);
                }

                if (Ob_district != []) {
                    initLayers(Ob_district);
                }
            }

        });
}


function initLayers(Ob_district) {
    var str = "";
    //加区县 & 镇
    for(var i=0;i<Ob_district.length;i++){
        if(Ob_district[i].Districtzhen.length > 1){
            var str1="";
            for(var j=0;j < Ob_district[i].Districtzhen.length;j++){
                str1 += "<li><a href='#0'>"+ Ob_district[i].Districtzhen[j].attributes.NAME + "</a></li>"
            }
            str += " <li class='has-children'>" +
                "<input type='checkbox' name ='sub-group-"+ i +"' id='sub-group-"+ i +"' >" +
                "<label for='sub-group-"+ i +"'>" + Ob_district[i].DistrictName + "</label>" +
                "<ul>" + str1 +
                "</ul>" +
                "</li>";
        }else {
            str += "<li><label>" + Ob_district[i].DistrictName + "</label></li>";
        }
    }


    //仅加区县
    // for(var i=0;i<Ob_district.length;i++){
    //     str += "<li><label>" + Ob_district[i].DistrictName + "</label></li>";
    // }

    $("#qulist").append(str);

}
