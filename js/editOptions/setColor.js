function setColor() {
  let contentAction = document.querySelector(".is__active .text-line");
  let setColor = document.querySelector(".is__active .inputColor");

  setColor.addEventListener("change", () => {
    let color = document.querySelector(".is__active .inputColor").value;
    console.log("Mudou a cor: " + color);
    contentAction.style.color = `${color}`;
  });
}

export default setColor;
