import allOptions from "./editOptions/allOptions.js";

const constructOption = function (i) {
  const options = allOptions();
  const newContent = document.querySelector(".newLine");
  let divOptions = document.querySelector(".newLine .div-options");

  if (divOptions != undefined) {
    divOptions.innerHTML = "";

    let btnOpenOptions = document.createElement("button");
    btnOpenOptions.setAttribute("class", "btn-open-options");
    btnOpenOptions.setAttribute("tabindex", "2");
    btnOpenOptions.innerHTML = `<i class="bi bi-list"></i>`;
    divOptions.appendChild(btnOpenOptions);

    let testDivOptionsDisp = document.querySelector(`.div-options-${i}`);
    if (testDivOptionsDisp == undefined) {
      divOptions.innerHTML += `<div class="div-options-disp div-options-${i}">
        <span class='titleOption'> Opções </span>
      </div>`;
    }

    let createdDivOptionsDisp = document.querySelector(`.div-options-${i}`);
    let testOptionsDisp = document.querySelector(
      `.div-options-${i} .btn-select-${i}`
    );

    if (testOptionsDisp == undefined) {
      createdDivOptionsDisp.innerHTML += `
          <select class="btn-select btn-select-${i}">
          </select>`;

      testOptionsDisp = document.querySelector(
        `.div-options-${i} .btn-select-${i}`
      );

      for (let op = 0; op < options.name.length; op++) {
        testOptionsDisp.innerHTML += `
        <option class="btn-option"> 
         📝 ${options.name[op]}
         </option>`;
      }

      let divOptionsDisp = document.querySelector(`.div-options-${i}`);

      if (divOptionsDisp != undefined) {
        let divInputColor = `<div class='divInputColor'> 
          <input type='color' id='inputColor${i}' class='inputColor' />
          <label for='inputColor${i}'>  -  color </label>
        </div>`;
        divOptionsDisp.innerHTML += divInputColor;
      }
    }
  } else {
    console.log("Linha Desconhecida");
  }

  if (newContent.classList.contains("newLine")) {
    setTimeout(() => {
      newContent.classList.remove("newLine");
    }, 100);
  }
};

export default constructOption;
