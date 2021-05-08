const popupEmpty = document.querySelector(".popup-empty-inputs");
const popupSubmit = document.querySelector(".popup-submit");
const closePopup = document.querySelector(".close-popup");


if (closePopup) {
  var popupEmptyShow = document.querySelector(".popup-empty-inputs.show-popup");
  var popupSubmitShow = document.querySelector(".popup-submit.show-popup");

  closePopup.onclick = function () {
    popupEmptyShow.classList.remove("show-popup");
  };

  closePopup.onclick = function () {
    popupSubmitShow.classList.remove("show-popup");
  };
}

function validate() {
  var lastName = document.forms["form"]["last-name"].value;
  var firstName = document.forms["form"]["first-name"].value;
  var email = document.forms["form"]["email-address"].value;
  if (lastName.length == 0) {
    popupEmpty.classList.toggle("show-popup");
    return false;
  }
  if (firstName.length == 0) {
    popupEmpty.classList.add("show-popup");
    return false;
  }
  if (email.length == 0) {
    popupEmpty.classList.add("show-popup");
    return false;
  }
  if ((lastName.length != 0, firstName.length != 0, email.length != 0)) {
    popupSubmit.classList.add("show-popup");
  }
}
