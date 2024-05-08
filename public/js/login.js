
    function login() {
      // Dummy logic to simulate successful login
      // Replace this with your actual login logic
      // alert("You have logged in successfully!");
      // window.location.href = "SJAK.html"; // Redirect to SJAK page
      // return false; // Prevent form submission
      
      var a=document.getElementById('username').value;
    var b=document.getElementById('password').value;
     
      if(a==""){
        alert("Please enter the first name")
       
      }
     else if(b==""){
       window.alert("Please enter the Password")
      
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
  var userType = document.querySelector('select[name="UserType"]').value;
  if (userType === "Admin") {
    window.location.href = "/bgrb"; // Redirect to admin dashboard
  } else if (userType === "User") {
    window.location.href = "/userdash"; // Redirect to user dashboard
  } else {
    window.location.href = "/SJAK"; // Redirect to default page
  }
}


function toggleMenu() {
  var menuItems = document.getElementById("menuItems");
  menuItems.classList.toggle("show");
}

  //  alert("You have logged in successfully!");
  //     window.location.href = "SJAK.html"; // Redirect to SJAK page
  //     return false; // Prevent form submission
    
  