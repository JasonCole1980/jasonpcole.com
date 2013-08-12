/* Maybe make this the namespace declaration file? Prob has something like that in Backbone/Underscore.
	Rock and/or roll */
$(function () {  

	var s;
	var theSequence = {
		
		settings: {
			/* "Cached" variables/information, 
				frequently/widely used information for sub-functions */
			headerText: "Jason Paul Cole",
			logoButton: $('#logo'),
			header: $('header'),
			navigation: $('nav')
		},
		
		init: function() {
			// init The Sequence settings vars
			s = this.settings;
			
			// init UIActions function
			this.bindUIActions();
			// init Flickr API function
			//this.initFlickr();
		},
		
		bindUIActions: function() {
			/* Bind header element to 
				mouseover/out to toggle
				open area to display portfolio */
			s.logoButton.on('mouseover', function(){
		  		theSequence.togglePageItems('out');
		    }).on('mouseout', function(){
		      	theSequence.togglePageItems('in');
		    });
		},
		
		togglePageItems: function(state) {

			if (state === 'out') {
				console.log('this is the state: 'state);
				// $(s.header).animate({ 
				// 	top: '-50', 
				// 	}, 800,function() {
						
		  // 			});

				// $(s.navigation).animate({ 
				// 	top: '+200', 
				// 	}, 800,function() {
						
		  // 			});
	  		}
	  		else {

				console.log('this is the state: 'state);
	  		// 	$(s.header, s.navigation).animate({ 
					// top: '0', 
					// }, 800,function() {
						
		  	// 		});
	  		}
		}

		// initFlickr: {
		// 	vars:,
		// 	auth:,
		// 	postAuth:
		// 	console.log("flickr auth");
		// }
		
	};
	
	  
	$(function () {  
		theSequence.init();  
	});

});







