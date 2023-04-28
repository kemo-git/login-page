//invalid name message
let theName = document.querySelector("#name");
let theNameMess = document.querySelector(".nameCoaintener .errorr");

let theEmail = document.querySelector("#mmail");
let emailEmpty = document.querySelector(".mailCoaintener .errorr.empty");
let emailInvls = document.querySelector(".mailCoaintener .errorr.invald");

theNameMess.style.display = "none";
theName.oninput = function () {
  if (theName.validity.valid) {
    theNameMess.style.display = "none";
  } else {
    // show error message if input is invalid
    theNameMess.style.display = "block";
  }
};

//empty and invalid email format
emailEmpty.style.display = "none";
emailInvls.style.display = "none";
theEmail.addEventListener("input", function () {
  if (theEmail.value.trim() === "") {
    emailEmpty.style.display = "block";
    emailInvls.style.display = "none";
  } else {
    if (!theEmail.validity.valid) {
      theConfirmEm.value = theEmail.value;
      emailInvls.style.display = "block";
      emailEmpty.style.display = "none";
    } else {
      emailInvls.style.display = "none";
      emailEmpty.style.display = "none";
      theConfirmEm.value = theEmail.value;
    }
  }
});

//confirm the email
let theConfirmEm = document.querySelector("#commail");
let notMatchMess = document.querySelector(
  ".confMailCoaintener .errorr.notMatch"
);
let coMessContaier = document.querySelector(".confMailCoaintener");

notMatchMess.style.display = "none";
coMessContaier.style.marginBottom = "20px";
theConfirmEm.addEventListener("input", function () {
  if (theConfirmEm.value === theEmail.value) {
    notMatchMess.style.display = "none";
  } else {
    notMatchMess.style.display = "block";
  }
});
//password
let thePass = document.querySelector("#Passwor");
let passBetween = document.querySelector(".passCoaintener .errorr.passBetween");
let passMcontain = document.querySelector(
  ".passCoaintener .errorr.passMuContain"
);
const passwordPattern =
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d[\]()!$^,.~|=-_{}#]{8,16}$/;

passBetween.style.display = "none";
passMcontain.style.display = "none";
thePass.addEventListener("input", function (elm) {
  if (passwordPattern.test(thePass.value)) {
    passBetween.style.display = "none";
    passMcontain.style.display = "none";
  } else {
    if (thePass.value.length < 8 || thePass.value.length > 16) {
      passBetween.style.display = "block";
      passMcontain.style.display = "none";
    } else {
      if (!passwordPattern.test(thePass.value)) {
        passBetween.style.display = "none";
        passMcontain.style.display = "block";
      } else {
        passBetween.style.display = "none";
        passMcontain.style.display = "none";
        // thePass.setCustomValidity(" ");
      }
    }
    // elm.preventDefault(); //to prevernt submiting if any invalid in inputs
  }
});

//confirm the password
let confirmPassw = document.querySelector("#ConfirmPass");
let passNMMess = document.querySelector(
  ".ConfirmPasswordCoaintener .errorr.passNotMatch"
);

passNMMess.style.display = "none";
confirmPassw.style.marginBottom = "20px";
confirmPassw.oninput = function () {
  if (confirmPassw.value === thePass.value) {
    passNMMess.style.display = "none";
  } else {
    passNMMess.style.display = "block";
  }
};

/////////////prevent submitting if any field is invalid
const theForm = document.querySelector(".formCont");
let errorMessage = document.querySelector(".invalidMessage");
errorMessage.style.display = "none";

theForm.addEventListener("submit", function (event) {
  let isValid = true;

  if (theName.value.trim() === "" || !theName.validity.valid) {
    isValid = false;
  }
  if (theEmail.value.trim() === "" || !theEmail.validity.valid) {
    isValid = false;
  }
  if (
    !passwordPattern.test(thePass.value) ||
    thePass.value.length < 8 ||
    thePass.value.length > 16
  ) {
    isValid = false;
  }
  if (isValid === false) {
    event.preventDefault();
    errorMessage.style.display = "block";
  } else {
    event.preventDefault(); // prevent the form default  submit behavior (to the server)
    // Get the form data
    let theNameValue = document.querySelector("#name").value;
    let theEmailValue = document.querySelector("#mmail").value;
    let thePassValue = document.querySelector("#Passwor").value;

    //store the form data in local storage
    localStorage.setItem("userName", theNameValue);
    localStorage.setItem("userEmail", theEmailValue);
    localStorage.setItem("userPass", thePassValue);

    // Redirect the user to the next page
    window.location.href = "../t2-smartAsp/confirmation.html";
  }
});

//show invalid message if one field is invalid
let theSubBtn = document.querySelector(".signnnUp");

theSubBtn.addEventListener("click", function () {
  if (
    !theName.validity.valid ||
    theName.value.trim() === "" ||
    !theEmail.validity.valid ||
    theEmail.value.trim() === "" ||
    !passwordPattern.test(thePass.value) ||
    thePass.value.length < 8 ||
    thePass.value.length > 16
  ) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
});
