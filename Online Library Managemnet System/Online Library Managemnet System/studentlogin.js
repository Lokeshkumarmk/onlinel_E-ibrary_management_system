var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "20BCA0057" && password == "2003"){
window.location = "student_home.html"; // Redirecting to other page.
return false;
}
if (username=="20BCA0052" && password=="2002")
{
loggedin=true;
window.location="student_home.html";
}
if (username=="20BCA0030" && password=="2002")
{
loggedin=true;
window.location="student_home.html";
}
if (username=="20BCA0003" && password=="2002") {
loggedin=true;
window.location="student_home.html";
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
