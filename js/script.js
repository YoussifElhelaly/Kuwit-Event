// Set the date we're counting down to 
let countDownDate = new Date("Feb 15, 2025 15:37:25").getTime(); 
let daysCounter = document.getElementById("counterDays");
let hoursCounter = document.getElementById("counterHours");
let minutesCounter = document.getElementById("counterMinutes");
let secondsCounter = document.getElementById("counterSeconds");

// Update the count down every 1 second 
let x = setInterval(function() { 
     let now = new Date().getTime(); // Find the distance between now and the count down date
     let distance = countDownDate - now; 
//  Get today's date and time 
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); 

    daysCounter.innerText = days;
    hoursCounter.innerText = hours;
    minutesCounter.innerText = minutes;
    secondsCounter.innerText = seconds;
    // Display the result in the element with id="timer" 
    console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s "); 
    // If the count down is over, write some text 
    if (distance < 0) { 
        clearInterval(x);  
    } 
}, 1000);