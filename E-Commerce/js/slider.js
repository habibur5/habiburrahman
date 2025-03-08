var mainImg = document.getElementById('MainImg');
var smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
}

/// on mouse hover effect

smallImg[0].onmouseover = function(){
    mainImg.src = smallImg[0].src;
}
smallImg[1].onmouseover = function(){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onmouseover = function(){
    mainImg.src = smallImg[2].src;
}
smallImg[3].onmouseover = function(){
    mainImg.src = smallImg[3].src;
}

