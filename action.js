main_form = document.getElementById('form');
contact_form = document.getElementById('contact-form');

const first_name_input = document.getElementById("first-name");
const last_name_input = document.getElementById("last-name");
const email_input = document.getElementById("email");
const message_input = document.getElementById("message");

const error_main = document.querySelectorAll(".error");
// const input_main = document.getElementsByClassName("input");

const first_name_error = document.getElementById("first-name-error")
const last_name_error = document.getElementById("last-name-error")
const email_error = document.getElementById("email-error")
const query_error = document.getElementById("query-error")
const message_error = document.getElementById("message-error")
const consent_error = document.getElementById("consent-error")

const enquiry_checkbox = document.getElementById('enquiry-checkbox');
const support_checkbox = document.getElementById('support-checkbox');
const consent_checkbox = document.getElementById('consent-checkbox');

const general_enquiry = document.getElementById('general-enquiry');
const support_request = document.getElementById('support-request')

enquiry_checkbox.addEventListener('change', function () {
    if (this.checked) {
        support_checkbox.checked = false;
        general_enquiry.style.border = "0.125rem solid hsl(169, 82%, 27%)";
        general_enquiry.style.backgroundColor = "hsl(148, 38%, 91%)";

        support_request.style.border = "";
        support_request.style.backgroundColor = "";
    } else {
        general_enquiry.style.border = "";
        general_enquiry.style.backgroundColor = "";
    }
});

support_checkbox.addEventListener('change', function () {
    if (this.checked) {
        enquiry_checkbox.checked = false;
        support_request.style.border = "0.125rem solid hsl(169, 82%, 27%)";
        support_request.style.backgroundColor = "hsl(148, 38%, 91%)";

        general_enquiry.style.border = "";
        general_enquiry.style.backgroundColor = "";
    } else {
        support_request.style.border = "";
        support_request.style.backgroundColor = "";
    }
});

// document.addEventListener('click', function (event) {

//     if (!general_enquiry.contains(event.target) && !support_request.contains(event.target)) {
//         enquiry_checkbox.checked = false;
//         support_checkbox.checked = false;

//         support_request.style.border = "";
//         support_request.style.backgroundColor = "";

//         general_enquiry.style.border = "";
//         general_enquiry.style.backgroundColor = "";
//     }
// })

document.getElementById("form").addEventListener("submit", function (e) {
    const hasNumber = /\d/; // regex to detect any digit
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (first_name_input.value.trim() === "" ) {
        first_name_error.innerHTML = "This field is required.";
        e.preventDefault();
    } else if (hasNumber.test(first_name_input.value)) {
        first_name_error.innerHTML = "First name cannot contain numbers.";   
        e.preventDefault(); 
    };

    if (last_name_input.value.trim() === "" ) {
        last_name_error.innerHTML = "This field is required.";
        e.preventDefault();
    } else if (hasNumber.test(last_name_input.value)) {
        last_name_error.innerHTML = "First name cannot contain numbers.";   
        e.preventDefault(); 
    };

    if (email_input.value.trim() === "" || !emailPattern.test(email_input.value)) {
        email_error.innerHTML = "Please enter a valid email address";
        e.preventDefault();
    } 

    if (!enquiry_checkbox.checked && !support_checkbox.checked) {
        query_error.innerHTML = "Please select a query type"
    }

    if (message_input.value.trim() === "" ) {
        message_error.innerHTML = "This field is required.";
        e.preventDefault();
    }

    if (!consent_checkbox.checked) {
        consent_error.innerHTML = "To submit this form, please consent to being contacted.";
        e.preventDefault();
    }

    contact_form.style.paddingTop = "1.4rem";
    main_form.style.gap = "1.1rem";

    if (first_name_input.value.trim() !== "" && 
        last_name_input.value.trim() !== "" && 
        email_input.value.trim() !== "" && 
        message_input.value.trim() !== "" && 
        (enquiry_checkbox.checked || support_checkbox.checked) && 
        consent_checkbox.checked) {
        
        e.preventDefault(); 
        const success_message = document.getElementById("successMessage");// Prevent form submission for demonstration purposes
        setTimeout(() => {
            success_message.style.display = "flex";
            success_message.classList.add("show");

            setTimeout(() => {
                success_message.classList.remove("show");
            }, 3000);
        }, 1000); // Delay before showing (1 second)


        first_name_input.value = '';
        last_name_input.value = '';     
        email_input.value = '';
        message_input.value = '';
        enquiry_checkbox.checked = false;
        support_checkbox.checked = false;
        consent_checkbox.checked = false;
        general_enquiry.style.border = "";
        general_enquiry.style.backgroundColor = "";
        support_request.style.border = "";
        support_request.style.backgroundColor = "";

    }
});

document.addEventListener("click", function () {
    error_main.forEach(error => {
        error.textContent = ''; // or error.innerHTML = '';
      });
    
});