var index =1;
function changeimg(){
    var imgs = ["images/slideDN/1.jpg","images/slideDN/2.jpg","images/slideDN/3.jpg"];
    document.getElementById("img").src = imgs[index];
    index++;
    if(index ==3)
        index = 0;
}
setInterval(changeimg,1000)