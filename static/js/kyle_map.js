var Kyle_map = {
	init: function(){
		map.eachLayer(function(l){
			if(typeof l.feature != "undefined" && typeof l.feature.properties.crop != "undefined"){
				var d=l.feature.properties.crop
				if(d=="Apple"){
					var icon = L.MakiMarkers.icon({icon: "garden", color: "#601919", size: "m"});
				}else if (d=="Blueberry"){
					var icon = L.MakiMarkers.icon({icon: "garden", color: "#21223E", size: "m"});
				}else{
					var icon = L.MakiMarkers.icon({icon: "garden", color: "#4F1257", size: "m"});
				}
				l.setIcon(icon) 
			}
		})
		var legend = L.Control.extend({
		  options: {position: 'topright'},

		  onAdd: function (map) {
		          this._div = L.DomUtil.create('div', 'kyle-legend legend');
		          this._div.innerHTML = '<ul><li><img src="https://api.mapbox.com/v4/marker/pin-m-garden+601919.png?access_token=pk.eyJ1IjoiZ2xhcm9jIiwiYSI6InJPQ0d5Nk0ifQ.LPiEFZJ_-jI33kmjqwvNqA" alt="" tabindex="0">Apples</li><li><img src="https://api.mapbox.com/v4/marker/pin-m-garden+21223E.png?access_token=pk.eyJ1IjoiZ2xhcm9jIiwiYSI6InJPQ0d5Nk0ifQ.LPiEFZJ_-jI33kmjqwvNqA" alt="" tabindex="0">Blueberries</li><li><img src="https://api.mapbox.com/v4/marker/pin-m-garden+4F1257.png?access_token=pk.eyJ1IjoiZ2xhcm9jIiwiYSI6InJPQ0d5Nk0ifQ.LPiEFZJ_-jI33kmjqwvNqA" alt="" tabindex="0">Raspberries</li></ul>'
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