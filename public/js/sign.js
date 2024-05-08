
function validate(){
  var a=document.getElementById('un').value;
var b=document.getElementById('pas').value;
 
  if(a==""){
    alert("Please enter the first name")
   
  }
 else if(b==""){
   window.alert("Please enter the last name")
  
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
  } else if (b === "User") {
    window.location.href = "/userdash"; // Redirect to user dashboard
  } 
}
function toggleMenu() {
  var menuItems = document.getElementById("menuItems");
  menuItems.classList.toggle("show");
}


  
 