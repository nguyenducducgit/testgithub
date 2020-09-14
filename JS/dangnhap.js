function kt(element){
    if(element.value=="")
    {
        element.style.border="1px solid red";
        return true;
    }
    element.style.border="";
    return false;
}
function dangnhap(){
    var a = document.getElementById("un");
    var b = document.getElementById("pw");
    if(a != undefined && b != undefined)
    {
        if(kt(a)==true || kt(b)==true)
        {
            alert("Vui lòng điền đầy đủ thông tin.");
        }
        else 
        {
            alert("Đăng nhập thành công.")
        }
    }
}