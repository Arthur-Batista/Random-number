var intervalId;
var updateInterval =2000 ; 
var updateCount =0 ; 

function generateRandomNumber() {
   var maxValue = document.getElementById("maxValue").value; 
   var randomNumber = Math.floor(Math.random() * maxValue) +1 ; 
   document.getElementById("randomNumber").innerHTML = randomNumber; 
}

function startAutoUpdate() {
   if (intervalId) {
       clearInterval(intervalId);
   }
   updateInterval =2000 ; 
   updateCount =0 ; 
   intervalId = setInterval(updateRandomNumber, updateInterval);
}

function stopAutoUpdate() {
   if (intervalId) {
       clearInterval(intervalId);
       intervalId = null; 
       updateInterval =2000 ; 
       updateCount =0 ; 
   }
}

function updateRandomNumber() {
   generateRandomNumber();
   
   updateCount++;
   
   if (updateCount %2 ===0 && updateInterval >1400 ) {
       updateInterval -=100 ; 
       clearInterval(intervalId);
       intervalId = setInterval(updateRandomNumber, updateInterval);
   }
}

function toggleDarkMode() {
   document.body.classList.toggle('dark-mode');
}

function clearNumber() {
   document.getElementById("randomNumber").innerHTML = "";
}
