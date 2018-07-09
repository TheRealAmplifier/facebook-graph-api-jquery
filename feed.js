
	let postblock, description;

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
							//console.dir(dataValue);

							//
							// To Do
							// get all the possible post types from the feed.
							//

							postblock = '<div class="facebook-post '+dataValue.type+'">';
								if(dataValue.type == 'post') {
									postblock += "<div class='post'>";								
										if( dataValue.message != undefined) {
											postblock += `<span class='message'>${dataValue.message}</span>`;
										} else {
											postblock += `<span class='message'>Oops, message could not be loaded...</span>`;
										}
									postblock += '</div>';
								} else if (dataValue.type  == 'photo') {		// get status type post
									postblock += "<div class='post'>";
											$.each(this, function(keyAttachment, valueAttachment) {
												if (keyAttachment == "attachments") {
													$.each(valueAttachment, function(keyAttachment2, valueAttachment2) {
														$.each(valueAttachment2, function(keyAttachment3, valueAttachment3) {
															let post_title = valueAttachment3.title;
															let post_url = valueAttachment3.url;
															console.log(valueAttachment3);

															if(valueAttachment3.type == 'event' || valueAttachment3.type == 'life_event'|| valueAttachment3.type == 'cover_photo'){
																$.each(valueAttachment3, function(keyAttachment4, valueAttachment4) {
																	$.each(valueAttachment4, function(keyAttachment5, valueAttachment5) {
																		if (keyAttachment5 == "image") {
																			postblock += `<a href="${post_url}" target="_blank">`;
																			postblock += `<span class='post-image'><img src="${valueAttachment5.src}" alt="${post_title}" />`;
																			postblock += `</a>`;
																		}
																	});
																});
															} else if(value_attachment3.type == 'album'){

														
			
												// 			// 	$.each(value_attachment3, function(key_attachment4, value_attachment4) {

												// 			// 		if(key_attachment4 == 'subattachments'){
												// 			// 		$.each(value_attachment4, function(key_attachment5, value_attachment5) {
																	
												// 			// 				$.each(value_attachment5, function(key_attachment6, value_attachment6) {
												// 			// 					//console.log(value_attachment6);
												// 			// 					if( value_attachment6.url != undefined){ 
		
												// 			// 						post_block += "<a target='_blank' href='" + value_attachment6.url + "'>" ;
		
												// 			// 						$.each(value_attachment6, function(key_attachment7, value_attachment7) {
		
												// 			// 							if(key_attachment7 == 'media'){
												// 			// 								$.each(value_attachment7, function(key_attachment8, value_attachment8) {
												// 			// 									//console.log(key_attachment8, value_attachment8); 
												// 			// 									post_block += "<img class='image' src='" + value_attachment8.src + "' alt='" + alt_title + "'/>" ;
												// 			// 								});
												// 			// 							}
												// 			// 						});
		
												// 			// 						post_block += "</a>" ;	
												// 			// 					}
												// 			// 				});
												// 			// 		});
												// 			// 	}
												// 			// 	});
																
																
												// 			// } else if(value_attachment3.type == 'share'){
																
																
		
																	// 	share_description = value_attachment3.description;
																	// 	share_url = value_attachment3.url;
																	// 	share_alt = value_attachment3.title;
				
																	// 	$.each(value_attachment3, function(key_attachment4, value_attachment4) {
																	// 		// console.log(value_attachment4);															
																	// 			$.each(value_attachment4, function(key_attachment5, value_attachment5) {
				
		
																			// if (key_attachment5 == "image") {
																			// 	post_block += "<article>" ;
																			// 		post_block += "<a target='_blank' href='" + share_url + " alt=" + share_alt + " '>" ;
																			// 			post_block += "<img class='share image' src='" + value_attachment5.src + "' alt='" + alt_title + "'/>" ;
																			// 			post_block += "<span class='share message'>" + share_description + "'</span>" ;
																			// 		post_block += "</a>" ;
																			// 	post_block += "</article>" ;
																			// }
																// 	});						
																//});	
															}
														});
													});
												}
											});
									postblock += '</div>';
								} else if (dataValue.type  == 'status' ) {	// get pictures date type status
									postblock += "<div class='post'>";
										if( dataValue.message != undefined) {
											postblock += `<span class='message'>${dataValue.message}</span>`;
										} else {
											postblock += `<span class='message'>Oops, message could not be loaded...</span>`;
										}
									postblock += '</div>';

									// get status type data
								} else if (dataValue.type  == 'event' ) {
									postblock += "<div class='post'>";
										postblock += `<span>${dataValue.type}</span>`;
										
										postblock += `<span>${dataValue.message}</span>`;
									postblock += '</div>';

									// get status type data
								} else {
									postblock += "<div class='post'>";
										postblock += `<span>${dataValue.type}</span>`;

										postblock += `<span>${dataValue.message}</span>`;
									postblock += '</div>';

									// more data, every other post
								}
							postblock += '</div>';
							$('#feed').append(postblock);
						});
					}
				});
			});
		});
	}

