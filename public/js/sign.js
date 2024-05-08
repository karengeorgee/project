
function validate(){
  var a=document.getElementById('un').value;
var b=document.getElementById('pas').value;
var lettersOnly = /^[A-Za-z]+$/; // Regular expression to match only letters
 
if (a == "") {
  alert("Please enter the first name");
} else if (!a.match(lettersOnly)) {
  alert("First name should contain only letters");
} else if (b == "") {
  alert("Please enter the last name");
} else if (!b.match(lettersOnly)) {
  alert("Last name should contain only letters");
}
  else{
    
popup.classList.add("open-popup");
  }
}
let popup=document.getElementById("popup");
function openPopup(){
popup.classList.add("open-popup");
}
function closePopup() {
  // var userType = document.querySelector('select[name="UserType"]').value;
  var a=document.getElementById('un').value;
var b=document.getElementById('pas').value;
 
  if (a === "admin") {
    window.location.href = "/bgrb"; // Redirect to admin dashboard
  } else if (a === "user") {
    window.location.href = "userdash"; // Redirect to user dashboard
  } 
  else if(a==="Admin"){
    window.location.href = "/bgrb";
  }
  else if(a==="User"){
    window.location.href = "userdash";
  }

}
function toggleMenu() {
  var menuItems = document.getElementById("menuItems");
  menuItems.classList.toggle("show");
}

  
 