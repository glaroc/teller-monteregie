var Monteregie_map = {
	cont:{},
	init: function(){
		map.eachLayer(function(l){
			if(typeof l.feature != "undefined" && typeof l.feature.properties.mus_nm_mun != "undefined"){
				l.bindPopup(function (layer) {
					var html='<div class="marker-popup"><strong>'+layer.feature.properties.mus_nm_mun+'</strong>';
					return html;
				})
			}
		})
		if(typeof map.legend !== 'undefined'){
			map.removeControl(map.legend)
		}
	}
}