var sides = [
    "Miso Glazed Carrots",
    "Coleslaw",
    "Garden Salad",
    "Crispy Potatoes",
    "Sweet Potato Tots",
    "Coconut Rice",
    "Caeser Salad",
    "Shrimp Summer Rolls",
    "Garlic Butter Mushrooms",
    "Hush Puppies"
]

var mains = [
    "Spaghetti and Meatballs",
    "Pineapple Chicken",
    "Shakshuka",
    "Thai Yellow Curry",
    "Bibimbap",
    "Chicken Parmesean",
    "Butternut Squash Soup",
    "BBQ Chicken Burgers",
    "Ramen",
    "Empanadas",
    "Chicken Fried Rice",
    "Sheet Pan Fajitas",
    "Margarita Pizza"
]

var desserts = [
    "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler",
    "Cheesecake",
    "Funfetti Cake",
    "Baklava",
    "Flan",
    "Macarons",
    "Macaroons",
    "Chocolate Cupcakes",
    "Pavlova",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Tart Tatin",
    "Croissants",
    "Eclairs"
]

var letsCookBtn = document.querySelector('.lets-cook-btn');
var clearBtn = document.querySelector('.clear-btn');
var cookPotImg = document.querySelector('cookpot-img');
var changeBox = document.querySelector('.change-box')

letsCookBtn.addEventListener('click', randomRecipe);
clearBtn.addEventListener('click', clearRecipe);

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function clearRecipe() {
    clearBtn.style = 'hidden';
    changeBox.innerHTML = `
      <img class='cookpot-img'
      alt="Image of cookpot"
      src='assets/cookpot.svg' 
      width="160px" height="160px">
    `
}

function randomRecipe() {
      clearBtn.style.visibility = 'visible';
      var btnOptions = document.getElementsByName('radio');
      for (var i = 0; i < btnOptions.length; i++) {
          if (btnOptions[i].checked) {
              btnOptions[i].checked = false;
              var mealOption = (btnOptions[i].value);
            }
        }
    if (mealOption === 'side') {
            changeBox.innerHTML = `
        <div class='dish'>
            <p class='you-should-make'>You should make:</p>
            <p class='dish-name'><font size ='5'>${sides[getRandomIndex(sides)]}</p>
        </div>
     `
    } else if (mealOption === 'main') {
        changeBox.innerHTML = `
        <div class='dish'>
            <p class='you-should-make'>You should make:</p>
            <p class='dish-name'><font size ='5'>${mains[getRandomIndex(mains)]}</p>
        </div>
     `
    } else if (mealOption === 'dessert') {
        changeBox.innerHTML = `
        <div class='dish'>
            <p class='you-should-make'>You should make:</p>
            <p class='dish-name'><font size ='5'>${desserts[getRandomIndex(desserts)]}</p>
        </div>
     `
    } else if (mealOption === 'meal') {
        changeBox.innerHTML = `
        <div class='recipe'>
            <p class='you-should-make'>You should make:</p>
            <p class='recipe-name'><font size ='5'>
            ${mains[getRandomIndex(mains)]} with a side of 
            ${sides[getRandomIndex(sides)]} and 
            ${desserts[getRandomIndex(desserts)]}
             for dessert!</font></p>
        </div>
     `
    }
}

