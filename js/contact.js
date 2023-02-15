
function showSelectedContactMethodInput() {
    let preferredContactMethod = document.querySelector('input[name="contactMethod"]:checked').value;

    let phoneDiv = document.getElementById("phone-number-div")
    let emailDiv = document.getElementById("email-div")

    if (preferredContactMethod == "text" || preferredContactMethod == "call") {
        phoneDiv.lastElementChild.value = ""
        phoneDiv.style.display = "inline"
        emailDiv.style.display = "none"
    }
    else if (preferredContactMethod == "email") {
        emailDiv.lastElementChild.value = ""
        emailDiv.style.display = "inline"
        phoneDiv.style.display = "none"
    }

    let radioButtons = document.querySelectorAll('input[name="contactMethod"]')
    radioButtons = Array.from(radioButtons)

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            radioButtons[i].style.backgroundColor = "#C1A25E"
        }
        else {
            radioButtons[i].style.backgroundColor = "#3A3A3A"
        }
    }

}

let radioButtons = document.forms["contact-form"].elements["contactMethod"];

for(var i = 0, max = radioButtons.length; i < max; i++) {
    radioButtons[i].addEventListener("click", showSelectedContactMethodInput)
}

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


// Send form info to Email 
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        let requireAlert = document.getElementById("require-alert");
        let successAlert = document.getElementById('success-alert');
        let errorAlert = document.getElementById('error-alert');

        // validate input values
        if (document.getElementById("name").value == "" || document.getElementById("message").value == "" || (document.getElementById("phone-number").value == "" && document.getElementById("email-address").value == "")) {
            successAlert.style.display = "none";
            errorAlert.style.display = "none";
            requireAlert.style.display = "block"
            window.scrollTo(0,0)
        } 
        else {
            let preferredContactMethod = document.querySelector('input[name="contactMethod"]:checked').value;

            let contactInformation = ''
            if (preferredContactMethod == "text" || preferredContactMethod == "call") {
                contactInformation = document.getElementById("phone-number").value
            }
            else if (preferredContactMethod == "email"){
                contactInformation = document.getElementById("email-address").value
            }

            this.name.value = document.getElementById("name").value;
            this.contactMethod.value = preferredContactMethod;
            this.contactInfo.value = contactInformation;
            this.message.value = document.getElementById("message").value;
            
            emailjs.sendForm('service_y4a368v', 'lux_tint_contact_form', this)
                .then(function() {
                    console.log('SUCCESS!');
                    document.getElementById('contact-form').reset();
                    for(var i = 0; i < radioButtons.length; i++) {
                        radioButtons[i].style.backgroundColor = "#3A3A3A"
                    }
                    errorAlert.style.display = "none";
                    requireAlert.style.display = "none";
                    successAlert.style.display = "block";
                    window.scrollTo(0,0)
                }, function(error) {
                    console.log('FAILED...', error);
                    requireAlert.style.display = "none";
                    successAlert.style.display = "none";
                    errorAlert.style.display = "block";
                    window.scrollTo(0,0)
                });
        }

    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

var close = document.getElementsByClassName("alert-close-btn");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
  }
}