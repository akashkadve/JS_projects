let text = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem aut
    nostrum quos laborum. Iure, vitae nesciunt. Aut cupiditate debitis dolores
    cum minus! Quo fuga similique reprehenderit magni possimus cum.`,

  `derit magni possimus cum.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem aut
    nostrum quos laborum. Iure, vitae nesciunt. Aut cupiditate debitis dolores
    cum minus! Quo fuga similique reprehenderit magni possimus cum.`,

  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem aut
    nostrum quos laborum. Iure, vitae nesciunt. Aut cupiditate debitis dolores
    cum minus! Quo fuga similique reprehenderit magni possimus cum.`,

  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem aut
    nostrum quos laborum. Iure, vitae nesciunt. Aut cupiditate debitis dolores
    cum minus! Quo fuga similique reprehenderit magni possimus cum. laborum. 
    Iure, vitae nesciunt. Aut cupiditate debitis dolores
    cum minus! Quo fuga similique reprehenderit magni possimus cum.`,

  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem aut
    nostrum qu`,

  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem aut
    nostrum quos laborum. Iure, vitae nesciunt. Aut cupiditate debitis dolores
    cum minus! Quo fuga similique reprehenderit magni possimus cum.`,

  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem aut
    nostrum quos laborum. Iure, vitae nesciunt. Aut cupiditate debitis dolores
    `,

  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem aut
    nostrum quos laborum. Iure, vitae nesciunt. Aut cupiditate debitis dolores
    cum minus! Quo fuga similique reprehenderit magni possimus cum.`,

  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem aut
    nostrum quos`,
];

let generator = () => {
  let DataContainer = document.querySelector("#data");
  let number = document.querySelector("#numbers");
  console.log(number.value);
  if (isNaN(number.value) || number.value < 0 || number.value > 9) {
    const IndexText = Math.floor(Math.random() * text.length);
    DataContainer.innerHTML = `<p>${text[IndexText]}</p>`;
  } else {
    const totalText = text.slice(0, number.value);
    const paragraphs = totalText.map((item) => {
      return `<p>${item}</p>`;
    });
    DataContainer.innerHTML = paragraphs.join("");
  }
};
