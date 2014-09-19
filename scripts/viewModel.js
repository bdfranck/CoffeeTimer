define(function (require){
	
	var ko = require("vendor/knockout-3.2.0");
	var model = require("model");

	var viewModel = function() {
		var self = this;
		self.metrics = model.metrics;
		self.timer = {
			running: false,
			bloom: ko.observable(model.presets[0].time.bloom),
			brew: ko.observable(model.presets[0].time.brew)
		};
		self.modes = model.modes;
		self.activeMode = ko.observable(model.modes[0].title);
		self.activePreset = ko.observable( localStorage.preset || model.presets[0]);
		
		self.cyclePresets = function() {
			var index = parseInt( self.activePreset().index )
			index ++;
			if ( index >= model.presets.length ) {
				self.activePreset(model.presets[0]);
			}
			else {
				self.activePreset(model.presets[index]);
			}
			self.resetTimer();
		};

		self.setActiveMode = function(mode) {
			self.activeMode(mode.title);
		};

		self.startTimer = function() {
			self.timer.running = true;
			setTimeout( function() { self.decrementTimer(); }, 1000 );
		};
		
		self.decrementTimer = function() {
			if ( self.timer.running == true ) {
				var bloom = self.timer.bloom;
				var brew = self.timer.brew;
				
				if ( bloom() > 0 ) {
					bloom( bloom() - 1 );
					setTimeout( function() { self.decrementTimer(); }, 1000 );		
				}

				else if ( brew() > 0 ) {
					brew( brew() - 1 );
					setTimeout( function() { self.decrementTimer(); }, 1000 );	
				}
			}
		}

		self.endTimer = function() {
			self.timer.running = false;
		};
		
		self.resetTimer = function() {
			self.timer.running = false;
			self.timer.bloom(self.activePreset().time.bloom);
			self.timer.brew(self.activePreset().time.brew);
		};
	};
		
	return viewModel; 
});