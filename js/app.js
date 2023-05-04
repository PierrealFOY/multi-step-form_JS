
// I get all the elements of the pages //
const submitButton = document.getElementsByClassName("submitButton");
const nextButton = document.getElementsByClassName("nextButton");
const backButton = document.getElementsByClassName("backButton");
const step = Array.from(document.querySelectorAll(".stepBloc"));

// Function to go to the next step //
function goToNextStep() {
  // I hide the current step //
  step[currentStep].classList.remove("active");
  step[currentStep].style.display = "none";
  
  // I go to the next step //
  currentStep++;

  // I show the next step //
  step[currentStep].classList.add("active");
  step[currentStep].style.display = "block";
}

// Function to go to the previous step //
function goToPrevStep() {
  // I hide the current step //
  step[currentStep].classList.remove("active");
  step[currentStep].style.display = "none";

  // I go to the previous step //
  currentStep--;

  // I show the previous step //
  step[currentStep].classList.add("active");
  step[currentStep].style.display = "block";
}

// I Initialize the form with the first step and the current step //
let currentStep = 0;
console.log(step[currentStep]);
step[currentStep].classList.add("active");

// Add event listeners to the next and back buttons //
for (let i = 0; i < nextButton.length; i++) {
  const button = nextButton[i];
  button.addEventListener("click", goToNextStep);
}

for (let i = 0; i < backButton.length; i++) {
  const button = backButton[i];
  button.addEventListener("click", goToPrevStep);
}
