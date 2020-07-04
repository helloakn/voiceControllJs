// Shows the ad in the bottom right

jQuery(function($){
	// return;
	// AdPacks CSS
	var css = '\
	#carbonads{\
		position: fixed;\
		bottom: 30px;\
		right: 40px;\
		background-color: rgba(255,255,255,0.9);\
		padding: 16px;\
		box-shadow: 2px 2px 2px rgba(0,0,0,0.1);\
		border-radius: 2px;\
		box-sizing: content-box;\
		width: 130px;\
		transition:0.3s background-color;\
	}\
	@media (max-width:900px){\
		#carbonads {\
				display:none;\
		}\
	}\
	#carbonads:before {\
		position: absolute;\
		content: "×";\
		width: 20px;\
		border-radius: 50%;\
		height: 20px;\
		background-color: #da2c2c;\
		font-family: sans-serif;\
		color: #fff;\
		text-align: center;\
		line-height: 20px;\
		font-size: 20px;\
		top: -8px;\
		right: -8px;\
		cursor: pointer;\
		opacity:0;\
		transition:0.3s opacity;\
	}\
	#carbonads:hover{\
		background-color: #fff;\
	}\
	#carbonads:hover:before{\
		opacity:1;\
	}\
	#carbonads a {\
		color: #303438 !important;\
		text-decoration: none !important;\
		font: 13px sans-serif !important;\
		font-weight: normal !important;\
		word-break: break-word;\
		display: block;\
		line-height: 1.45 !important;\
	}\
	#carbonads .carbon-img img{\
		border:none !important;\
		outline:none !important;\
		margin:0 auto 6px !important;\
	}\
	#carbonads a.carbon-poweredby{\
		display: block;\
		font-size: 10px !important;\
		color: #888 !important;\
		margin-top: 8px;\
		text-transform: uppercase;\
		line-height: 1 !important;\
	}\
	';

	addStyle(css);


	// The add placeholder

	$(document).on('click', '#carbonads', function(e) {
		if ($(e.target).is($(this))) {
			$(this).remove();
			return false;
		}
	});


	// The ad packs include script

	var adPacks = document.createElement('script');

	adPacks.id = '_carbonads_js';
	adPacks.type = 'text/javascript';
	adPacks.async = true;
	adPacks.src = 'https://cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=tutorialzinecom';

	document.body.appendChild(adPacks);


	// Show sharing buttons
	setTimeout(function(){

  	var twitter = '<iframe allowtransparency="true" frameborder="0" scrolling="no" src="https://platform.twitter.com/widgets/tweet_button.html?url={URL}&amp;via=tutorialzine&amp;count=horizontal" ></iframe>';
		var facebook = '<iframe src="https://www.facebook.com/plugins/like.php?href={URL}&amp;layout=button_count&amp;show_faces=false&amp;width=450&amp;action=like&amp;colorscheme=light&amp;height=21" scrolling="no" frameborder="0" allowtransparency="true"></iframe>';

		var URL = $('footer a.tz').attr('href');
		URL = encodeURIComponent(URL);

		$('#tzine-actions').prepend(twitter.replace('{URL}',URL))
						   .prepend(facebook.replace('{URL}',URL));

	},2500);

	$('footer .close').click(function(){
		$(this).closest('footer').fadeOut();
	});

	function addStyle(str){
		var style = document.createElement('style');

		style.setAttribute("type", "text/css");
		if (style.styleSheet) {   // IE
			style.styleSheet.cssText = str;
		} else {                // the world
			style.appendChild(document.createTextNode(str));
		}

		$('head').append(style);
		$('html').css('background-attachment','scroll');
	}
});
