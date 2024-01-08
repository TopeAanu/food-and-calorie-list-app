// Food list array
let foodList = [];

// Function to add food to the list
function addFood(event) {
  event.preventDefault();
  const foodNameInput = document.getElementById("foodName");
  const caloriesInput = document.getElementById("calories");

  const food = {
    name: foodNameInput.value,
    calories: parseInt(caloriesInput.value)
  };

  foodList.push(food);
  displayFoodList();
  foodNameInput.value = "";
  caloriesInput.value = "";
}

// Function to display the food list
function displayFoodList() {
  const foodListElement = document.getElementById("foodList");
  foodListElement.innerHTML = "";

  foodList.forEach((food, index) => {
    const foodElement = document.createElement("div");
    foodElement.classList.add("card", "mb-2");
    foodElement.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${food.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Calories: ${food.calories}</h6>
      </div>
    `;

    foodListElement.appendChild(foodElement);
  });
}

// Event listener for form submission
document.getElementById("calorieForm").addEventListener("submit", addFood);