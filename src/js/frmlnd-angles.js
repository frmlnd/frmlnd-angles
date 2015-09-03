(function() {

	var settings;

    $.fn.angles = function(options) {
        
        // Plugin default settings
        settings = $.extend({
            polygonColors: ['#eeeeee','#f2f2f2','#f4f4f4','#fefefe','#e7e7e7','#e2e2e2'],
            fillColors: ['#999999','#777777','#666666','#44444','#333333','#222222']
        }, options);

        settings.element = this;

        $('body').css('background-color', settings.background);

        function createLayout() {

			var pad = 100;
			var bW = $(window).width() + pad;
			var bH = $(window).height() + pad;

			$(settings.element).html('');

			var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
			svg.setAttribute('version', '1.1');
			$(settings.element).append(svg);

			for (var i=0; i<settings.shapes; i++) {
				var randX1 = (1 + Math.floor(Math.random() * (bW+pad))) - pad;
				var randY1 = (1 + Math.floor(Math.random() * (bH+pad))) - pad;
				var randX2 = (1 + Math.floor(Math.random() * (bW+pad))) - pad;
				var randY2 = (1 + Math.floor(Math.random() * (bH+pad))) - pad;
				var randX3 = (1 + Math.floor(Math.random() * (bW+pad))) - pad;
				var randY3 = (1 + Math.floor(Math.random() * (bH+pad))) - pad;
				var randX4 = (1 + Math.floor(Math.random() * (bW+pad))) - pad;
				var randY4 = (1 + Math.floor(Math.random() * (bH+pad))) - pad;

				var points = randX1 + ',' + randY1 + ' ' + randX2 + ',' + randY2 + ' ' + randX3 + ',' + randY3 + ' ' + randX4 + ',' + randY4;
				var colorSeed = Math.floor(Math.random() * settings.polygonColors.length);
				var color = settings.polygonColors[colorSeed];
					
				var poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
				poly.setAttribute("points", points);
				poly.setAttribute("fill", color);
				poly.setAttribute("id", 'poly-' + i);
				svg.appendChild(poly);
			}

			settings.element.fadeIn(settings.fadeSpeed, function() {

				var intervalCount = settings.shapes;
				var timer = setInterval(function() {
					var colorSeed = Math.floor(Math.random() * (settings.fillColors.length-1));
					var color = settings.fillColors[colorSeed];
					var fillPoly = Math.floor(Math.random() * (settings.shapes-1));
					TweenMax.to($('#poly-' + (fillPoly)), settings.fillSpeed/1000, {'fill':color});
					intervalCount--;
					if (intervalCount === 0) {
						clearInterval(timer);
						settings.element.fadeOut(settings.fadeSpeed, function() {
							createLayout(settings.shapes);
						});
					}
				}, settings.fillSpeed);

			});
		}

		createLayout();

    };

})();
	

/*
	function createLayout() {
		
		var container = document.getElementById('bg');
		container.innerHTML = '';
		var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
		svg.setAttribute('version', '1.1');
		container.appendChild(svg);
		
		var colors = new Array('#eeeeee','#f2f2f2','#f4f4f4','#fefefe','#e7e7e7','#e2e2e2');
		
		for (var i=0; i<20; i++) {
			var randX1 = (1 + Math.floor(Math.random() * (bW+pad))) - pad;
			var randY1 = (1 + Math.floor(Math.random() * (bH+pad))) - pad;
			var randX2 = (1 + Math.floor(Math.random() * (bW+pad))) - pad;
			var randY2 = (1 + Math.floor(Math.random() * (bH+pad))) - pad;
			var randX3 = (1 + Math.floor(Math.random() * (bW+pad))) - pad;
			var randY3 = (1 + Math.floor(Math.random() * (bH+pad))) - pad;
			var randX4 = (1 + Math.floor(Math.random() * (bW+pad))) - pad;
			var randY4 = (1 + Math.floor(Math.random() * (bH+pad))) - pad;

			var points = randX1 + ',' + randY1 + ' ' + randX2 + ',' + randY2 + ' ' + randX3 + ',' + randY3 + ' ' + randX4 + ',' + randY4;
			var colorSeed = Math.floor(Math.random() * colors.length);
			var color = colors[colorSeed];
				
			var poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
			poly.setAttribute("points", points);
			poly.setAttribute("fill", color);
			poly.setAttribute("id", 'poly-' + i);
			svg.appendChild(poly);
		}

		var timer = setInterval(function() {
			//var colorFill = new Array('#BF95B9','#7F637B','#FFC7F7','#40323E','#40323E');
			var colorFill = new Array('#A8BFB1','#707F76','#E0FFEB','#38403B','#505B54');
			var colorSeed = Math.floor(Math.random() * colors.length);
			var color = colorFill[colorSeed];
			TweenMax.to($('#poly-' + (1 + Math.floor(Math.random() * 100))), 1, {'fill':color});
		},500);
	}

	createLayout();
	setInterval(createLayout, 20000);
});
*/