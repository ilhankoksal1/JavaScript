**To crate a website:**
  HTML crates the content of a website
  CSS changes the appearance of the website
  JavaScritp make it interactive

**To give a computer a JavaScritp intruction to follow:**
    g*o blank area of web page
    right click, click inpect, click console
    insede console.

    >alert('hello');
    'hello' 
    
Computer creates a popup with a text inside  'hello'
        
**Math instruciton:**

    2 +2 
    4
JS modify the webpage, removes everthing in the page, replece it with "hello".

    >document.body.innerHTML = 'hello'
    >hello    
    
  


  TERMINOLOGY
  instruction given to computer is code.
  When press enter, computer follow the instruction, running the code.

it will calculate these decimal numbers and result in 4.4

>2.2 + 2.2
4.4

the order operations, adding, subtracting, multiplying and dividing:
2 + 2
2 - 2
10 * 3
10 / 3

> 1 + 1 *3
4

One thing to note is that multiply and divide have the same priority, so if we have both in a calculation, it will calculate from left to right.

when we use brackets, JavaScript will always do the calculation inside the brackets first. Brackets have the highest priority in the order of operations.

> (1 + 1) * 3
6

Whole numbers like 2, 3, and 4 are called integers. Decimal numbers like 2.2 and  2.5 are called floating point numbers or floats, and unfortunately, computers have a problem working with floats. For example,

> 0.1 + 0.2
0.30000000000000004

it will give us this weird number here that's close to 0.3, but a little bit inaccurate. So this problem is not specific to JavaScript. Many programming languages also have this problem. The reason this happens is because of how computers store numbers, in binary.

The best practice when calculating money is to calculate in cents instead of dollars. So instead of $20 and 95 cents, we're going to calculate 2090 5 cents plus seven 99 cents. Notice we're not using floats anymore, so we avoid the inaccuracies.

> 20.95 + 7.99
28.939999999999998

>( 2095 + 799) /100
28.94

Rounding just means taking a number and moving it to the nearest, integer to round a number. We can use this code:
>Math.round(2.2)
2

**STRING = TEXT **

in console:
>'hello'
'hello


we just write some text like hello, and then surround this text with single quotes,
>alert('hello');
hello in popup

We can also add strings together. For example, the computer will combine two strings into one big
string. By the way, this is called **Concetenation** when we combine strings together.

>'some' + 'text'
semetext

>typeof 2
'number'

it will tell us that hello is a string.
>typeof 'hello'
'string'

>'hello' + 3
'hello3'

So this gets converted into the string, hello plus the string 3. This feature is called **type coercion or automatic type conversion**.

'Items (' + (1 + 1) + '):$' + (2095 + 799) / 100
'Items (2):$28.94'
