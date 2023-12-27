var login_btn = document.getElementById("login_btn");
let email = document.getElementById("email");
let password = document.getElementById("password");


login_btn.addEventListener("click", function(e){
    e.preventDefault();
    login();
  })
  function login(){
    let users={
      email:email.value,
      password:password.value
  }
  let user_record =[];
  if(JSON.parse(localStorage.getItem("users"))){
  user_record = JSON.parse(localStorage.getItem("users"));
  }
  for(var i=0;i<user_record.length;i++){
    if(users.email == user_record[i].email && users.password == user_record[i].password){
      alert("login success");
      let current_user = user_record[i].name ;
      localStorage.setItem("current_user",current_user);
      window.location.href="welcome.html";
     break;

    }
  }
  }