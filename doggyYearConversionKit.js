/* Dog Years Conversion Kit
- The first two years of a dog’s life count as 10.5 dog years each.

- Each year following equates to 4 dog years.
*/

// Creating a variable for my age.
let myAge = 40;

// Creating a variable for the early years and setting the 2 years to it. 
let earlyYears = 2;

// Multiplying the 10.5 to our variable.
earlyYears = earlyYears * 10.5;

// Since the two years is accounted for we will subtract that from our age adn assigning that to a new variable.
let laterYears = myAge - 2;

// We will now multiply your later years by the dog years (4).
laterYears = laterYears * 4;

// Lets create the dog years by adding early and later years and saving it.
myAgeInDogYears = earlyYears + laterYears;

// adding name variable and returning it as lowercase.
let myName = 'Scotty'.toLowerCase();

// Writing output to console using string interpolation.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)