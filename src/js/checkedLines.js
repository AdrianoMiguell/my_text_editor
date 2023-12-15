function checkedLines() {
  let spaceTextEditor = document.querySelector(".text-editor");
  let content = document.querySelectorAll(".content");
  let textLine = document.querySelectorAll(".content .text-line");

  for (let i = 0; i < content.length; i++) {
    if (
      (content[i] != undefined && textLine[i] == undefined)) {
        content[i].innerHTML = "";
        spaceTextEditor.removeChild(content[i]);
    }
  }
}

export default checkedLines;
