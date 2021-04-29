var Matt_map = {
	cont:{},
	init: function(){
		map.eachLayer(function(l){
			if(typeof l.feature != "undefined" && typeof l.feature.properties.distance != "undefined"){
				var d=l.feature.properties.distance
				if(d=="0"){
					var icon = L.MakiMarkers.icon({icon: "park", color: "#687E34", size: "m"});
				}else{
					var icon = L.MakiMarkers.icon({icon: "circle", color: "#23395B", size: "m"});
				}
				l.setIcon(icon) 
			}
		})
		var legend = L.Control.extend({
		  options: {position: 'topright'},

		  onAdd: function (map) {
		          this._div = L.DomUtil.create('div', 'matt-legend legend');
		          this._div.innerHTML = '<ul><li><img src="https://api.mapbox.com/v4/marker/pin-m-park+687E34.png?access_token=pk.eyJ1IjoiZ2xhcm9jIiwiYSI6InJPQ0d5Nk0ifQ.LPiEFZJ_-jI33kmjqwvNqA" alt="" tabindex="0">Close to forest</li><li><img src="https://api.mapbox.com/v4/marker/pin-m-circle+23395B.png?access_token=pk.eyJ1IjoiZ2xhcm9jIiwiYSI6InJPQ0d5Nk0ifQ.LPiEFZJ_-jI33kmjqwvNqA" alt="" tabindex="0">Far from forest</li></ul>'
		          /*L.DomEvent.on(this._div, "click", this._click )*/
		          map.legend = this;
		          return this._div;          
		  },

		  _click: function(e){
		  },

		});

		if(typeof map.legend !== 'undefined'){
			map.removeControl(map.legend)
		}
		this.cont = map.addControl(new legend());
	}
}