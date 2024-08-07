$(document).ready(function () {
    function updatePositions() {
        let headerPosition = $('#page_header').offset(); //get element position
        let headerTop = headerPosition.top;
        let headerLeft = headerPosition.left;
        $('#window_top').text(headerTop);
        $('#window_left').text(headerLeft);

        let triggerPosition = $('#trigger').offset();
        let triggerTop = triggerPosition.top;
        let triggerHeight = $('#trigger').height(); //get element height
        $('#trigger_top').text(triggerTop);
        $('#trigger_height').text(triggerHeight);

        // Check if the current position is within the trigger
        let scrollTop = $(window).scrollTop();
        if ((scrollTop >= triggerTop) && (scrollTop <= (triggerTop + triggerHeight))) {
            $('#top_reach').text('Yes');
            
        } else {
            $('#top_reach').text('No');
        }

       let carWidth = $('#car_video').width();
       if (scrollTop > triggerPosition.top) {
            let newWidth = carWidth - (carWidth * 0.01);
            $('#car_video').width(newWidth);
       } else {
            $('#car_video').width(1100);
       }
 console.log(scrollTop);

    }
    $(window).on('scroll resize', function () {
        updatePositions();
    });
    updatePositions();
});
