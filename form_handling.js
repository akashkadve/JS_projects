let first_name = document.getElementById("FirstName");
let Last_name = document.getElementById("LastName");
let password = document.getElementById("password");

let Form_handling = () => {
  if (first_name.value == "") {
    // alert("enter valid data");
    first_name.style.border = "2px solid red";
    document.getElementById("fn").style.visibility = "visible";
  }
  if (Last_name.value == "") {
    // alert("enter valid data");
    Last_name.style.border = "2px solid red";
    document.getElementById("ln").style.visibility = "visible";
  }
  if (password.value == "") {
    // alert("enter valid data");
    password.style.border = "2px solid red";
    document.getElementById("pw").style.visibility = "visible";
  }
  document.getElementById("abc4").innerHTML = `${first_name.value}`;
};

let keyword = true;
let abc = () => {
  if (keyword == true) {
    document.getElementById("hello").style.backgroundColor = "black";
    document.getElementById("hello").style.color = "white";
    keyword = false;
  } else {
    document.getElementById("hello").style.backgroundColor = "gray";
    document.getElementById("hello").style.color = "red";
    keyword = true;
  }
};

document.getElementById("btn2").addEventListener("click", abc);
