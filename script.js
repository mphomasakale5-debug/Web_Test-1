const calculator = document.getElementById("calculator");
const email = document.createElement("input");
email.type = "email";
email.placeholder = "Enter your email";
calculator.appendChild(email);

const number1 = document.createElement("input");
number1.type = "number";
number1.placeholder = "Enter number 1";
calculator.appendChild(number1);

const number2 = document.createElement("input");
number2.type = "number";
number2.placeholder = "Enter number 2";
calculator.appendChild(number2);

const number3 = document.createElement("input");
number3.type = "number";
number3.placeholder = "Enter number 3";
calculator.appendChild(number3);

const calculateButton = document.createElement("button");

calculateButton.textContent = "Calculate";

calculator.appendChild(calculateButton);
const result = document.createElement("p");

calculator.appendChild(result);
calculateButton.addEventListener("click", function() {

    const num1 = Number(number1.value);
    const num2 = Number(number2.value);
    const num3 = Number(number3.value);

    const sum = num1 + num2 + num3;

    result.textContent = "Sum = " + sum;
});
const daysHeading = document.createElement("h2");

daysHeading.textContent = "Days";

calculator.appendChild(daysHeading);
const dayText = document.createElement("p");

dayText.textContent = "Monday";

calculator.appendChild(dayText);
const dayButton = document.createElement("button");

dayButton.textContent = "Change day";

calculator.appendChild(dayButton);
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let dayIndex = 0;
dayButton.addEventListener("click", function() {

    dayIndex++;

    if (dayIndex === days.length) {
        dayIndex = 0;
    }

    dayText.textContent = days[dayIndex];
});
const monthsHeading = document.createElement("h2");

monthsHeading.textContent = "Months";

calculator.appendChild(monthsHeading);
const monthText = document.createElement("p");

monthText.textContent = "January";

calculator.appendChild(monthText);
const monthButton = document.createElement("button");

monthButton.textContent = "Change month";

calculator.appendChild(monthButton);
const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

let monthIndex = 0;
monthButton.addEventListener("click", function() {

    monthIndex++;

    if (monthIndex === months.length) {
        monthIndex = 0;
    }

    monthText.textContent = months[monthIndex];
});
document.body.style.fontFamily = "Arial";
document.body.style.textAlign = "center";

calculator.style.width = "300px";
calculator.style.margin = "20px auto";

calculator.querySelectorAll("input").forEach(function(input) {
    input.style.display = "block";
    input.style.width = "100%";
    input.style.padding = "8px";
    input.style.marginBottom = "10px";
});

calculator.querySelectorAll("label").forEach(function(label) {
    label.style.display = "block";
    label.style.marginTop = "10px";
});