//-require map_ziter.js

(function() {
  function getScripts(scripts, callback) {
      var progress = 0;
      scripts.forEach(function(script) { 
          $.getScript(script, function () {
              if (++progress == scripts.length) callback();
          });
      });
  }
  getScripts(["./js/map-story.js"], function () {
    var h = $(window).height();
    MapZ.init();
  });

})();