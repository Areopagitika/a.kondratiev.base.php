$(document).ready(function() {
	$('.ajax_request').click(function() {
		$.ajax({
			url: '/ajax/request.php',
			data: {data: [1,2,3]},
			dataType: 'json',
			success: function(response) {
				console.log(response);
			}, 
			error: function(response) {
				console.log(response);
			}
		});
	});
});