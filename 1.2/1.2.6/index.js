var googleMap  = {
  show: function() {
    console.log('开始渲染谷歌地图')
  }
}

var baiduMap  = {
  show: function() {
    console.log('开始渲染百度地图')
  }
}

var sosoMap  = {
  show: function() {
    console.log('开始渲染sousou地图')
  }
}

/**
 * 这种实现极其不好 当引入一个新的地图时就得堆砌新的条件分支
 * @param {*} type 
 */
// var renderMap = function( type ) {
//   if( type === 'google'){
//     googleMap.show();
//   } else if ( type === 'baidu'){
//     baiduMap.show();
//   }
// }

// renderMap( 'google' )
// renderMap( 'baidu' )

/**
 * 既然都有show方法 那么直接调用对象的show方法 不关心对象是谁 只关心是否有show方法
 * 
 * @param {*} map 
 */
var renderMap = function( map ) {
  if(map.show instanceof Function) map.show();
}

renderMap(baiduMap);
renderMap(googleMap);
renderMap(sosoMap);


