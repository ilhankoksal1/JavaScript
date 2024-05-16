A function let's us reuse code. 
the rules for function names are the same as variable names.
    <body>
        <script>
          function function1() { // This group only crate the function not run it.
            console.log('hello');
            console.log(2 + 2);
          }  
          function1(); // run the code inside function abobe.
          function1(); 
  </script>

  the reason we created this function in the script element is because remember that the script element runs when the page is loaded.

if statements create a scope between the currently brackets, this means that any variable created between the currently brackets only exist between the curly brackets. Functions also create a scope. Any variable that is created between these curly brackets only exists inside the curly brackets and we can't use it outside the curly brackets like we do here.

functions also make our code easier to update in the future.


<script>
  // So now this **let computerMove = '';** variable below  is no longer inside the functions scope and it can be used anywhere else in the code. So variables like this that can be accessed anywhere are called global variables.

  let computerMove = ''; 
  function pickComputerMove() {
  
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3) {
      computerMove = 'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3) {
      computerMove = 'paper';
    }
    else if (randomNumber >= 2/3 && randomNumber < 1) {
      computerMove = 'scissors';
    }
    }
</script>

A **return statement** lets us get a value out of a function.

  <button onclick="
    console.log(pickComputerMove()); //whenever we call this function, it will result in a value the number five.
    let result ='';
    if (computerMove === 'rock') {
      result  ='You lose.'
    }
    else if (computerMove === 'paper') {
      result = 'You win';
    }
    else if (computerMove === 'scissors') {
      result = 'Tie';
    }
    alert (`You picked scissors. Computer picked ${computerMove}. ${result}`);
  ">Scissors</button>
  <script>
    let computerMove = '';
    function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3) {
      computerMove = 'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3) {
      computerMove = 'paper';
    }
    else if (randomNumber >= 2/3 && randomNumber < 1) {
      computerMove = 'scissors';
    }
    return 5; // we're going to type return and then a value like the number five and semicolon. Now whenever we call this function, it will result in a value the number five. So up here when we call this function, this will result in the number five. 
    }
    </script>

We can also return:

return 2+2; calculation
return variable!;
return Math.random;
return; undifente

when we use a return statement, it ends the function immediately. So after the return statement,  Notce that it doesn't run this code.  once we return the code returns back to where we call the function. That's why it's called a return statement.
     

At the end we're going to return whatever is inside computer, move back to where we called this function. So we're going to return all the way back here, and then we're going to save that return value into a new variable computer move and then use computer move down here.

<button onclick="
        computerMove = pickComputerMove();
        let result ='';
        if (computerMove === 'rock') {
          result  ='You lose.'
        }
        else if (computerMove === 'paper') {
          result = 'You win';
        }
        else if (computerMove === 'scissors') {
          result = 'Tie';
        }
        alert (`You picked scissors. Computer picked ${computerMove}. ${result}`);
      ">Scissors</button>
      <script>
      function pickComputerMove() {
        const randomNumber = Math.random();
        let computerMove = '';
        if (randomNumber >= 0 && randomNumber < 1/3) {
          computerMove = 'rock';
        }
        else if (randomNumber >= 1/3 && randomNumber < 2/3) {
          computerMove = 'paper';
        }
        else if (randomNumber >= 2/3 && randomNumber < 1) {
          computerMove = 'scissors';
        }
        return computerMove;
        }
</script> 

**parameters** are sort of the opposite of a return statement. A return statement gets a value out of a function. A parameter puts a value into a function. So let's do an example.

<script>
  function calculateTax() {
  console.log(1000 * 0.1); // in console : 100
  }
  calculateTax();
</script>

So as you can see, a parameter lets us put values into a function and this allows our function to work with any value.  We just typed the parameter name between the brackets,parameter names follow the same rules as variable names. We can't use special words.
when a function has a parameter, we usually say this function takes a parameter. If this parameter should be a number, we say this f**unction takes a number**. When we put a value into the function like this, we call this **passing a value into the function**. Another name for this value is called the argument.

A parameter only exists inside the functions scope. So we can only use this parameter between the curly brackets, we can't use it outside the function.

<script>
  function calculateTax(parameter1) {
  console.log(parameter1 * 0.1);
  }
  calculateTax(2000); // in console : 200
  calculateTax(5000); // in console : 500 Another name for this value '5000' is called the argument.
</script>

> alert ('hello') // alert = funciton, 'hello' = parametr
Now every time we call the function, we can save a different value into the parameter.

A function can actually have more than one parameter. So the first value gets saved in the first parameter and the second value gets saved in the second parameter. And now we can use our second parameter just like a variable.

// * this first line will multiply 2000 by 0.2 and give us 400 cents as the result. 
// ** the second time we call this function, we didn't give a value for the second parameter. If we don't save a value into the parameter, the parameter will get the value undefined. in conslo: NaN

<script>
  function calculateTax(cost, taxPercent) {
  console.log(cost * taxPercent); 
  }
  calculateTax(2000, 0.2); // ** in console 
  calculateTax(5000)       // *
</script>

we can also set a default value for the parameter to set a default value. We can just type after the parameter and then add equals sign and a default value like 0.1 If we save the second function call will multiply 5,000 by the default value 0.1 and give us 500.

<script>
  function calculateTax(cost, taxPercent = 0.1) {
  console.log(cost * taxPercent);
  }
  calculateTax(2000, 0.2); // in console 400
  calculateTax(5000); // in console 500
</script>