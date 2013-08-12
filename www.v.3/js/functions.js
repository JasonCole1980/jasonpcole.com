var flickrParallax = function() { this.init(); }
$.extend(flickrParallax.prototype, {
   
    init: function() {
        //var thing = new SomeOtherClass();
        var jpc = this;
    },
    initVariables: {
		viewport-width: $(window).width(),
		viewport-height: $(window).height(),
		auth-status: false,
		flickr-api-methods-needed: {[
			"api-photostream-all", 
			"api-photostream-comments"
		]},
	},
    var thing = function() {
    	JPC.cookieData = //Read cookie jQuery
    	if(!cookie.data){
    		thing.meth(auth.false);
    	}
    },
    thing.meth = function(self){
    	this.meth.apply(self);
    	JPC.authorize.init();
    };
    },
    meth: function() {
        alert(this.a);
    }
}

var MyPrototype = function() { this.init(); }
$.extend(MyPrototype.prototype, {
    a: 5,
    init: function() {
        var thing = new SomeOtherClass();

        // Create an aliad for this
        var that = this;
        thing.meth = function() {
            // You can always access the object using it's "that" alias
            alert(that.a);
        };
    }
}
Or...

var MyPrototype = function() { this.init(); }
$.extend(MyPrototype.prototype, {
    a: 5,
    init: function() {
        var thing = new SomeOtherClass();

        // Create an aliad for this
        var that = this;
        thing.meth = function() {
            // You can always access the object using it's "that" alias
            that.meth();
        };
    },
    meth: {
        alert(this.a);
    }
}

var MyPrototype = function() { this.init(); }
$.extend(MyPrototype.prototype, {
    a: 5,
    init: function() {
        var thing = new SomeOtherClass();
        var self = this;
        thing.meth = function(){this.meth.apply(self)};
        // thing.meth() is called somewhere within thing;
    },
    meth: function() {
        alert(this.a);
    }
}

// remap jQuery to $
(function($){

	

	initFunctions: {

	}
	$fn.jpc.setParallaxDimensions(domReady) {
		var domReadyCheck = domReady;
		if(domReadyCheck){
		}
		else {

			function waitAFewForDOM() {
				var domReadyAtLast = false;
				var domWaitTimer = function(domReadyAtLast) {
					var readySwitch = domReadyAtLast;
					if(readySwitch){

					}
				}
			},setInterval(func, interval[, args])
			
		}

	var setFlickrAPIWrapperDimensions = function(viewport-width, viewport-height) {
		$("div.photostream-outer.parallax-viewport").css({'height: '+viewport-height+', width: '+ viewport-width});
	}


})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

	/* Flickr API Photostream Application functions
	   - Set post doc ready vars here 
	   - Init Photostream wrapper dimension set func
	*/
	   var domReady = true;
	   setParallaxDimensions(domReady);

	// Check to see if cookie is set/auth has occurred already
	function pollCookie(){

		if(document.cookie.match(sessionRegex)){
			authInProgress = false;
			checkAuth();
		}else{
			Y.later(20, this);
		}

	}

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/