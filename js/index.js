const inputResult = document.getElementById("input-result");
const inputText = document.getElementById("input-text");
const inputWrapper = document.querySelector(".input-wrapper");
const button = document.querySelector(".action-button");

let digits = "";

const bin2Dec = () => {
  const decimal = digits.split("").reduce((acc, cur, i, arr) => {
    acc += parseInt(cur) * Math.pow(2, arr.length - 1 - i);
    return acc;
  }, 0);

  inputResult.value = decimal;
  inputText.value = "";
  digits = "";
};

inputText.addEventListener("keyup", (e) => {
  const inputError = document.querySelector(".input-error");
  if (inputError) {
    inputWrapper.removeChild(inputError);
  }

  if (e.key === "Enter") {
    bin2Dec();
    return;
  }
  const { value } = e.target;
  const valueReal = value[value.length - 1];
  if (valueReal !== "0" && valueReal !== "1") {
    inputText.value = `${value.slice(0, value.length - 1)}`;
    const p = document.createElement("p");
    p.classList.add("input-error");
    p.innerHTML = `Error you cannot enter others numbers than 0 and 1`;
    inputWrapper.appendChild(p);
    return;
  }
  digits = `${digits}${valueReal}`;
});

button.addEventListener("click", () => {
  bin2Dec();
});
