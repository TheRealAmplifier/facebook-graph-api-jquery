
	let postlock, description;

	const appId = '202892533681430';

	const feedFields = 'feed.limit(10){type,from,message,description,story,permalink_url,place,created_time,attachments{title,url,media,type,description,subattachments}}';
	const feedToken = 'EAADYZBPXF4ZB0BADdQwMyhgtu6o1ZBYwHzxvZCZAcPhWXlSzZBtLqSJp6KwjicjT4CXIQVWmyu5NLltcN3IjyhlWqkZAUA7tMQZBrDqx1uuH1hqpWwpPq3YZCXd85A8PN7O3Y6IhHxUYziTIC6jhjQPLswT3w3ZBCvAhiG3PVP37ZAwHQZDZD';

	window.fbAsyncInit = function() {
		FB.init({
			appId            : appId,
			autoLogAppEvents : true,
			xfbml            : true,
			version          : 'v3.0'
		});
		FB.api(appId, { fields : feedFields, access_token : feedToken }, function(response) {
			console.log('App is being loaded...');
			console.dir(response);

			let feedData = response;

			$.each(feedData, function(index) {
				$.each(this, function(globalKey, globalValue) {
					if(globalKey == 'data') {
						$.each(globalValue, function(dataKey, dataValue){
							console.log(dataValue.type);

							if(dataValue.type == 'post') {
								console.log('default post');
								$.each(dataValue, function(detailKey, detailValue) {
									console.log(`${detailKey} belongs to ${detailValue}`);
								});
							} else if (dataValue.type  == 'photo') {
								console.log('photo post');
								$.each(dataValue, function(detailKey, detailValue) {
									console.log(`${detailKey} belongs to ${detailValue}`);
								});
							} else if (dataValue.type  == 'status' ) {
								console.log('status update post');
								$.each(dataValue, function(detailKey, detailValue) {
									console.log(`${detailKey} belongs to ${detailValue}`);
								});
							} else {
								console.log('Everything else...');
								$.each(dataValue, function(detailKey, detailValue) {
									console.log(`${detailKey} belongs to ${detailValue}`);
								});
							}
						});
					}
				});
			});
		});
	}

