**Variables** we can save a value like a number or a string inside a variable and then use it later.
So here we used a **let** to create a new variable. We named this variable, variable1 and we saved the value 3 inside this
variable.

<script>
  let variable1 = 3;
</script>

let calculation = 2 + 2;

So this will calculate two plus two and then save the result which is four into the variable.


  <script>
      let calculation = 2 + 2;
      console.log(calculation);
      console.log(calculation + 2);
  </script>;

What this does is that it takes whatever value is saved inside the variable right now it is four and then substitutes that value into the calculation. So this will be four plus two, which equals six.

we can save any type of value in a variable including strings. it will show us that the string hello is saved inside this variable.

<script>
  let message = 'hello';
  console.log(message);
</script>;

we can't use special words like let as a variable name. **let** is a reserved word. However, we can use let let1 = 3; let2 as a variable names we just can't use let.

we can't start a variable name with a number. If we start with a number, JavaScript will think this is a number instead of a variable name. However, we can use numbers in the middle or the end.

Lastly, we can't use most special characters like these Q!#^&* or a space (let name twooo = 3;)in a variable name. However, there are two special characters we can use dollar $ and underscore _. 

Now there's one last part of the syntax that we haven't learned, which is the semicolon. We've seen semicolons in many places already in JavaScript. A semicolon means this is the end of an instruction.

we need semicolons to separate different instructions in JavaScript. if we didn't have the semicolon here it wouldn't work because JavaScript thinks that this entire line is one instruction. hello and dude appears on console:

console.log(message); console.log('dude');

This code belwo will work without that semicolon at the end, and that's because JavaScript inserts the last semicolon automatically. However, a lot of companies still prefer to use semicolons in their JavaScript code because semicolon insertion can sometimes put the semicolon in the wrong place.

console.log(message); console.log('dude')


  <script>
      let variable1 = 3;   // this is called assigning a value to a variable.
      console.log(variable1);
        variable1 = 5; //when we change the value inside this variable, this is called reassigning a value to a variable.
      console.log(variable1);
  </script>;

  we're going to reassign variable one again, so we can reassign a variable as many times as we want?

        variable1 = variable1 + 1;
      console.log(variable1);
    </script>;

  <button onclick="
      cartQuantity = cartQuantity + 2;
      cartQuantity +=2; //This is shortcut of upper line. Must use only one line.
      console.log(`Cart Quantity: ${cartQuantity}`);
  ">+2</button>

   <button onclick="
      //Following three behave the same and replacable as shorcut.
      cartQuantity = cartQuantity + 1;
      cartQuantity += 1;
      cartQuantity++;
      console.log(`Cart Quantity: ${cartQuantity}`);
   ">Add to cart</button>

   **Variable Re-assingment Shortcuts**
   += 2   variable = variable + 2
   -= 2   variable = variable - 2
   *= 2   variable = variable * 2
   /= 2   variable = variable / 2
   ++     variable = variable + 1
   --     variable = variable - 1

We learned earlier that we can't have spaces in a variable name, so if we want to have multiple words, we have to combine them together like this. cartQuantity, for a cart quantity,
we capitalize quantity, but we keep cart lowercase because it's the first word. Camel case is actually the standard naming convention for JavaScript. All of our variable names should use Camel Case.

camelCase   cartQuantity
PascalCase  CartQuantity
kebab-case  cart-quantity
snake_case  cart_quantity

Pascal case is the same as Camel Case except we capitalize the first word.In JavaScript, there is one feature where we use Pascal case, which we'll learn later in this course.

**Kebab case doesn't work in JavaScript because the dash is already a
minus symbol. However, we use kebab case in Html and CSS and also in
our file names **

we have Snake case where we keep the words lowercase and combine them with underscores. Snake case is used in other languages,
but it's not really used in JavaScript.

I want to note is that when we name our variables, try to pick a name that is not too short or too long.

 **So the first way is to use Let, which we already learned.
The second way to create a variable is to use the word **const** Const creates a variable just like let, except we can't change its value later. This value stays constant. That's why it's called Constant.**

<script>  
      const variable2 = 3;
     console.log(variable2); 
  </script>   const variable2 = 3;

So why would we ever use Cons instead of let, while Cons makes our code safer and easier to understand? When we create a variable with Const, we know for sure that this variable will always contain three for let. 

Finally, the third way of creating a variable is to use another word **var** VAR creates a variable just like Let, and this variable can be changed later. var is actually the original way to create variables in JavaScript.
var = variable, You might see VAR in older JavaScript code, so it's still useful to note. 
So those are three ways to create variables in JavaScript. Let Const and var, we use Const by default, and if we have to change a variable,
then use Let. 

typeof will tell us the type of value inside the variable,

const variable2 = 3;
console.log(typeof variable2);
number

const message = 'hello';
console.log(typeof message);
string

<button onclick="
  calculation = eval(calculation);
  console.log(calculation);
 ">=</button>

**eval(calculation);** converst the calculations string into actual maht. In real life use function. The eval() function evaluates JavaScript code represented as a string and returns its completion value. The source is parsed as a script.

console.log(eval('2 + 2'));
// Expected output: 4

console.log(eval(new String('2 + 2')));
// Expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// Expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// Expected output: false