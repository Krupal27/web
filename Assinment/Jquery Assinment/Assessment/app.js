

// console.log(ypassword);

function myvalidation(event) {

    // event.preventDefault();

    let Fname = document.getElementById("Fname");
    let Lname = document.getElementById("Lname");
    let yemail = document.getElementById("Email");
    let mnumber = document.getElementById("Mnumber");
    let ypassword = document.getElementById("Password");
    let validregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    if (Fname.value === '') {
        alert("Enter Your First Name")
        // event.preventDefault();
        // return false
    }
    else {
        console.log(Fname.value);
    }
    if (Lname.value === '') {
        alert("Enter Your Last Name");
        // event.preventDefault();
        // return false
    }
    else {
        console.log(Lname.value);
    }
    if (yemail.value === "") {
        alert("Enter Your Email");
        // event.preventDefault();
    }
    else if (yemail.value.length <= 6) {
        alert("more then 6 letter required");
        // event.preventDefault();
        // return false
    }
    else if (yemail.value.length != "") {
        if (yemail.value.match(validregex)) {
            // alert("Valid Email Address")
            console.log(yemail.value);
        }
        else {
            alert("Enter Valid Email Address");
            // event.preventDefault();
            // return false

        }
    }
    if (mnumber.value === "" || mnumber.value === null) {
        alert("Please enter your Mobile No.");
        // event.preventDefault();
        // return false;
    }
    else if (mnumber.value.length < 10 || mnumber.value.length > 10) {
        alert("Mobile No. is not valid, Please Enter 10 Digit Mobile No.");
        // event.preventDefault();
        // return false;
    }
    else {
        // alert("Success ");
        console.log(mnumber.value);
        // return true;
    }
    if (ypassword.value == '') {
        alert("Enter Your Valid Password");
        // event.preventDefault();
    }
    else if (ypassword.value.length < 8) {
        alert("Atleast 8 characters Required");
        // event.preventDefault();
    }
    else if (ypassword.value != '') {
        if (ypassword.value.search(/[0-9]/) == -1) {
            alert("inclued atleast 1 numaric value");
            // event.preventDefault();

        }
        else if (ypassword.value.search(/[a-z]/) == -1) {
            alert("inclued atleast lowercase characters");
            // event.preventDefault();

        }
        else if (ypassword.value.search(/[A-Z]/) == -1) {
            alert("inclued atleast uppercase characters");
            // event.preventDefault();

        }
        else if (ypassword.value.search(/[!,@,#,$,%,^,&,*]/) == -1) {
            alert("inclued atlest 1 special symbole (!,@,#,$,%,^,&,*)");
            // event.preventDefault();

        }
    }
    else {
        console.log(ypassword.value);
    }

}