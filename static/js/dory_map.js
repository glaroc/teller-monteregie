var Dory_map = {
	init: function(){
		map.eachLayer(function(l){
			if(typeof l.feature != "undefined" && typeof l.feature.properties.treatment != "undefined"){
				var d=l.feature.properties.treatment
				if(d=="LC"){
					var icon = L.MakiMarkers.icon({icon: "circle", color: "#687E34", size: "m"});
				}else if (d=="LI"){
					var icon = L.MakiMarkers.icon({icon: "cross", color: "#687E34", size: "m"});
				}else if(d=="SC"){
					var icon = L.MakiMarkers.icon({icon: "circle", color: "#23395B", size: "m"});
				}else if(d=="SI"){
					var icon = L.MakiMarkers.icon({icon: "cross", color: "#23395B", size: "m"});
				}
				l.setIcon(icon) 
			}
		})
		var legend = L.Control.extend({
		  options: {position: 'topright'},

		  onAdd: function (map) {
		          this._div = L.DomUtil.create('div', 'dory-legend legend');
		          if($('#language').val()=='fr'){
		          	this._div.innerHTML = '<ul><li><img src="https://api.mapbox.com/v4/marker/pin-m-circle+687E34.png?access_token=pk.eyJ1IjoiZ2xhcm9jIiwiYSI6InJPQ0d5Nk0ifQ.LPiEFZJ_-jI33kmjqwvNqA" alt="" tabindex="0">Grand et connecté</li><li><img src="https://api.mapbox.com/v4/marker/pin-m-cross+687E34.png?access_token=pk.eyJ1IjoiZ2xhcm9jIiwiYSI6InJPQ0d5Nk0ifQ.LPiEFZJ_-jI33kmjqwvNqA" alt="" tabindex="0">Grand et isolé</li><li><img src="https://api.mapbox.com/v4/marker/pin-m-circle+23395B.png?access_token=pk.eyJ1IjoiZ2xhcm9jIiwiYSI6InJPQ0d5Nk0ifQ.LPiEFZJ_-jI33kmjqwvNqA" alt="" tabindex="0">Petit et connecté</li><li><img src="https://api.mapbox.com/v4/marker/pin-m-cross+23395B.png?access_token=pk.eyJ1IjoiZ2xhcm9jIiwiYSI6InJPQ0d5Nk0ifQ.LPiEFZJ_-jI33kmjqwvNqA" alt="" tabindex="0">Petit et isolé</li></ul>'		          	
		          }else{
					this._div.innerHTML = '<ul><li><img src="https://api.mapbox.com/v4/marker/pin-m-circle+687E34.png?access_token=pk.eyJ1IjoiZ2xhcm9jIiwiYSI6InJPQ0d5Nk0ifQ.LPiEFZJ_-jI33kmjqwvNqA" alt="" tabindex="0">Large connected</li><li><img src="https://api.mapbox.com/v4/marker/pin-m-cross+687E34.png?access_token=pk.eyJ1IjoiZ2xhcm9jIiwiYSI6InJPQ0d5Nk0ifQ.LPiEFZJ_-jI33kmjqwvNqA" alt="" tabindex="0">Large isolated</li><li><img src="https://api.mapbox.com/v4/marker/pin-m-circle+23395B.png?access_token=pk.eyJ1IjoiZ2xhcm9jIiwiYSI6InJPQ0d5Nk0ifQ.LPiEFZJ_-jI33kmjqwvNqA" alt="" tabindex="0">Small connected</li><li><img src="https://api.mapbox.com/v4/marker/pin-m-cross+23395B.png?access_token=pk.eyJ1IjoiZ2xhcm9jIiwiYSI6InJPQ0d5Nk0ifQ.LPiEFZJ_-jI33kmjqwvNqA" alt="" tabindex="0">Small isolated</li></ul>'
		          }
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