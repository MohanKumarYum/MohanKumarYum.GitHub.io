var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if (mySrc === '/images/mozilla-image2.png')
    {
        myImage.setAttribute('src','/images/mozilla-image.jpg');
    }
    else
    {
        myImage.setAttribute('src','/images/mozilla-image2.png');
    }
}