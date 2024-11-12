let calorieEntries = JSON.parse(localStorage.getItem('calorieEntries')) || [];

// Save entries to localStorage
function saveCalorieEntries() {
    localStorage.setItem('calorieEntries', JSON.stringify(calorieEntries));
}

// Function to add a new entry
function addCalorieEntry(event) {
    event.preventDefault();
    const date = document.getElementById('entry-date').value;
    const calories = document.getElementById('entry-calories').value;
    calorieEntries.push({ date, calories: parseInt(calories) });
    saveCalorieEntries();
    renderCalorieTable();
    updateChart();  // Update chart with new data
    event.target.reset();
}

// Function to render the table with calorie entries
function renderCalorieTable() {
    const tableBody = document.getElementById('calorieTableBody');
    if (!tableBody) {
        console.warn("Table body element not found on this page.");
        return;
    }
    tableBody.innerHTML = '';
    calorieEntries.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.date}</td>
            <td><span class="calorie-value" id="calories-${index}">${entry.calories}</span></td>
            <td>
                <button onclick="editEntry(${index})">Edit</button>
                <button onclick="deleteEntry(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to delete an entry
function deleteEntry(index) {
    calorieEntries.splice(index, 1);
    saveCalorieEntries();
    renderCalorieTable();
    updateChart();  // Update chart after deleting data
}

// Function to edit an entry
function editEntry(index) {
    const calorieSpan = document.getElementById(`calories-${index}`);
    const currentCalories = calorieEntries[index].calories;
    calorieSpan.innerHTML = `<input type="number" id="edit-calories-${index}" value="${currentCalories}">`;
    
    const saveButton = document.createElement('button');
    saveButton.innerText = 'Save';
    saveButton.onclick = () => saveEdit(index);
    calorieSpan.parentNode.appendChild(saveButton);
}

// Function to save the edited entry
function saveEdit(index) {
    const editedCalories = document.getElementById(`edit-calories-${index}`).value;
    calorieEntries[index].calories = parseInt(editedCalories);
    saveCalorieEntries();
    renderCalorieTable();
    updateChart();  // Update chart after editing data
}

// Function to render the calorie chart
function updateChart() {
    const canvas = document.getElementById('calorieChart');
    if (!canvas) {
        console.warn("Canvas element for chart not found on this page.");
        return;
    }

    const ctx = canvas.getContext('2d');

    // Destroy the existing chart instance if it exists and is a Chart instance
    if (window.calorieChart instanceof Chart) {
        window.calorieChart.destroy();
    }

    // Prepare data for the chart
    const labels = calorieEntries.map(entry => entry.date);
    const data = calorieEntries.map(entry => entry.calories);

    // Create the chart
    window.calorieChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Calories',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            },
            responsive: true
        }
    });
}

// Initial render on page load
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('calorieTableBody')) {
        renderCalorieTable();
    }
    if (document.getElementById('calorieChart')) {
        updateChart();
    }
});
