const btnBold = document.getElementById("bold");
const btnItalic = document.getElementById("italic");
const btnUnderline = document.getElementById("underline");
const btnStrikethrough = document.getElementById("strikethrough");
const btnSuperscript = document.getElementById("superscript");
const btnSubscript = document.getElementById("subscript");
const areaInput = document.getElementById("text-input");

const buttons = document.querySelectorAll(".option-button");

let options = {
  bold: false,
  italic: false,
  underline: false,
  strikethrough: false,
  superscript: false,
  subscript: false,
};

let textSelection;

const initialize = () => {
  areaInput.addEventListener("keyup", (e) => {
    textActual(null);
    keyboardShortcuts(e);
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      highlight(button.id);
    });
  });
};

const highlight = (id) => {
  let button = document.getElementById(id);
  let statusB = button.classList.contains("actived");

  if (statusB === true) {
    button.classList.toggle("actived");
    removeHighlight(id);
  } else {
    button.classList.add("actived");
    addHighlight(id);
  }
};

const addHighlight = (id) => {
  switch (id) {
    case "bold":
      options.bold = true;
      break;
    case "italic":
      options.italic = true;
      break;
    case "underline":
      options.underline = true;
      break;
    case "strikethrough":
      options.strikethrough = true;
      break;
    case "superscript":
      options.superscript = true;
      break;
    case "subscript":
      options.subscript = true;
      break;
  }
};

const removeHighlight = (id) => {
  switch (id) {
    case "bold":
      options.bold = false;
      break;
    case "italic":
      options.italic = false;
      break;
    case "underline":
      options.underline = false;
      break;
    case "strikethrough":
      options.strikethrough = false;
      break;
    case "superscript":
      options.superscript = false;
      break;
    case "subscript":
      options.subscript = false;
      break;
  }
};

const keyboardShortcuts = (keyboard) => {
  if (keyboard.keyCode == 66 && keyboard.ctrlKey === true) {
    highlight("bold");
    return;
  }
  if (keyboard.keyCode == 73 && keyboard.ctrlKey === true) {
    highlight("italic");
    return;
  }
  if (keyboard.keyCode == 85 && keyboard.ctrlKey === true) {
    highlight("underline");
    return;
  }
  if (keyboard.keyCode == 83 && keyboard.altKey === true) {
    highlight("strikethrough");
    return;
  }
  if (keyboard.keyCode == 187 && keyboard.altKey === true) {
    highlight("superscript");
    return;
  }
  if (keyboard.keyCode == 189 && keyboard.altKey === true) {
    highlight("subscript");
    return;
  }
};

const textActual = () => {
  child = document.querySelectorAll("#text-input div");

  if (child[0] == undefined) {
    aplication(areaInput);
  } else {
    aplication(child[child.length - 1]);
    child[child.length - 1].addEventListener("dblclick", function () {
      aplication(child[child.length - 1]);
    });
  }
};

const aplication = (child) => {
  textSelection = child;
  bold(options.bold, child);
  italic(options.italic, child);
  underline(options.underline, child);
  strikethrough(options.strikethrough, child);
  textAlignment(options.superscript, options.subscript, child);
};

const bold = (value, child) => {
  if (value === true) {
    child.style.fontWeight = "bold";
  } else {
    child.style.fontWeight = "500";
  }
};

const italic = (value, child) => {
  if (value === true) {
    child.style.fontStyle = "italic";
  } else {
    child.style.fontStyle = "normal";
  }
};

const underline = (value, child) => {
  if (value === false) {
    if (options.strikethrough === true) {
      child.style.textDecoration = "line-through";
    } else {
      child.style.textDecoration = "none";
    }
  } else {
    if (options.strikethrough === true) {
      child.style.textDecoration = "line-through underline";
    } else {
      child.style.textDecoration = "underline";
    }
  }
};

const strikethrough = (value, child) => {
  if (value === false) {
    if (options.underline === true) {
      child.style.textDecoration = "underline";
    } else {
      child.style.textDecoration = "none";
    }
  } else {
    if (options.underline === true) {
      child.style.textDecoration = "line-through underline";
    } else {
      child.style.textDecoration = "line-through";
    }
  }
};

const textAlignment = (superText, subText, child) => {
  if (superText === true) {
    child.style.verticalAlign = "super";
    child.style.fontSize = 6;
  } else if (subText === true) {
    child.style.verticalAlign = "sub";
    child.style.fontSize = 6;
  } else {
    child.style.verticalAlign = "middle";
    child.style.fontSize = 12;
  }
};

initialize();
