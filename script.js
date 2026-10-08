
function login() {

    let name = document.getElementById("name").value;
    let usn = document.getElementById("usn").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;


    if (name == "" || usn == "" || email == ""||department=="") {

        document.getElementById("loginResult").innerHTML =
            "Please fill all fields.";

    }
    else {

        document.getElementById("loginResult").innerHTML =
            "Login / Registration successful!";
    }
}


function eventbooking() {

    let name = document.getElementById("sname").value;
    let usn = document.getElementById("roll").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let event = document.getElementById("event").value;
    let edate = document.getElementById("edate").value;

    // Check empty fields
    if (name == "" || usn == "" || email == "" ||
        department == "" || event == "" || edate == "") {

        document.getElementById("Registerresult").innerHTML =
            "Please fill all fields.";

        return;
    }

    let venue;

    if (event == "Event1") {
        venue = "Gymkhana";
    }
    else if (event == "Event2") {
        venue = "Arena";
    }
    else if (event == "Event3") {
        venue = "Auditorium";
    }

    document.getElementById("Registerresult").innerHTML =
        "Registration Successful!<br>" +
        "Student Name: " + name + "<br>" +
        "USN / Roll Number: " + usn + "<br>" +
        "Email: " + email + "<br>" +
        "Department: " + department + "<br>" +
        "Selected Event: " + event + "<br>" +
        "Event Date: " + edate + "<br>" +
        "Venue: " + venue;
}
