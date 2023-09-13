const textEditor = document.querySelector(".text-editor");
const newLineStructure = `
    <div class="text-line paragraphOp" contenteditable="true" tabindex="1" data-text="Enter text here"></div> 
    <div class="div-options"></div>`;

const newLine = function (r) {
  let div = document.createElement("div");
  div.setAttribute("class", "content newLine");
  div.innerHTML = newLineStructure;
  textEditor.appendChild(div);

  let textLineFocus = document.querySelectorAll(".content .text-line");
  textLineFocus[r + 1].focus();
};

export default newLine;
