$(document).ready(function() {
	$("nav a").click(function() {
		$("nav a").animate( {
			width: "15%",
			opacity: .70,
			fontSize: "40px",
			letterSpacing: "10px"
		}, 2000);
	});
})
