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
              var mealOption = (btnOptions[i].value);
            }
        }
}

