const input = document.querySelector("#input");
const copyhex = document.querySelector("#copybtn");
const changeclr = document.querySelector("#colorbtn");

changeclr.addEventListener("click", function () {
  let colors = [
    "#FFF0C8",
    "#F8CEF6",
    "#D3FFCE",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
  ];

  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  input.value = randomColor;
  copyhex.style.backgroundColor = randomColor;
});

copyhex.addEventListener("click", function () {
  input.select();
  input.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(input.value);
  alert("Copied the text: " + input.value);
});
