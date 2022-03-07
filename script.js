let result = 0;
const resDisplay = document.getElementById("result");
const hisDisplay = document.getElementById("dis-his");
const opDisplay = document.getElementById("dis-op");
let dotFlag = true;

const setResult = () => {
  if (dotFlag && event.target.innerHTML === ".") {
    resDisplay.innerHTML += event.target.innerHTML;
    dotFlag = false;
  } else if (event.target.innerHTML === ".") {
  } else {
    resDisplay.innerHTML = Number(
      resDisplay.innerHTML + event.target.innerHTML
    );
  }
  if (hisDisplay.innerHTML.length > 1) {
    hisDisplay.innerHTML += event.target.innerHTML;
  } else {
    hisDisplay.innerHTML = resDisplay.innerHTML;
  }
};

const setOp = () => {
  opDisplay.innerHTML = event.target.innerHTML;
  result = Number(resDisplay.innerHTML);
  dotFlag = true;
  resDisplay.innerHTML = "";
  hisDisplay.innerHTML += opDisplay.innerHTML;
};

const setTotal = () => {
  resDisplay.innerHTML = String(
    calc(result, Number(resDisplay.innerHTML), opDisplay.innerHTML)
  );
  dotFlag = true;
  opDisplay.innerHTML = "";
  result = 0;
};

const setClr = () => {
  resDisplay.innerHTML = resDisplay.innerHTML.substring(
    0,
    resDisplay.innerHTML.length - 1
  );
  if (resDisplay.innerHTML.length === 0) {
    resDisplay.innerHTML = "0";
  }
  hisDisplay.innerHTML = hisDisplay.innerHTML.substring(
    0,
    hisDisplay.innerHTML.length - 1
  );
  if (hisDisplay.innerHTML.length === 0) {
    hisDisplay.innerHTML = "0";
  }
};

const calc = (a, b, op) => {
  let res;
  switch (op) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = b === 0 ? "Error" : a / b;
      break;
    default:
      res = b;
  }
  return res;
};
