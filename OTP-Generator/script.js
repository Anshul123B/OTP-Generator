function otpGenerate() {
    let otpShow = document.getElementById("otp");
    let digits = "0123456789";
    let otp = "";

    for (let i = 0; i < 4; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }

    otpShow.innerHTML = "<span></span>";

    setTimeout(() => {
        otpShow.innerHTML = otp;
    }, 1000);
}
