# Functions and loops implementation

## Introduction
We will be building several functions throughout this lecture. In order to do this we will be employing a test driven development approach. We won't be talking about test driven development for now, but picture it as your own private Quality Assurance technician that is testing your code as you write it. As I said before, we will not focus on test driven development here, but in order to take advantage of it we need to do some initial setup first.

## setup
1. Change directory ```(cd)``` into your ```wyncode``` folder
2. Clone the project that was shared on Slack.
3. Change directory into the newly cloned project
4. Type in your terminal ```npm i -g jest```. This command will install the jest testing library. This is what makes the testing magic happen.
5. Once that's done type ```npm run test```. You will most likely see a couple of errors, and that's totally fine considering that we have not written any code.
6. As soon as you start writing your functions you'll start seeing how some of the tests start passing.

## Instructions.
All your coding will be done in the files located inside the ```exercises``` directory
1. In sum.js declare a function named ```sum``` with two ```parameters```. This function should return the sum of both ```arguments``` when called. e.g: ```sum(2,2)``` will return ```4```.
2. In squareRoot.js declare a function named ```squareRoot``` with one ```parameter```. This function should return the square root of whatever ```argument``` you pass to it. e.g: ```squareRoot(4)``` should return ```2```. If the function receives an argument that's not a number, or no argument at all, return ```null```.
3. In isEven.js declare a function named ```isEven``` with one ```parameter```. This function will return ```true``` if the ```argument``` is even, and ```false``` if the ```argument``` is odd. e.g: ```isEven(2)``` returns ```true```. ```isEven(3)``` returns ```false```
4. In isThereFalseInArray.js declare a function named ```isThereFalseInArray``` with one ```parameter```. This function will return ```true``` if one of the elements in the ```argument``` is falsey, and it will return ```false``` if no element in the ```argument``` is falsey. e.g: ``isThereFalseInArray([1,2,3,false,5])`` will return ```true```.
5. In animalSound.js declare a function named ```animalSound``` with one parameter. The function will return an animal sound based on the ```argument``` that's passed to it.
```animalSound("moo")``` returns ```"cow"```
```animalSound("meow")``` return ```"cat"```
```animalSound("woof")``` returns ```"dog"```
```animalSound("caw caw")``` returns ```"crow"```
This function will return ```"Don't know that sound"```  for every other string.
Hint: You shouldn't use ```if else``` statements for this one.
6. In totalSum.js declare a function named ```totalSum``` with one parameter. This function should be able to handle an indefinite number of arguments for each execution. This function will return the total sum of all the arguments passed to it. If no arguments are passed. The function will return 0.
7. In person.js declare a function named ```person``` with 3 parameters. This function should return an ```object``` that has 3 properties (name, age, alive). The name property should be equals to the first argument that was passed to the function, age should be equals to the second argument, and alive should be equals to the third argument. The three parameters in your function declaration should have default values of: ```"student", 0, true``` respectively.