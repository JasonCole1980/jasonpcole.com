/* Maybe make this the namespace declaration file? Prob has something like that in Backbone/Underscore.
	Rock and/or roll */
$(function () {  

	var s;
	var theSequence = {
		
		settings: {
			/* "Cached" variables/information, 
				frequently/widely used information for sub-functions */
			logoButton: $('#logo'),
			header: $('header'),
			navigation: $('nav'),
			about: $('#about'),
			projectsTrigger: $('nav a[title="Projects"]'),
			projects: $('#projects-outer-wrap'),
			contactTrigger: $('nav a[title="Contact"]'),
			close: $('a.close'),
			toggleSideBar: $('a.toggleSideBar')
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
            s.projectsTrigger.on('click', function(){
                theSequence.openProjects();
                s.close.show();
            });
            s.close.on('click', function(){
                theSequence.closeProjects();
                s.close.hide();
            });
		},
		
		openProjects: function() {
            
            theSequence.animateDOM(s.header, -50);
            theSequence.animateDOM(s.navigation, -50);
            theSequence.animateDOM(s.about, +200);
            
            $.getJSON('js/projects.json', function(data) {
                var items = [];
             
                $.each(data, function(key, val) {
                    items.push('<li id="' + key + '">' + val + '</li>');
                });
             
                $('<ul/>', {
                    'class': 'my-new-list',
                    html: items.join('')
                }).appendTo('body');
                
            });
        
        },

        closeProjects: function() {
            
            theSequence.animateDOM(s.header, 0);
            theSequence.animateDOM(s.navigation, 0);
            theSequence.animateDOM(s.about, 0);
        },
        
        animateDOM: function(element, topVal) {
                
            $(element).animate({
                top: topVal,
            }, 800);
            
        }

		// initFlickr: {
		// 	vars:,
		// 	auth:,
		// 	postAuth:
		// 	console.log("flickr auth");
		// }
		
	};
	

    theSequence.init();  

});







