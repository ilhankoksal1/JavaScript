let calculation = localStorage.getItem('calculation') || '';

// Display the calculation when the page first loads.
displayCalculation();

function updateCalculation(value) {
  calculation += value;

  // Display the calculation on the page
  // instead of console.log
  displayCalculation();

  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
}

function d(){
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }
  let a = 1
  a = "ozan"
  a = [1,2,3]
}