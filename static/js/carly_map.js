var Carly_map = {
	init: function(){
		map.eachLayer(function(l){
			if(typeof l.feature != "undefined" && typeof l.feature.properties.managed != "undefined"){
				var d=l.feature.properties.managed
				if(d==true){
					var icon = L.MakiMarkers.icon({icon: "logging", color: "#687E34", size: "m"});
				}else{
					var icon = L.MakiMarkers.icon({icon: "park", color: "#23395B", size: "m"});
				}
				l.setIcon(icon) 
			}
		})

		var legend = L.Control.extend({
		  options: {position: 'topright'},

		  onAdd: function (map) {
		          this._div = L.DomUtil.create('div', 'carly-legend legend');
		          this._div.innerHTML = '<ul><li><img src="https://api.mapbox.com/v4/marker/pin-m-logging+687E34.png?access_token=pk.eyJ1IjoiZ2xhcm9jIiwiYSI6InJPQ0d5Nk0ifQ.LPiEFZJ_-jI33kmjqwvNqA" alt="" tabindex="0">Managed</li><li><img src="https://api.mapbox.com/v4/marker/pin-m-park+23395B.png?access_token=pk.eyJ1IjoiZ2xhcm9jIiwiYSI6InJPQ0d5Nk0ifQ.LPiEFZJ_-jI33kmjqwvNqA" alt="" tabindex="0">Not managed</li></ul>'
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