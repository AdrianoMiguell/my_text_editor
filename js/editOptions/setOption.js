function setOption(oldOption, option) {
  if (oldOption != option) {
    let textLine = document.querySelector(".is__active .text-line");
    if (option.split(" ").length > 2) {
      option = `nova opção: ${option.split(" ")[1]}_${option.split(" ")[2]}`;
    }
    textLine.setAttribute("class", `text-line ${option}Op`);

    // if (option == "link") {
    //   textLine.innerHTML = `<a href="${textLine.textContent}">  ${textLine.textContent} </a>`;
    // }
  }
}

export default setOption;
