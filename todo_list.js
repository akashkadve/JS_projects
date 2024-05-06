let inputs = document.getElementById("inputs");
let text = document.getElementById("text");

function Add() {
  if (inputs.value == "") {
    alert("Please Enter Task");
  } else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = ` ${inputs.value} <button>delete</button>`;
    text.appendChild(newEle);
    inputs.value = "";
    newEle.querySelector("button").addEventListener("click", removeEle);
    function removeEle() {
      newEle.remove();
    }
  }
}
