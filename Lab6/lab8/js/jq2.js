
$(document).ready(function () {
    $("#set_btn1").click(function () {
        $("#test1").text("Hello world!");
    });
    $("#set_btn2").click(function () {
        $("#test2").html("<b>Hello world!</b>");
    });
    $("#set_btn3").click(function () {
        $("#test3").val("Dolly Duck");
    });
    $("#show_btn1").click(function () {
        alert("Text: " + $("#test1").text());
    });
    $("#show_btn2").click(function () {
        alert("HTML: " + $("#test2").html());
    });
});