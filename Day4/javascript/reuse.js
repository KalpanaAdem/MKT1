function userValidation(){

    var oUsr = document.getElementById("usr").value;
    var oPwd = document.getElementById("pwd").value;
    if( oUsr == oPwd ){
        document.write("<h1> Your Name is </h1>"+oUsr+"<h1> Your Password is </h1>"+oPwd);
    }
    else{
        document.write("User Name and Password are different");
    }
}

function onMagic(){
    $(".box-title").css("background.color","brown").css("color","brown");

}
function onHide(){
    $(".box").hide();
    $(".box()".fadeOut(5000,function(){ alert("All are Hidden");}));
}

function onShow(){
    $(".box").show();
}