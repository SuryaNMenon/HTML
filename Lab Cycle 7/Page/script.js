let userReq = document.getElementById("username");

userReq.addEventListener('blur', checkUserReq);

function checkUserReq(e){
    let username = e.target.value;
    if(username.length < 5){
        let notif = document.getElementById("userNotif");
        notif.innerHTML = "*Username must be 5 characters or more";
    }
}

let pwReq = document.getElementById("password");

pwReq.addEventListener('blur', checkPwReq);

function checkPwReq(e){
    if(e.target.value.length<8){
        document.getElementById("pwNotif").innerHTML = "*Password must be 8 characters or more"
    }
}

let selectReq = document.getElementById("package");
package.addEventListener('click', discountOffer);

function discountOffer(){
    //document.getElementById("selectNotif").innerHTML = "Save 500 if you pay for 1 year!"
    if(selectReq.value == "1mo")
    document.getElementById("selectNotif").innerHTML = "Save 500 if you pay for 1 year!";
}

let register = document.getElementById("register");
register.addEventListener("click", terms);

function terms(e){
    if(!document.getElementById("checkbx").checked){
        document.getElementById("termsNotif").innerHTML = "Please agree to the terms and conditions."
    }
}