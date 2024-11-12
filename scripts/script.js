const meals = JSON.parse(localStorage.getItem('meals')) || [];

// Function to update localStorage whenever meals are modified
function saveMealsToLocalStorage() {
    localStorage.setItem('meals', JSON.stringify(meals));
}

// CRUD Operations
function addMeal(event) {
    event.preventDefault();
    const mealName = document.getElementById('meal-name').value;
    const calories = document.getElementById('calories').value;
    meals.push({ mealName, calories: parseInt(calories) });
    saveMealsToLocalStorage();
    renderMeals();
    updateChart();
    event.target.reset();
}

function deleteMeal(index) {
    meals.splice(index, 1);
    saveMealsToLocalStorage();
    renderMeals();
    updateChart();
}

function renderMeals() {
    const mealList = document.getElementById('meals');
    mealList.innerHTML = meals.map((meal, index) => `
        <li>
            ${meal.mealName} - Calories: ${meal.calories}
            <button onclick="deleteMeal(${index})">Delete</button>
        </li>
    `).join('');
}

// Chart.js instance variable to hold the chart object
let calorieChart = null;

function updateChart() {
    // Get the canvas context
    const ctx = document.getElementById('calorieChart').getContext('2d');
    
    // If the chart already exists, destroy it before creating a new one
    if (calorieChart) {
        calorieChart.destroy();
    }

    // Create the chart with updated data
    calorieChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: meals.map((meal, index) => `Meal ${index + 1}`),
            datasets: [{
                label: 'Calories',
                data: meals.map(meal => meal.calories),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initial render and chart setup when the page loads
document.addEventListener("DOMContentLoaded", () => {
    renderMeals();
    if (document.getElementById('calorieChart')) {
        updateChart();
    }
});
