const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

const addButtonEl = document.querySelector('#submitGoal');
const goalInputEl = document.querySelector('#goalInput'); 
addButtonEl.addEventListener("click",function(){
    let inputValue = goalInputEl.value;
    if (inputValue.trim() !== '') { // Check if the input is not empty
        addNewGoal(inputValue);
        goalInputEl.value = ''; // Clear the input field after adding the goal
    }
});

const addNewGoal = (goal) => { // Updated the function to accept a goal parameter
    const goalList = document.querySelector('#goalList');
    // Check if the goal already exists in the list
    if (!isGoalDuplicate(goal, goalList)) {
        const newGoal = document.createElement('li');
        newGoal.textContent = goal;
        goalList.appendChild(newGoal);
    } else {
        alert('This goal already exists!'); // Alert the user if the goal already exists
    }
};

const isGoalDuplicate = (goal, goalList) => {
    // Iterate through existing goals to check for duplicates
    for (let i = 0; i < goalList.children.length; i++) {
        if (goalList.children[i].textContent === goal) {
            return true; // If the goal already exists, return true
        }
    }
    return false; // If the goal doesn't exist, return false
};

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
