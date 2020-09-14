var index =1;
function changeimg(){
    var imgs = ["images/slideSP/1.jpg","images/slideSP/2.jpg","images/slideSP/3.jpg"];
    document.getElementById("img").src = imgs[index];
    index++;
    if(index ==3)
        index = 0;
}
setInterval(changeimg,1000)