const regBtn = document.querySelector(".reg-btn");
const regform = document.querySelector(".register");

const loginform = document.querySelector(".login");
const loginBtn = document.querySelector(".login-btn");

regBtn.addEventListener("click", (e) => {
  
  regBtn.classList.add("active");
  loginBtn.classList.remove("active");

  regform.classList.remove("hidden");
  loginform.classList.add("hidden");
});

const regSubmit = document.querySelector(".reg-sub-btn");
const loginSubmit = document.querySelector(".login-sub-btn");

const regUserName = document.querySelector(".reg-username");
const regPassword = document.querySelector(".reg-password");
const regEmail = document.querySelector(".reg-email");

const loginUserName = document.querySelector(".login-username");
const loginPassword = document.querySelector(".login-password");



loginBtn.addEventListener("click", (e) => {
  e.preventDefault()
  regBtn.classList.remove("active");
  loginBtn.classList.add("active");

  regform.classList.add("hidden");
  loginform.classList.remove("hidden");
});

regSubmit.addEventListener("click", (e) => {
   
  const user = {
    username: regUserName.value,
    email: regEmail.value,
    password: regPassword.value,
  };

  localStorage.setItem(user.username, JSON.stringify(user));

  console.log(user);
});

loginSubmit.addEventListener("click", (e) => {
  e.preventDefault()
  const obj = JSON.parse(localStorage.getItem(loginUserName.value));
  if (loginPassword.value !== obj.password) {
    alert("invalid credentials");
    return;
  }
  const user = {
    username: obj.username,
    email: obj.email,
    password: obj.password,
  };

//   alert("login sucessful");
//   alert(JSON.stringify(user));

  regform.classList.add("hidden");
  loginform.classList.add("hidden");
  headbtns.classList.add("hidden");
  enterUserPage(user);
});
const headbtns = document.querySelector(".head-btn")
const userpage = document.querySelector(".userpage");

const h1Tag = document.querySelector(".h1-data");

const enterUserPage = (user) => {

    userpage.classList.remove("hidden")
    h1Tag.innerHTML += " "+user.username

};
