var index =1;
function changeimg(){
    var imgs = ["images/slideQN/1.jpg","images/slideQN/2.jpg","images/slideQN/3.jpg"];
    document.getElementById("img").src = imgs[index];
    index++;
    if(index ==3)
        index = 0;
}
setInterval(changeimg,1000)