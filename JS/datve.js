
function kt(element){
    if(element.value=="")
    {
        element.style.border="1px solid red";
        return true;
    }
    element.style.border="";
    return false;
}
function dienform(){
    var ten = document.getElementById("hotenID");
    var email = document.getElementById("emailID");
    var didong = document.getElementById("didongID");
    var dienthoai = document.getElementById("dienthoaiID");
    var diachi = document.getElementById("diachiID");
    var sokhach = document.getElementById("sokhachID");
    if(ten!=undefined && email!=undefined && didong!=undefined && dienthoai!=undefined && diachi!= undefined && sokhach!= undefined)
    {
        if(kt(ten)==true||kt(email)==true||kt(didong)==true||kt(dienthoai)==true||kt(diachi)==true||kt(sokhach)==true)
        {
            alert("Vui lòng điền đầy đủ thông tin");
            return;
        }
        else 
            alert("Đặt vé thành công !");
    }
}