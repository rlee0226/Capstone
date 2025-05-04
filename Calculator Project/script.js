function add() {
    let a = document.querySelector("#num1").value;
    let b = document.querySelector(".num2").value;
    document.querySelector("#result").innerText = "Result: " + (Number(a) + Number(b));
  }
  
  function subtract() {
    let a = document.querySelector("#num1").value;
    let b = document.querySelector(".num2").value;
    document.querySelector("#result").innerText = "Result: " + (Number(a) - Number(b));
  }
  
  function multiply() {
    let a = document.querySelector("#num1").value;
    let b = document.querySelector(".num2").value;
    document.querySelector("#result").innerText = "Result: " + (Number(a) * Number(b));
  }
  
  function divide() {
    let a = document.querySelector("#num1").value;
    let b = document.querySelector(".num2").value;
    document.querySelector("#result").innerText = "Result: " + (Number(a) / Number(b));
  }
  