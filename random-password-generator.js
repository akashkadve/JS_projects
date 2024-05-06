let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let special_char = "!@#$%^&*()/+_";

let getRandomData = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
};

let generate = (password = "") => {
  let numberSet = document.getElementById("number");
  if (numberSet.checked) {
    password += getRandomData(number);
  }
  let upperSet = document.getElementById("upperSet");
  if (upperSet.checked) {
    password += getRandomData(upper);
  }
  let lowerSet = document.getElementById("lowerSet");
  if (lowerSet.checked) {
    password += getRandomData(lower);
  }
  let special_charSet = document.getElementById("special-Char");
  if (special_charSet.checked) {
    password += getRandomData(special_char);
  }

  let enter_number = document.getElementById("enter-number");
  if (password.length < enter_number.value) {
    return generate(password);
  }

  let enter = document.getElementById("enter");
  enter.innerHTML = truncate(password, enter_number.value);
};

function truncate(str, num) {
  if (str.length > num) {
    let substr = str.substring(0, num);
    return substr;
  } else {
    return str;
  }
}
