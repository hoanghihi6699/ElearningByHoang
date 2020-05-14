function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.margin = "0 0px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.margin = "0 -250px";
    document.getElementById("mySidenav").style.width = "250px";
}

function onloadside() {
    document.getElementById("mySidenav").style.marginLeft = "-250px";
}


// Check cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        console.log(username);
    } else {
        username = "hoang";
        if (username != "" && username != null) {
            setCookie("username", username, 365);
            document.getElementById('showdemo').click();
        }
    }
}
function removeCookie() {
    console.log(getCookie("username"));
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

function compile() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;

    document.body.onkeyup = function () {
        code.open();
        code.writeln(html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>");
        code.close();
    };
}

function runcode() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;  
    code.open();
    code.writeln(html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>");
    code.close();
}

compile();
