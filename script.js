const btnBold = document.getElementById("bold");
const btnItalic = document.getElementById("italic");
const btnUnderline = document.getElementById("underline");
const btnStrikethrough = document.getElementById("strikethrough");
const btnSuperscript = document.getElementById("superscript");
const btnSubscript = document.getElementById("subscript");
const areaInput = document.getElementById("text-input");

const buttons = document.querySelectorAll(".option-button");
let children = [];

console.log(children);

let options = {
  bold: false,
  italic: false,
  underline: false,
  strikethrough: false,
  superscript: false,
  subscript: false,
  textAlignment: 0,
};

let textSelection;

const initialize = () => {
  areaInput.addEventListener("keyup", (e) => {
    keyboardShortcuts(e);
    verifyEvent(e);
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      highlight(button.id);
    });
  });

  highlight("justifyLeft");
};

const verifyEvent = (e) => {
  let i = document.querySelectorAll("#text-input div");

  if (typeof children == null) {
    children = document.querySelectorAll("#text-input div");

    textActual(children[children.length - 1]);
    children[children.length - 1].ondblclick = () => {
      textActual(children[children.length - 1]);
    };
  } else if (children.length != i.length) {
    console.log("nova linha");
    children = document.querySelectorAll("#text-input div");

    if (e.keyCode == 13) {
      console.log("Tecla verificada com o onkeyup");
      textActual(children[children.length - 1]);
      for (const i in children) {
        children[i].ondblclick = () => {
          textActual(children[i]);
        };
        children[i].onkeyup = () => {
          textActual(children[i]);
        };
      }
    } else {

    }
  }
};

const highlight = (id) => {
  let button = document.getElementById(id);
  let statusB = button.classList.contains("actived");

  if (String(id).slice(0, 7) == "justify") {
    let aligns = document.querySelectorAll(".align");
    aligns.forEach((algsTexts) => {
      let status = algsTexts.classList.contains("actived");
      if (status == true) {
        algsTexts.classList.toggle("actived");
      }
    });
  }

  if (statusB === true) {
    button.classList.toggle("actived");
    removeHighlight(id);
  } else {
    button.classList.add("actived");
    addHighlight(id);
  }
  console.log(id);
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
    case "justifyLeft":
      options.textAlignment = 0;
      break;
    case "justifyCenter":
      options.textAlignment = 1;
      break;
    case "justifyRight":
      options.textAlignment = 2;
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
    case "justifyLeft":
    case "justifyCenter":
    case "justifyRight":
      options.textAlignment = 0;
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

const positionText = (children) => {
  let position;

  for (const i in children) {
    children[i].addEventListener("click", () => {
      position = children[i];
    });
  }
  if (position === undefined) {
    position = null;
  }

  return position;
};

const textActual = (element) => {
  console.log("Chegou no textAtual");
  aplication(element);

  // child = document.querySelectorAll("#text-input div");
  // // let pos = positionText(child);

  // if (child[0] == undefined) {
  //   aplication(areaInput);
  //   areaInput.addEventListener("dblclick", function () {
  //     aplication(areaInput);
  //   });
  // } else if (child[0] != undefined && e.keyCode == 13) {
  //   child[child.length - 1].ondblclick = () => {
  //     aplication(child[child.length - 1]);
  //   };
  // } else {
  //   child[child.length - 1].onkeypress = () => {
  //     aplication(child[child.length - 1]);
  //   };
  // }
};

const aplication = (child) => {
  console.log("aplication");
  textSelection = child;
  bold(options.bold, child);
  italic(options.italic, child);
  underline(options.underline, child);
  strikethrough(options.strikethrough, child);
  textVerticalAlignment(options.superscript, options.subscript, child);
  textAlg(options.textAlignment, child);
};

const bold = (value, child) => {
  if (value === true) {
    child.style.fontWeight = "bold";
  } else {
    child.style.fontWeight = "400";
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

const textVerticalAlignment = (superText, subText, child) => {
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
const textAlg = (textAl, child) => {
  console.log(textAl);
  if (textAl == 0) {
    child.style.display = "flex";
    child.style.justifyContent = "start";
  } else if (textAl == 1) {
    child.style.display = "flex";
    child.style.justifyContent = "center";
  } else {
    child.style.display = "flex";
    child.style.justifyContent = "end";
  }
};

initialize();
