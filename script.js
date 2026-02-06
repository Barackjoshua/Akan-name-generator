// Get form and result
const form = document.getElementById("FORM");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const year = parseInt(document.getElementById("year").value);
  const month = parseInt(document.getElementById("month").value);
  const day = parseInt(document.getElementById("day").value);
  const gender = document.querySelector('input[name="gender"]:checked');

  // Validation
  if (!year || year < 1800 || year > 3000) {
    alert("Enter a valid year");
    return;
  }

  if (!month || month < 1 || month > 12) {
    alert("Month must be 1–12");
    return;
  }

  if (!day || day < 1 || day > 31) {
    alert("Day must be 1–31");
    return;
  }

  if (!gender) {
    alert("Please select gender");
    return;
  }

  // Akan names and days
  const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  // Calculate day of week using JS Date
  const dayIndex = new Date(year, month - 1, day).getDay();

  // Get Akan name
  const akanName = gender.value === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];

  // Display
  result.textContent = `You were born on ${days[dayIndex]} and your Akan name is ${akanName}.`;
});
