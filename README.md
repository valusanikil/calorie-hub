# 🥗 Calorie Hub

## 📖 **Project Overview**
**Calorie Hub** is a dynamic web application designed to help users:
✅ Monitor daily calorie intake  
✅ Visualize their dietary habits  
✅ Explore healthy recipes with nutritional values  
✅ Make informed health choices  

---

## 🚀 **Core Functionalities**
### ✅ **1. Calorie Tracker**
- Add, edit, or delete daily calorie intake
- Maintain historical records
- Simple UI to log calories daily

### ✅ **2. Calorie Visualizations (Chart.js)**
- **Line Chart:** Track calories over time
- **Bar Chart:** Weekly average calorie consumption
- **Pie Chart:** Calories burned by activities (Running, Cycling, etc.)

### ✅ **3. Recipe Recommendation**
- Explore healthy recipes with ingredients, preparation time, and calories
- Visually appealing recipe cards with food images

### ✅ **4. Healthy Tips & Insights**
- Interactive health tips section for mindful eating
- Personalized dietary insights (future enhancement ready)

### ✅ **5. About Team Page**
- Team profiles with photos and roles
- LinkedIn profiles integration

---

## 📸 **Screenshots Showcase**

### 🏠 **Landing Page**
<img src="assets/Screenshot 2025-03-19 234509.png" alt="">

### 📌 **Features Highlight Section**
<img src="assets/Screenshot 2025-03-19 234520.png" alt="">

### 🗓 **Daily Calorie Tracker**
- Editable, deletable calorie entries
<img src="assets/Screenshot 2025-03-19 234534.png" alt="">

### 🍳 **Recipe Cards with Nutritional Info**
<img src="assets/Screenshot 2025-03-19 234615.png" alt="">
<img src="assets/Screenshot 2025-03-19 234626.png" alt="">

### 📊 **Calorie Visualizations**
#### 🔹 **Line Chart**
<img src="assets/Screenshot 2025-03-19 234641.png" alt="">

#### 🔹 **Bar Chart**
<img src="assets/Screenshot 2025-03-19 234707.png" alt="">

#### 🔹 **Pie Chart (Calories Burned by Activity)**
<img src="assets/Screenshot 2025-03-19 234720.png" alt="">

### 👨‍💻 **About the Team**
<img src="assets/Screenshot 2025-03-19 234655.png" alt="">

---

## 💻 **Technology Stack**
| Front-End        | Data Visualization | Deployment Ready | Version Control |
|------------------|--------------------|------------------|-----------------|
| HTML5, CSS3      | Chart.js           | GitHub Pages / Netlify | Git & GitHub |
| JavaScript (Vanilla) | Bootstrap      | Responsive Design | |

---

## 📂 **Folder Structure Overview**
```
Calorie Hub/
│
├── index.html           # Homepage
├── chart.html           # Calorie charts
├── recipe.html          # Recipes
├── about.html           # Team information
├── script.js            # Core JS logic
├── style.css            # Styling
├── images/              # Team, food, and chart images
├── scripts/             # Additional JS files
├── styles/              # Additional CSS
└── .vscode/             # Editor configs
```

## 📈 **Chart Module Sample (Chart.js)**
```javascript
const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3'],
        datasets: [{
            label: 'Calories',
            data: [200, 150, 300],
            borderColor: 'blue',
            backgroundColor: 'lightblue',
        }]
    },
    options: { responsive: true }
});
```

---

## ✅ **Key Highlights**
- 📊 **Real-time data visualization**
- 📱 **Fully responsive design**
- 🖼️ **Recipe images with calories**
- 📈 **Interactive charts**
- 📂 **Clean, modular code**
- 🚀 **Ready for future enhancements like authentication, APIs**

---

## 🧠 **Future Scope**
✅ Integrate real-time food database APIs (Edamam / Spoonacular)  
✅ Add user login and profile management  
✅ Export calorie data as PDF/CSV  
✅ Mobile app extension  
✅ Personalized health goals tracking  

---

## 🔧 **How to Run Locally**
```bash
git clone https://github.com/YourUsername/calorie-hub.git
cd calorie-hub
Open index.html in your preferred browser
```
> *No external backend or database needed — runs fully on the browser*

---

## 🌟 **Final Notes**
✅ Fully responsive & user-friendly  
✅ Scalable for mobile and web deployment  
✅ Well-structured for collaborative development  
✅ Highlights frontend + data visualization skills

---
