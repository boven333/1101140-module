
function manipulateHTMLAttibute() {
    var objImage = document.getElementById("image");
    var imageWidth = objImage.getAttribute("width");
    console.log(imageWidth);
    var enlargeImageWidth = Number(imageWidth) + 100;
    objImage.setAttribute("width", enlargeImageWidth)
}

function manipulateHTMLAttibute2() {
    var objImage = document.getElementById("image");
    var imageWidth = objImage.getAttribute("width");
    console.log(imageWidth);
    var enlargeImageWidth = Number(imageWidth) - 100;
    objImage.setAttribute("width", enlargeImageWidth)
}