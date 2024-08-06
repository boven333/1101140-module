$(document).ready(function () {
    $("#toggleMenu").click(function () {
        $("#mySidenav").css({
            width: '250px'
        })
    });

    $("#closeNav").click(function () {
        $("#mySidenav").css({
            width: '0px'
        })
    });
});