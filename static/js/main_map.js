var Main_map = {
	cont:{},
	init: function(){
		if(typeof map.legend !== 'undefined'){
			map.removeControl(map.legend)
		}
	}
}