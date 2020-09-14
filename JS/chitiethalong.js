var index =1;
function changeimg(){
    var imgs = ["images/slideHL/1.jpg","images/slideHL/4.jpg","images/slideHL/3.jpg"];
    document.getElementById("img").src = imgs[index];
    index++;
    if(index ==3)
        index = 0;
}
setInterval(changeimg,1000)