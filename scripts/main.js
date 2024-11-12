const meals = [];

function addMeal(event) {
    event.preventDefault();
    const mealName = document.getElementById('meal-name').value;
    const calories = document.getElementById('calories').value;
    meals.push({ mealName, calories });
    renderMeals();
}

function deleteMeal(index) {
    meals.splice(index, 1);
    renderMeals();
}

function updateMeal(index) {
    const newMealName = prompt("Enter new meal name:");
    const newCalories = prompt("Enter new calories:");
    if (newMealName && newCalories) {
        meals[index] = { mealName: newMealName, calories: newCalories };
        renderMeals();
    }
}

function renderMeals() {
    const mealList = document.getElementById('meals');
    mealList.innerHTML = meals.map((meal, index) => `
        <li>
            ${meal.mealName} - Total Calories: ${meal.calories}
            <button onclick="deleteMeal(${index})">Delete</button>
            <button onclick="updateMeal(${index})">Edit</button>
        </li>
    `).join('');
}
