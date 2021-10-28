function onMagic() {

    var aBoxTitle = document.getElementsByClassName("box-title");
    for (var i = 0; i < aBoxTitle.length; i++) {
        var oTitle = aBoxTitle[i];
        oTitle.style.backgroundColor = "black";
        oTitle.style.color = "white";

    }
}

function getData() {
    var aTest = document.getElementById("ka");
    aTest.innerText = "This is Test Javascript";
}

function mySecondFunction() {
    var oTemp = document.getElementById("num");
    var oEmp = { "empid": 100 };
    oEmp.salary = 20000;
    console.log(oEmp);
    var empString = JSON.stringify(oEmp);
    console.log(empString);
    window.alert(oTemp.value);
}

function press() {
    var ka = document.getElementById("usr");
    document.write("<h1> your Name is:</h1>" + "<em style='color:red' />" + ka.value);
}

function getMultiplication() {
    var m1 = document.getElementById("num1");
    var m2 = document.getElementById("num2");
    var input1 = parseInt(m1.value);
    var input2 = parseInt(m2.value);
    alert(square(input1, input2));
}

const square = function (number1, number2) {
    return number1 * number2;
}

