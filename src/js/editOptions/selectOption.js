import setOption from "./setOption.js";

function selectOption() {
  let select = document.querySelector(".is__active select");
  let optionSelectedValueOld = select.options[select.selectedIndex].text;
  select.addEventListener("change", selectOptionFunction);

  function selectOptionFunction() {
    if (select != undefined) {
      let optionSelectedValue = select.options[select.selectedIndex].text;
      setTimeout(() => {
        if (optionSelectedValueOld != optionSelectedValue) {
          setOption(optionSelectedValueOld, optionSelectedValue);
        }
      }, 20);
    }
  }
}

export default selectOption;
