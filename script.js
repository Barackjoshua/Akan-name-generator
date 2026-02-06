// Get the form

form.addEventListener('submit',(e)=>{
    e.preventDefault()
})


// 1. RETRIEVE USER INPUTS (based on your HTML order)
   const form = document.getElementById('form').value;
const year = document.getElementById('year').value;
const month = document.getElementById('month').value;
const date = document.getElementById('date').value;


    // Gender radios
   
const genderRadios = document.getElementsByName('gender').value;



    // 2. VALIDATION
    if(year === "" ) {
    alert("Please enter a year");
    return;
    }

if(month === "" ) {
    alert("Please enter a month");
    return;
    }

if(date === "" ) {
    alert("Please enter a date");
    return;
    }   

    if (genderRadios ===""){
    alert("Please select a gender");
    }

     //3.CALCULATION AND OUTPUT   
     






//Akan names 
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const   femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Days of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];      

// Calculate the day of the week
const dayOfWeek = new Date(year, month - 1, date).getDay(); 
let akanName = "";
if (genderRadios === "male") {
    akanName = maleNames[dayOfWeek];
} else if (genderRadios === "female") {
    akanName = femaleNames[dayOfWeek];
}   
// Display the result
alert("You were born on a " + daysOfWeek[dayOfWeek] + " and your Akan name is " + akanName);

    



 
   


