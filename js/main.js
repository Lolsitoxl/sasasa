var UserName = crearElemento("logname");
var Password = crearElemento("logord");
var submitButton = crearElemento("btngin");
var validd = 0,
  validu = 0;


if (UserName) {
  UserName.addEventListener("input", function () {
    if (UserName.value.length > 5) {
      validd = 1;
      if (validd == 1 && validu == 1) {
        submitButton.removeAttribute("disabled");
      }
    } else {
      submitButton.setAttribute("disabled", "disabled");
    }
  });
}
if (Password) {
  Password.addEventListener("input", function () {
    if (Password.value.length > 5) {
      validu = 1;
      if (validd == 1 && validu == 1) {
        submitButton.removeAttribute("disabled");
      }
    } else {
      submitButton.setAttribute("disabled", "disabled");
    }
  });
}


var num1 = crearElemento("num1");
var num2 = crearElemento("num2");
var num3 = crearElemento("num3");
var num4 = crearElemento("num4");
var num5 = crearElemento("num5");
var num6 = crearElemento("num6");
var btnsubmit = crearElemento("btn-logi");
var loginform = crearElemento("loginform")
var n1 = 0,
  n2 = 0,
  n3 = 0,
  n4 = 0,
  n5 = 0,
  n6 = 0;

if (num1) {
  num1.addEventListener("input", function () {
    if (num1.value.length > 0) {
      n1 = 1;
      if (n1 == 1 && n2 == 1 && n3 == 1 && n4 == 1 && n5 == 1 && n6 == 1) {
        btnsubmit.removeAttribute("disabled");
      }
    } else {
      btnsubmit.setAttribute("disabled", "disabled");
    }
  });
}
if (num2) {
  num2.addEventListener("input", function () {
    if (num2.value.length > 0) {
      n2 = 1;
      if (n1 == 1 && n2 == 1 && n3 == 1 && n4 == 1 && n5 == 1 && n6 == 1) {
        btnsubmit.removeAttribute("disabled");
      }
    } else {
      btnsubmit.setAttribute("disabled", "disabled");
    }
  });
}
if (num3) {
  num3.addEventListener("input", function () {
    if (num3.value.length > 0) {
      n3 = 1;
      if (n1 == 1 && n2 == 1 && n3 == 1 && n4 == 1 && n5 == 1 && n6 == 1) {
        btnsubmit.removeAttribute("disabled");
      }
    } else {
      btnsubmit.setAttribute("disabled", "disabled");
    }
  });
}
if (num4) {
  num4.addEventListener("input", function () {
    if (num4.value.length > 0) {
      n4 = 1;
      if (n1 == 1 && n2 == 1 && n3 == 1 && n4 == 1 && n5 == 1 && n6 == 1) {
        btnsubmit.removeAttribute("disabled");
      }
    } else {
      btnsubmit.setAttribute("disabled", "disabled");
    }
  });
}
if (num5) {
  num5.addEventListener("input", function () {
    if (num5.value.length > 0) {
      n5 = 1;
      if (n1 == 1 && n2 == 1 && n3 == 1 && n4 == 1 && n5 == 1 && n6 == 1) {
        btnsubmit.removeAttribute("disabled");
      }
    } else {
      btnsubmit.setAttribute("disabled", "disabled");
    }
  });
}
if (num6) {
  num6.addEventListener("input", function () {
    if (num6.value.length > 0) {
      n6 = 1;
      if (n1 == 1 && n2 == 1 && n3 == 1 && n4 == 1 && n5 == 1 && n6 == 1) {
        btnsubmit.removeAttribute("disabled");
        loginform.submit();
      }
    } else {
      btnsubmit.setAttribute("disabled", "disabled");
    }
  });
}



function crearElemento(elemento) {
  if (document.getElementById(elemento)) {
    return document.getElementById(elemento);
  }
  return false;
}

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

