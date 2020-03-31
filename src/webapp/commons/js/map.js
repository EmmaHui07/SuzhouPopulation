var zhen_url = "http://localhost:6080/arcgis/rest/services/SZ/MapServer/0";   //镇
var quxian_url = "http://localhost:6080/arcgis/rest/services/SZ/MapServer/1";   //区县
var url = "http://localhost:6080/arcgis/rest/services/SZ/MapServer"
$(function () {
    initMap();
});

//初始化地图
function initMap() {
    require(["esri/Map",
        "esri/views/MapView",
        "esri/layers/MapImageLayer",
        "esri/layers/FeatureLayer",
        "dojo/domReady!"], function (Map, MapView, MapImageLayer, FeatureLayer) {

        var map = new Map({
            basemap: "streets"
        });
        //加载图层
        var layer = new MapImageLayer({
            url: url
        });
        //map.add(layer);

        var layer_zhen = new FeatureLayer({
            url: zhen_url
        });
        map.add(layer_zhen);

        var view = new MapView({
            container: "mapView",
            map: map,
            zoom: 9,
            center: [121.50, 31.40],
            slider: false,
            maxZoom: 18,
            minZoom: 5
        });
        view.ui.remove('attribution')//清除底部powered by ESRI
        view.when(
            function () {
                initLayersController();
            },
            function (error) {
                console.log("wrong at view.when()!");
            });
    });

}

function initLayersController() {

}