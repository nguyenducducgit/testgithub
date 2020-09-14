var index =1;
function changeimg(){
    var imgs = ["images/dulichnuocngoai/brazil.jpeg","images/dulichnuocngoai/hanquoc.jpg","images/dulichnuocngoai/nhatban.jpg","images/dulichnuocngoai/phap.jpg"];
    document.getElementById("img").src = imgs[index];
    index++;
    if(index ==4)
        index = 0;
}
setInterval(changeimg,1000)