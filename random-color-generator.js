let color_generate = () => {
  let randomNumber = Math.floor(Math.random() * 16777215);
  let randomCode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;
  document.getElementById("code-name").innerHTML = randomCode;
};

//event call
document.getElementById("btn").addEventListener("click", color_generate);

//initial call
color_generate();
