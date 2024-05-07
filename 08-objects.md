An object groups multiple values together.
const product= {};  < {}; is an object
    <script>
      const product= {
        name: 'socks',  // So inside our object we just added two values.
        price: 1090
      };
    </script>

So for each of these values we have some code on the left. This code is called the **property**.
And using the property we can access specific values in the object.
The code on the left is called the property, mane and price.
'socks' and 109 are values.
name: 'socks', Property-value pair.
 We separate the property and value with a colon and this is called a property value pair.
We can have many property value pairs in an object and we separate them with a comma. 
To access a value inside the object. We type the object's name and then dot, and then the property we want to access like name.
**product.name** This syntax is called **dot notation**. If we access a property that doesn't exist,
the value will be undefined. To change a value in an object, we can use the dot notation again, so product.name and just make it equal to something

We can type a property that doesn't exist. For example, here we can type product.new property
and make this equal to something like the bullion value true. If we console dot log the product again and save it will add this value to the object along with the new property. 
objects make our code more organized.
Instead of creating a bunch of variables for the products values like the name and the price and other details, we can just group all these related values together into one object.

<!DOCTYPE html>
<html>
  <head>
    <title>Objects</title>
  </head>
  <body>
        <script>
      const product= {
        name: 'socks',
        price: 1090
      };
      console.log(product); // {name: 'socks', price: 1090}
      console.log(typeof product); // object
      console.log(product.name); // name
      console.log(product.price); // 1090
      //  vvv  to change the value associated with the nameproperty to cotton socks. vvv // 
      product.name ='cottton socks'; 
      console.log(product); // {name: 'cottton socks', price: 1090}
      product.newProperty = true;
      console.log(product); // {name: 'cottton socks', price: 1090, newProperty: true}
      delete product.newProperty; //delete new property from the object.
      console.log(product); // {name: 'cottton socks', price: 1090}
    </script>
  </body>
</html>

  <script>
     const product2 = {
        name: 'shirt'
     };
     console.log(product2); // {name: 'shirt'}
     console.log(product2.name); // shirt 
     console.log(product2['name']); // shirt , this is called bracket notation and this does the same thing as dot notation here it gets the value associated with the name property.we use the bracket notation instead of the dot notation, bracket notation lets us use properties that normally don't work with dot notation.
     console.log(product2.delivery-time); // This property will give us an error and that's because JavaScript thinks that this dash is a minus sign and it's trying to do math. So in order to use a property like this, we have to use bracket notation.
     console.log(product2['delivery-time']); // endefined, To replace the dot with square brackets and turn this into a string. Now if we save it no longer gives us an error and because delivery time does not exist in the object, we get the value undefined.
    </script>
  </body>
</html>

Between the brackets we don't just have to use a string, we can use a variable, a calculation or anything that results in a value. We usually use dot notation by default because it's shorter and easier to read. But if we need to use properties that don't work with dot notation, then we use bracket notation.

  <script>
    const product2 = {
        name: 'shirt',
        'delivery-time': '1 day' // If we only have a string between the brackets, the brackets are actually optional so we can just type this If we save the code will still work
     };
     console.log(product2); // {name: 'shirt'}
     console.log(product2.name); // shirt 
     console.log(product2['name']); // shirt , this is called bracket notation and this does the same thing as dot notation here it gets the value associated with the name property.we use the bracket notation instead of the dot notation, bracket notation lets us use properties that normally don't work with dot notation.
     console.log(product2.delivery-time); // This property will give us an error and that's because JavaScript thinks that this dash is a minus sign and it's trying to do math. So in order to use a property like this, we have to use bracket notation.
     console.log(product2['delivery-time']); // endefined, To replace the dot with square brackets and turn this into a string. Now if we save it no longer gives us an error and because delivery time does not exist in the object, we get the value undefined.
    </script>
  </body>
</html>

If we only have a string between the brackets, the brackets are actually optional so we can just type this If we save the code will still work.

when we save functions inside an object, this is called a method 

const product2 = {
  name: 'shirt',
  ['delivery-time']: '1 day',
  rating: { //nested object, object inside an object
    stars: 4.5,
    count: 87
  },
  fun: function function1(){ //functions are also values and we can save them in an object. 
    console.log('function inside object');
  }
};

**JASON** stands for JavaScript object notation. The easiest way to understand Jason is it's basically a syntax. It's a similar syntax to a JavaScript object, ut it has less features. one difference is that all properties and strings must use double quotes. In Jason, Jason does not support single quotes. another difference is that Jason does not support functions. Jason Syntax can be understood by almost every programming language. So Jason syntax is more universal. For this reason, we use Jason when we send data between two computers that might use different programming languages. We also use Jason when we store data.
 The Jason object helps us convert a JavaScript object to Jason.

console.log(JSON.stringify(product2))  // {"name":"shirt","delivery-time":"1 day","rating":{"stars":4.5,"count":87}}, this will convert the object into Jason, which is a string. Jason string is ready to be sent to another computer
or to be saved in storage.

**JSON.pars** will turn the Jason string back
into a JavaScript object. So that's the built-in Jason object.
It helps us convert back and forth between a JavaScript object and Jason.

<script>
     const jsonString = JSON.stringify(product2);
     console.log(JSON.parse (jsonString)); // {"name":"shirt","delivery-time":"1 day","rating":{"stars":4.5,"count":87}} jason.pars will turn the Jason string back
</script>

**Local storage** is used to save values more permanently. So far we've been saving our values in variables. However, variables are temporary. The only exist on the current page. If we refresh the page or close the page, all the variables are deleted. So using local storage,
we were able to get the value that we saved earlier even though we refreshed the page.

<script>
  localStorage.setItem('message','hello');
  console.log (localStorage.getItem('message')); // hello
</script>

If the parameter is **undefined**, it will use the default value. However, if we set this parameter to **null**, it will not use the default value and it will just use null. So null means we intentionally want something to be empty.
In most cases though, null and undefined work the same way.

func(); => 'default'
func(undefined); => 'default'

func(null); => null

console.log('hello'.length);
     // => 5, So strings can also have properties. The length property tells us how many characters or letters are in this string. So hello has five letters.
console.log('hello'.toUpperCase()); 
     // => HELLO, his method gives us a copy of the string with all letters capitalized or in upper case

So as you can see,
simple values like strings can also have properties and methods. So now you might be wondering,
these are strings, not objects. How can strings have properties and methods?
The answer is that JavaScript has a special feature called auto boxing.
JavaScript automatically wraps this string in a special object first,
and this object has the property length and the method to uppercase. So this is done automatically.
We don't see the special object that's wrapped around this string.
So this feature is called **Auto-boxing** because JavaScript automatically wraps the string in an object like a box.  So auto boxing also works with other types of values like numbers and boelions. So auto boxing also works with other types of values like numbers and bulls.