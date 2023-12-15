const newLine = function (r) {
  const textEditor = document.querySelector(".text-editor");
  let allLine = document.querySelectorAll(".text-line");

  const l = allLine.length;

  const newLineStructure = `
    <div class="text-line line-${l} paragraph" contenteditable="true" tabindex="${r}" data-text="Enter text here"></div> 
    <div class="div-options"></div>`;

  let div = document.createElement("div");
  div.setAttribute("class", `content newLine content-${r}`);
  div.innerHTML = newLineStructure;
  textEditor.appendChild(div);

  let textLineFocus = document.querySelectorAll(".content .text-line");
  textLineFocus[r].focus();
};

export default newLine;
