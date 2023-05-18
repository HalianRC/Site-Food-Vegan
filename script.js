const productsArray = [
  // Produto 1
  {
    image: "./img/frutas/cereja.jpg",
    name: "Cereja",
    price: "R$ 9,00 /KG",
    type: "Frutas",
  },
  {
    image: "./img/frutas/ameixa.jpg",
    name: "Ameixa",
    price: "R$ 5,00 /KG",
    type: "Frutas",
  },
  {
    image: "./img/frutas/pera.jpg",
    name: "pera",
    price: "R$ 4,00 /KG",
    type: "Frutas",
  },
  {
    image: "./img/frutas/uvas.jpg",
    name: "Uva",
    price: "R$ 8,00 /KG",
    type: "Frutas",
  },
  // Produto 2
  {
    image: "./img/frutas/morango.jpg",
    name: "Morango",
    price: "R$ 5,00 /KG",
    type: "Frutas",
  },
  // Produto 3 
  {
    image: "./img/frutas/maca.jpg",
    name: "Maça",
    price: "R$ 4,00 /KG",
    type: "Frutas",
  },
  // Produto 4
  {
    image: "./img/frutas/laranja.jpg",
    name: "Laranja",
    price: "R$ 2,00 /KG",
    type: "Frutas",
  },
  // Produto 5
  {
    image: "./img/frutas/banana.jpg",
    name: "Banana",
    price: "R$ 1,00",
    type: "Frutas",
  },
  // Produto 6
  {
    image: "./img/frutas/abacaxi.jpg",
    name: "Abacaxi",
    price: "R$ 5,00 /UN",
    type: "Frutas",
  },
  // Produto 7
  {
    image: "./img/verduras/alface.jpg",
    name: "Alface",
    price: "R$ 1,00 /UN",
    type: "Verduras",
  },
  // Produto 8
  {
    image: "./img/verduras/batata.jpg",
    name: "Batata",
    price: "R$ 2,00 /KG",
    type: "Verduras",
  },
  // Produto 9
  {
    image: "./img/verduras/beterraba.jpg",
    name: "Beterraba",
    price: "R$ 3,00 /KG",
    type: "Verduras",
  },
  // Produto 10
  {
    image: "./img/verduras/cenoura.jpg",
    name: "Cenoura",
    price: "R$ 3,00 /KG",
    type: "Verduras",
  },  
  // Produto 11
  {
    image: "./img/verduras/tomate.jpg",
    name: "Tomate",
    price: "R$ 1,00 /KG",
    type: "Verduras",
  }, 
  {
    image: "./img/verduras/cebola.jpg",
    name: "Cebola",
    price: "R$ 1,50 /KG",
    type: "Verduras",
  },
  {
    image: "./img/verduras/Alho.jpg",
    name: "Alho",
    price: "R$ 11,00 /KG",
    type: "Verduras",
  },
  {
    image: "./img/verduras/abobora.jpg",
    name: "Abobora",
    price: "R$ 2,00 /KG",
    type: "Verduras",
  },
  {
    image: "./img/verduras/rabanete.jpg",
    name: "Rabanete",
    price: "R$ 1,00 /KG",
    type: "Verduras",
  },
];


function separateItems(productsArray) {
  const fruitsArray = []
  const greenArray = []

  for (let i = 0; i < productsArray.length; i++) {
    const product = productsArray[i];

    if (product.type === "Frutas") {
      fruitsArray.push(product)
    } else if (product.type === "Verduras") {
      greenArray.push(product)
    }
  }
  return {
    fruitsArray,greenArray
  }
}

function addCardPaint(fruitsArray) {
  const listUnorderedPaint = document.getElementById("containerGreen")

  for (let i = 0; i < fruitsArray.length; i++) {
    const listPaint = document.createElement('li')
    listPaint.className = 'box'
    listUnorderedPaint.appendChild(listPaint)

    const imagePaint = document.createElement("img")
    imagePaint.src = fruitsArray[i].image;
    listPaint.appendChild(imagePaint)

    const titlePaint = document.createElement("h3")
    titlePaint.textContent = fruitsArray[i].name;
    listPaint.appendChild(titlePaint)
    
    const pricePaint = document.createElement("p")
    pricePaint.textContent = fruitsArray[i].price
    listPaint.appendChild(pricePaint) 
}
}

function addCardFigure(greenArray) {
  const listUnorderedAction = document.getElementById("containerFruits")
  
  for (let i = 0; i < greenArray.length; i++) {
    const listAction = document.createElement('li')
    listAction.className = 'box'
    listUnorderedAction.appendChild(listAction)
    
    const imageAction = document.createElement("img")
    imageAction.src = greenArray[i].image;
    listAction.appendChild(imageAction)

    const titleAction = document.createElement("h3")
    titleAction.textContent = greenArray[i].name;
    listAction.appendChild(titleAction)

    const priceAction = document.createElement("p")
    priceAction.textContent = greenArray[i].price
    listAction.appendChild(priceAction)
}
}

addCardPaint(separateItems(productsArray).greenArray)
addCardFigure(separateItems(productsArray).fruitsArray)