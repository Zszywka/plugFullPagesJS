$(document).ready(function() {
    $('#fullpage').fullpage({
		 navigation: true,
		 navigationPosition: 'right',
		 slidesNavigation: true,
		 slidesNavPosition: 'bottom',
		 controlArrows: false,
		 verticalCentered: true,
		 paddingTop: '3em',
       paddingBottom: '10px',
       fixedElements: '#header, .footer',
       responsiveWidth: 0,
       responsiveHeight: 0,
	 });
});
