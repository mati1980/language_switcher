"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

const def = "da";
texts[def].texts.forEach((textFyld) => {
  document.querySelector(textFyld.location).textContent = textFyld.text;
});

const selectElement = document.querySelector("#sprog");

selectElement.addEventListener("change", function () {
  const locale = selectElement.value;
  console.log("Valgt sprog: ", locale);
  // Udfører de ønskede handlinger, baseret på det valgte <option>.
  texts[locale].texts.forEach((textFyld) => {
    document.querySelector(textFyld.location).textContent = textFyld.text;
  });
});

//Sådan kommer man ned i objektet
//document.querySelector(texts[locale].texts[0].location).textContent = texts[locale].texts[0].text;
//document.querySelector(texts[locale].texts[1].location).textContent = texts[locale].texts[1].text;

//skal gøre så man kan skifte mellem de og da

//husk foreach over array (texts)

////
