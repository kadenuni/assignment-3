/********* create variables *********/
// Useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35; // Default rate for full day
const selectedDays = new Set(); // Store selected days to prevent duplicates

const dayButtons = document.querySelectorAll(".day"); // Buttons for days of the week
const clearButton = document.getElementById("clear-button");
const halfDayButton = document.getElementById("half");
const fullDayButton = document.getElementById("full");
const costDisplay = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// When the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// Added challenge: don't update the dayCounter if the same day is clicked more than once. Hint: .classList.contains() might be helpful here!

dayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.classList.contains("clicked")) {
      button.classList.add("clicked");
      selectedDays.add(button.id); // Use button ID as the key
    } else {
      button.classList.remove("clicked");
      selectedDays.delete(button.id);
    }
    calculateTotal(); // Recalculate total whenever a day is selected or deselected
  });
});

/********* clear days *********/
// When the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", () => {
  dayButtons.forEach((button) => button.classList.remove("clicked"));
  selectedDays.clear(); // Reset selected days
  calculateTotal(); // Reset total cost to 0
});

/********* change rate *********/
// When the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener("click", () => {
  dailyRate = 20;
  halfDayButton.classList.add("clicked");
  fullDayButton.classList.remove("clicked");
  calculateTotal(); // Recalculate total with updated rate
});

// When the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener("click", () => {
  dailyRate = 35;
  fullDayButton.classList.add("clicked");
  halfDayButton.classList.remove("clicked");
  calculateTotal(); // Recalculate total with updated rate
});

/********* calculate *********/
// When a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value.

function calculateTotal() {
  const totalCost = selectedDays.size * dailyRate;
  costDisplay.innerHTML = `${totalCost}`;
}
