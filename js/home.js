function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

function myFunction2() {
    var input2, filter2, ul2, li2, a2, i2;
    input2 = document.getElementById("myInput2");
    filter2 = input2.value.toUpperCase();
    ul2 = document.getElementById("myUL2");
    li2 = ul2.getElementsByTagName("li2");
    for (i = 0; i < li2.length; i++) {
        a2 = li2[i].getElementsByTagName("a2")[0];
        if (a2.innerHTML.toUpperCase().indexOf(filter2) > -1) {
            li2[i].style.display = "";
        } else {
            li2[i].style.display = "none";

        }
    }
}