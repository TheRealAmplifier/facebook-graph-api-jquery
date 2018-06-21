(function() {
	let postlock, description;
	const feedFields, feedToken;

	feedFields = 'feed.limit(10){type,from,message,description,story,permalink_url,place,created_time,attachments{title,url,media,type,description,subattachments}}';
	feedToken = 'EAADYZBPXF4ZB0BADdQwMyhgtu6o1ZBYwHzxvZCZAcPhWXlSzZBtLqSJp6KwjicjT4CXIQVWmyu5NLltcN3IjyhlWqkZAUA7tMQZBrDqx1uuH1hqpWwpPq3YZCXd85A8PN7O3Y6IhHxUYziTIC6jhjQPLswT3w3ZBCvAhiG3PVP37ZAwHQZDZD';

	window.fbAsyncInit = function() {
		FB.init({
			appId            : 'app-id-here',
			autoLogAppEvents : true,
			xfbml            : true,
			version          : 'v3.0'
		});

		FB.api('/page-id', { fields : feedFields, access_token : feedToken }, function(response) {
			console.log(response);
		});
	}
});

