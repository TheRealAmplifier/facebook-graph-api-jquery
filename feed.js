
	alert('test');
	let postlock, description;

	const appId = 'app id here!';

	const feedFields = 'feed.limit(10){type,from,message,description,story,permalink_url,place,created_time,attachments{title,url,media,type,description,subattachments}}';
	const feedToken = 'feed token here!';

	window.fbAsyncInit = function() {
		FB.init({
			appId            : appId,
			autoLogAppEvents : true,
			xfbml            : true,
			version          : 'v3.0'
		});
		FB.api(appId, { fields : feedFields, access_token : feedToken }, function(response) {
			console.log('App is being loaded...');
			console.log(response);
		});
	}

