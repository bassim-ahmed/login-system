var save_btn = document.getElementById("save_btn");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");


save_btn.addEventListener("click", function(E){
    E.preventDefault();
    saveData();
    clear();
})
function saveData(){
    if( nameRegex() == true && emailRegex() == true && passwordRegex() == true){
    let users={
        name:name.value,
        email:email.value,
        password:password.value
    }

//  localStorage.setItem("name", name);
//  localStorage.setItem("email", email);
//  localStorage.setItem("password", password);
let user_record =[];

if(JSON.parse(localStorage.getItem("users"))){
    user_record = JSON.parse(localStorage.getItem("users"));
}
if(user_record.some((v)=>{
    return v.email == users.email
})){
  alert("email already exist");
}else{

  user_record.push(users);
  localStorage.setItem("users", JSON.stringify(user_record))
  alert("data save successfully");
  window.location.href = "index.html";
}
}else{
    validate()
}

}
function passwordRegex() {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password.value);
  }
  function nameRegex() {
    var regex = /^[a-zA-Z ]+$/;
    return regex.test(name.value);
  }
  function emailRegex() {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email.value);
  }
  function validate() {
   if(nameRegex() == false) {
     alert(" please enter valid name with letters only");
     return false;
     } else if(emailRegex() == false){ 
     alert("invalid email address");
     return false;
     } else if(passwordRegex() == false){
     alert("invalid password you must enter at least one uppercase, lowercase, number and special character");
     return false;
     }
   }
   function clear() {
     name.value = "";
     email.value = "";
     password.value = "";
   }



