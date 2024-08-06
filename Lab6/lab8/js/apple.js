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
    }

    // Update positions on scroll and resize
    $(window).on('scroll resize', function () {
        updatePositions();
    });
    updatePositions();

    // Resize video
    $("#video-resize").click(function () {
        $("#car_video").animate({
            left: '250px',
            height: '-=150px',
            width: '-=150px'
        });
    });

    $("#video-plus").click(function () {
        $("#car_video").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    });
});
