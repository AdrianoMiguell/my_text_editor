function setOption(oldOption, option) {
  if (oldOption != option) {
    let textLine = document.querySelector(".is__active .text-line");
    if (option.split(" ").length > 2) {
      option = `nova opção: ${option.split(" ")[1]}_${option.split(" ")[2]}`;
    }
    textLine.setAttribute("class", `text-line ${option}Op`);

    removeStyleOfInternalElements();
  }
}

function removeStyleOfInternalElements() {
  let divsTextLine = document.querySelector(".is__active .text-line *");
  if (divsTextLine != undefined) {
    divsTextLine.removeAttribute("style");
  }
}

export default setOption;
