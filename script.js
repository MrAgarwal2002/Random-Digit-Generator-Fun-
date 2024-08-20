const generateButton = document.getElementById("generateButton");
const result = document.getElementById("result");

generateButton.addEventListener("click", () => {
  const minValue = parseInt(document.getElementById("minValue").value);
  const maxValue = parseInt(document.getElementById("maxValue").value);

  if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue) {
    result.textContent = "Please enter valid minimum and maximum values.";
    return;
  }

  const randomNumber =
    Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  result.textContent = `Generated Random Number: ${randomNumber}`;
});
