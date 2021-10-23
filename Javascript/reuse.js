function onMagic() { 

    var aBoxTitle = document.getElementsByClassName("box-title");
    for(var i = 0; i<aBoxTitle.length;i++)
    {
      var oTitle = aBoxTitle[i];
      oTitle.style.backgroundColor = "black";
      oTitle.style.color = "white";

    }
}