"use strict";

// DESTRUCTING ARRAYS
// What is Destructing Arrays ?
// Destructing Arrays:
// Destructuring the array in JavaScript simply means extracting multiple values from data stored in objects and arrays. The destructing assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// NOTE: Destructing Arrays starts from square bracket [].

const menu = {
  recipe: ["Samosa", "Biryani", "Cold Drink"],
  fast_foods: ["Pizza", "Zinger", "Malai-Boti", "Tikka"],

  order: function (main, secondary) {
    return [this.fast_foods[main], this.fast_foods[secondary]];
  },
};

const [x] = menu.recipe; // Destruct only one variable
console.log(x);

const [a, b] = menu.recipe; // Destruct only two variable
console.log(a, b);

const [l, m, n] = menu.recipe; // Destruct only three variable
console.log(l, m, n);

// But now you have to only select "Samosa and Cold-Drink" then;

const [first, , third] = menu.recipe; // In simpler words you have to leave that element in order to retrieve element in an unorder list.
console.log(first, third);

// But now you waant to order first "Biryani" and then "Cold-Drink";

const [, main, secondary] = menu.recipe;
console.log(main, secondary);

// But now the C.E.O wants to shift the order of samosa into last then;

let [o, p, q] = menu.recipe; // You have to put "let" in order to execute bcz in "const" the whole array cant be changed.
[o, p, q] = [q, p, o];

console.log(o, p, q);

// Now we have to order something;

const [starter, mainCourse] = menu.order(0, 2);
console.log(starter, mainCourse);

// Now if we have array inside of an array;
const [i, , j] = [2, 4, [6, 8, 10]];
console.log(i, j);

const [t, , [r, s]] = [2, 4, [6, 8, 10]];
console.log(t, r, s);

// Default Values;

const [y, z, c] = [5, 10];
console.log(y, z, c); // As always it shows undefined which element has not present

const [e = 1, k = 1, v = 1] = [5, 10]; // Now it shows the element as 1 in console when there is no element present inside of an array as default values.
console.log(e, k, v);

// DESTRUCTING OBJECTS
// What is Destructing Objects ?
// Destructing Objects:
// Destructuring the objects in JavaScript simply means extracting multiple values from data stored in objects and arrays. The destructing assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// NOTE: Destructing Objects starts from curly bracket {}.

const restaurant = {
  name: "La Casa De Rest-eat",
  categories: ["Fast-Foods", "Desi-Foods"],
  Fast_Foods: ["Pizza", "Zinger", "Malai-Boti", "Tikka"],
  Desi_Foods: ["Biryani", "Qorma", "Fry-Mongh-Daal", "Koila-Qeema"],
  openingHours: {
    Mon_to_Fri: {
      open: 12,
      close: 22,
    },
    Sat_to_Sun: {
      open: 12,
      close: 24,
    },
  },

  order: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `${this.Fast_Foods[starterIndex]} and ${this.Desi_Foods[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

const { name, categories, Fast_Foods } = restaurant;
console.log(name, categories, Fast_Foods);

// Now you can also change name of objects property,

const { name: restaurantName, categories: Categories } = restaurant;
console.log(restaurantName, Categories);

// Default Names/Values,
// And if you have not give a name and wants to set as default,

let { Desi_Foods = [], openingHours: timing = [] } = restaurant; // Now if you comment down Desi_Foods in an object then in console of line 105(Desi_Foods) will be undefined.
console.log(Desi_Foods, timing);

// Mutating Variables:
let ab = 69;
let cd = 70;
const obj = { ab: 1, cd: 2 };
({ ab, cd } = obj); // Now here it gaves an error of unexpected token ("=") so to get rid of this problem we use paranthesis in start.
console.log(ab, cd); // Here we change the value of "ab" and "cd"

// Nested Objects:
// Now we want to retrieve the value of objects stored in an object in object, So;

const { Mon_to_Fri } = restaurant.openingHours;
console.log(Mon_to_Fri);

// But if we want the value of open and close then we could do this ↓ ;

const {
  Mon_to_Fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);

// Now we come to coolest part to make a function for order delivery:

restaurant.order({
  starterIndex: 1,
  mainIndex: 2,
  time: "12:00",
  address: "motarno street 5",
});

// SPREAD OPERATOR
// The spread operator, represented by three consecutive dots (...), is a syntax introduced in JavaScript ES6 (ECMAScript 2015) that allows an iterable (such as an array or a string) to be expanded into individual elements.

const simple_arr = [1, 2, 3, 4];

// Old way of put array into array:
const oldWayOfArr = [
  simple_arr[0],
  simple_arr[1],
  simple_arr[2],
  simple_arr[3],
  5,
  6,
  7,
];
console.log(oldWayOfArr);
// Now using spread:
const newWay = [...simple_arr, 10, 11, 12];
console.log(newWay);
// And now using without dot:
const withoutDot = [simple_arr, 69];
console.log(withoutDot);
// Now use for individual\to remove comma:
console.log(...newWay);

// But now we want to add something in restaurant obj:
const addElement = [...restaurant.Fast_Foods, "Fries"]; // Where restaurant.Fast_Foods show full array and fries will be added;
// OR //
const addElement2 = [...Fast_Foods, "Fries"]; // Results are same
console.log(addElement);

// Copying Arrays:
const original_arr = ["Hello, I am an Array"];
const copy_arr = [...original_arr]; // Made another array
console.log(copy_arr);

// Join 2 arrays:
// Example: Join Desi-foods + Fast-foods;

const newMenu = [...restaurant.Desi_Foods, ...restaurant.Fast_Foods];
console.log(newMenu);

// Spread operator not works on only arrays it also works all on iterables.
// but what is iterable ? For now only assume that iterable are arrays, strings, maps, sets, but NOT OBJECTS.
// We will see later in depth about that.

// For Strings:
const stringArr = "Muqeet";
const letters = [...stringArr, "", "In Comma"];
console.log(letters);
// Individual string:
console.log(...stringArr);
// Invalid use of spread operator
// const invalidUse = `${...stringArr} Niazi`; // Here we use an invalid way of spread operator.
// console.log(invalidUse);

// Now lets make own function of making pasta !!
const shop = {
  name: "Bucatini Pasta",
  order: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// const ingredients = [
//     prompt(`What\'s is your 1st Ingredient`),
//     prompt(`What\'s is your 2nd Ingredient`),
//     prompt(`What\'s is your 3rd Ingredient`)
// ];
// Understand the above logic (ingredients = [a, b, c]) it passes to below (obj of shop) then go to (order) and (prompt were passed to parameters).

// shop.order(ingredients[0], ingredients[1], ingredients[2]); // but we have a better way!
// shop.order(...ingredients);

// But in ES6 spread operator also works on objects (even obj are not iterables) so:
// Spread Operator in Objects:
const pastaShop = { founder: "Holand", ...shop, founded: 2002 };
console.log(pastaShop);

// We can also copy an object of spread operator;
// Copy:
const shopCopy = { ...pastaShop };
console.log(shopCopy);
// In order to change the name(or something else) of any object;
shopCopy.name = "Belicia Pasta (Copy)";
console.log(shopCopy.name);
console.log(shop.name);

// REST PATTERN
// Remember! , we used the spread operator to build new arrays or to pass multiple values into a function.
// So those are the two use cases of the spread operator and in both cases, we use the spread operator to expand an array into individual elements.
// Now, the "REST PATTERN" uses the exact same syntax (...) to collect multiple elements and condense them into an array.
// The spread operator is to unpack an array while rest is to pack elements into an array.

// Spread , because on right side of = : (assignment operator "=")
const arr = [1, 2, ...[3, 4, 5]];

// Rest , because on left side of = : (assignment operator "=")
const [firsts, seconds, ...others] = [1, 2, 3, 4, 5];
console.log(firsts, seconds, others); // Now here rest pattern (...others) condense into a pack of an array!

const [A, , C, ...otherFood] = [...Desi_Foods, ...Fast_Foods];
console.log(A, C, otherFood); // Now here rest pattern dont show the skipped elements & it directs the element of (Desi_foods -> [pick Biryani,Fry-Mongh-Dal] -> [show individual bcz of spread operator on right side] -> [and pack others element in an array bcz of rest operator on left side]

const [, , , , lm, ...otherss] = [...Desi_Foods, ...Fast_Foods];
console.log(lm, otherss); // Now if you want to pick element of Fast_Foods then you have to skip elements and it does not show skip elements on console.

// const [...other, lm] = [...Desi_Foods, ...Fast_Foods];
// console.log(other, lm);
// Here it will gave error bcz the rest operator does not use in the first or middle it only be used as last.

// Rest Pattern on Object:
// we have to retrieve only weekdays (Mon To Fri):
const { Sat_to_Sun, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Rest Patterns on Functions:
function add(...numbers) {
  console.log(numbers);

  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index]; // Or Sum = Sum + numbers[index of array]
  }
  console.log(sum);
}

add(5, 5); // ← Beginner!

// Next Level;
const reciept = [20, 10];
add(...reciept);

// Lets Understand above logic: we made a function of "add" it recieve parameters in the shape of array as always, then it
// goes to "for loop" and add numbers then console it, now where the parameters comes from? it came from the rest operator.

// Now Lets make a function of ordering a pizza:
function order(mainIngredients, ...optionalIngredients) {
  console.log(
    `${mainIngredients} flavour Pizza with ${optionalIngredients} has been delivered`
  );
  console.log(mainIngredients);
  console.log(optionalIngredients);
}

const mainIngredient = order("B.B.Q", "Onion", "Pepsi");
// Now here optionalIngredient will present in an rest pattern array.

// SHORT CIRCUITING (AND, OR)
// Advanced OR Operator:
// This is a boolean operator in which it checks the value if truthy value exist then it will print immediately and cant check the next value!
// And if there is no truthy value then it will print the last value of falsy !! Example Below:

console.log("-----OR------");

console.log(3 || "Hello");
console.log(0 || "Want");
console.log(false || "To");
console.log("Become" || "You"); // Both true then it will print the first truthy value
console.log(undefined || null); // Both False then it will print the last falsy value

// Advanced Level:
console.log(0 || false || undefined || null || "" || "Hello"); // Now if you gave space in 5th value(empty string) then it will become truthy value

restaurant.Guest = 0;
restaurant.Guest ? restaurant.Guest : console.log("No Guest");

restaurant.Guest || console.log("No Guest");

console.log("-----AND------");

// Advanced AND Operator:
// This is a boolean operator in which it checks the value if fasly value exist then it will print immediately and cant check the next value!
// And if there is no falsy value then it will print the last value of truthy !! Example Below:

console.log(3 && "Hello");
console.log(0 && "Want");
console.log(false && "To");
console.log("Become" && "You"); // Both true then it will print the last truthy value
console.log(undefined && null); // Both False then it will print the first falsy value

// Advanced Level:
console.log(
  2 && true && "NOW" && 50 && " " && "Hello" && 0 && "Never check this string"
); // Here we gave space in 5th value(empty string) so it will become truthy value

restaurant.Guest = 1;
restaurant.Guest ? console.log(restaurant.Guest) : console.log("No Guest");

console.log(restaurant.Guest) && console.log("No Guest"); // Print 1
restaurant.Guest && console.log("No Guest"); // restaurant.Guest is not console so it Print String Becz Truthy Value.

// Expert Level:

console.log(0 || undefined || ("Hello" && null));
console.log((2 && 50 && "Hello") || null);

// NULLISH COALESCING OPERATOR (Syntax: ??) [Moderate Topic]
// Might be useful in Future !! As in my opinion it is very useful operator.
// NULLISH COALESCING OPERATOR:
// It is an operator which does not represent (0 and "") a falsy value. Example Below ↓:

const myguest = undefined;
const showGuest = myguest ?? 1; // ?? it means that if it is not true then print 1.
console.log(showGuest); // It show 1;

const myguest2 = 0;
const showGuest2 = myguest2 ?? 1; // ?? it means that if it is not true then print 1.
console.log(showGuest2); // It show "0" bcz it is not falsy value according to NULLISH COALESCING OPERATOR;

const myguest3 = "";
const showGuest3 = myguest3 ?? 1; // ?? it means that if it is not true then print 1.
console.log(showGuest3); // It show "" (empty string) bcz it is not falsy value according to NULLISH COALESCING OPERATOR;

// POWER OF LOGICAL & ASSIGNMENT OPERATOR

const introRest1 = {
  name: "Gavanno",
  numGuest: 20,
};

const introRest2 = {
  name: "Lavianno",
  owner: "Mortaso",
};

// Making Default value for Objects:
// Now here we defined as default value for number of Guests (numGuest), [uncomment it ↓];
// introRest1.numGuest = introRest1.numGuest || 10;
// introRest2.numGuest = introRest2.numGuest || 10;

// Or, You can also write as;
introRest1.numGuest ||= 10;
introRest2.numGuest ||= 10;

console.log(introRest1);
console.log(introRest2); // In this object it will make "numGuest property" and gave value as Default (10) because it is falsy value and "OR" operator print only truthy value.

// Now if one object have 0 guests which is also falsy value and in "OR" operator it will not be printed;
const introRest3 = {
  name: "Gavanno",
  numGuest: 0,
};

const introRest4 = {
  name: "Lavianno",
  owner: "Mortaso",
};

introRest3.numGuest ||= 10; // As you can see in console
introRest4.numGuest ||= 10;

console.log(introRest3);
console.log(introRest4);

// So now we use nullish coalescing operator;
const introRest5 = {
  name: "Gavanno",
  numGuest: 0,
};
const introRest6 = {
  name: "Lavianno",
  owner: "Mortaso",
};
introRest5.numGuest ??= 10; // Now here it put "0" because according to nullish operator it is truthy value
introRest6.numGuest ??= 10; // and it
console.log(introRest5);
console.log(introRest6);

// Now Using "AND" Operator;

// AND => Print the false value if there is not false value then print the last value.
// If there is owner then print the value if not then Anonymous;
// introRest5.owner = introRest5.owner && "Anonymous";
// introRest6.owner = introRest6.owner && "Anonymous";
// OR //
introRest5.owner &&= "Anonymous";
introRest6.owner &&= "Anonymous";

console.log(introRest5);
console.log(introRest6);

// Coding Challenge 1:

// Data From Server;
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Answers:
// 1.
const [player1, player2] = game.players;
console.log(player1, player2);

// 2.
const [gk, ...fieldPlayer] = [...player1];
console.log(gk, fieldPlayer);

// 3.
const allplayers = game.players;
console.log(...allplayers);

// 4.
const players1Final = [...player1, "Thiago", "Coutinho", "Persic"];
console.log(...players1Final);

// 5.
const {team1, x: Draw, team2} = game.odds;
console.log(team1, Draw, team2);

// 6.
function printGoals(...numbers) {
  console.log(numbers);
  console.log(`${numbers.length} goals were scored`);
}
printGoals(...game.scored);

// 7.
const won1 = team2 < team1 && "Team 1 Won the game";
const won2 = team2 > team1 && "Team 2 Won the game";

console.log(won1);
console.log(won2);

// Challenge Completed !
//---------------------------------------------------------------------------------------------------------//

// For Of Loop (Syntax: for(----of----)) [Moderate Topic];
// For-Of-Loop : 
// The for...of loop is used to iterate through the values of an iterable.In plain English, you can read the above code as: for every element in the iterable, run the body of the loop.
// The for...of loop cannot be used to iterate over an object.

const menu2 = [...restaurant.Fast_Foods, ...restaurant.Desi_Foods]

for (const item of menu2) {
  console.log(item);
}
                                         // New Element Discovered "entries()" //
// what is entries(): It is an iterator/Operator where number of array, anything do entry on its index.

for (const item of menu2.entries()) {
  console.log(item);
}

// Now Advanced Level;
// We destruct the index of array and add (+1) on the index to start counting from 1.

for (const [i, item] of menu2.entries()) {
  console.log(i + 1, item);
}

// Enhanced Object Literals (Basic Topic);
// We will see in this topic as advanced use of JS-ES6
// If there is any object inside object then you can also write as;

// const mobileShop = {
//   name: "Samsung",
//   open: {
//     monTofri: {
//       open: 12,
//       close: 12
//     },
//     satTosun: {
//       open: "Off",
//       close: "Off"
//     }
//   }
// }

// Advanced ↓↓↓
const openShop = {
  monTofri: {
    open: 12,
    close: 12
  },
  satTosun: {
    open: "Off",
    close: "Off"
  }
}

const mobileShop = {
  name: "Samsung",
  openShop,
}
console.log(mobileShop);

// Expert Level ↓↓↓
const weekDays = ['Mon-To-Fri','Sat-To-Sun'];
const openShop2 = {
  [weekDays[0]]: {
    open: 12,
    close: 12
  },
  [weekDays[1]]: {
    open: "Off",
    close: "Off"
  }
}

const mobileShop2 = {
  name: "Samsung",
  openShop2,
}
console.log(mobileShop2.openShop2);

// OPTIONAL CHAINING (Syntax: ?.) (Moderate Topic) :
// Optional chaining (?.) The optional chaining ( ?. ) operator accesses an object's property or calls a function.
// If the object accessed or function called using this operator is undefined or null , the expression short circuits and evaluates to undefined instead of throwing an error.
// EXAMPLE:

// If we have a data from an API and we wanna check that if exist then; (Uncomment it ↓↓)
// const check = restaurant.openingHours.Mon_to_Sat.open;   // Where Mon_to_Sat doe not exist it gave an error.
// console.log(check);

// But Now with OPTIONAL CHAINING;
const check2 = restaurant.openingHours.Mon_to_Sat?.open; // Now here it cant gave an error,as it gives undefined in console because Mon_To_Sat have nothing so in this way,
console.log(check2);

// EXAMPLE # 2:
const soupShop = {
  name: "Corn-Soup",
  owner: "Shahzad Aslam",
  founded: 2008,
  menu3: ["Chicken-Corn Soup", "Batair Soup" ],
  opens: {
    mon:{
      open: 6,
      close: 12
    },
    tue: {
      open: 0,
      close: 0
    },
    wed:{
      open: 6,
      close: 12
    },
    fri:{
      open: 6,
      close: 12
    },
    sat:{
      open: 6,
      close: 2
    },
    sun:{
      open: 6,
      close: 2
    }
  },
  order: function(start, last) {
    console.log(this.menu3[start], this.menu3[last]);
  }
}

const weekdayz = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of weekdayz) {
  // console.log(day);
  const timing = soupShop.opens[day]?.open ?? "Closed";
  // Here opens[day] means check the opens key and where mon,tue... will come from "day" array where (day array) comes from weekdayz.
  
  console.log(`On ${day}, we open at ${timing}`);
}

// EXAMPLE # 3;
// Where Optional Chain also work on Methods so;

const check3 = soupShop.order?.(0, 1) ?? console.log("Method Exist");
const check4 = soupShop.wrong?.(0, 1) ?? console.log("Method does not exist");

// EXAMPLE # 4;
// Where Optional Chain also work on Arrays so;

console.log(soupShop.menu3?.[0]) ?? console.log("Method Exist");

// LOOP (FOR-OF) OVER AN OBJECTS (<- UNITERABLE):

// Here we do loop over the whole keys of an object 
for (const iterate of Object.keys(soupShop)) {
  console.log(iterate);
}

// Here we do loop over the whole values of an object 
for (const iterator of Object.values(soupShop)) {
    console.log(iterator);
}

// Now :
const open3 = {
  mon: {
    open: 7,
    close: 7
  },
  wed: {
    open: 7,
    close: 7
  },
  thur: {
    open: 7,
    close: 8
  }
}

const properties2 = Object.keys(open3)
let str = (`We open only on ${properties2.length} days: `);
for (const day of properties2) {
  str += `${day}, `
}
console.log(str);

// Coding Challenge 2:

// Answers:
// 1.
const player = game.scored
console.log(player);

for (const [i,iterator] of player.entries()) {
  console.log(`Goal ${i + 1}: ${iterator}`); 
}

// 2.
let odd = Object.values(game.odds)
console.log(odd);

let average = 0;
for (let iterator of odd) {
  average += iterator;
}
average /= odd.length;
console.log(average);

// 3.
for (const [team, value] of Object.entries(game.odds)) {
  // console.log(team, value);
  const str = team === "x" ? "Draw" : `victory ${game[team]}`;
  console.log(`Odd of ${str}: ${value}`);
}

// BONUS:
const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
};

// SETS (Syntax: "new Set") (Moderate Topic) :
// A set is basically just a collection of unique values. So that means that a set can never have any duplicates. And a set is also an iterables !
// And the most common iterable here is an array.

// lets make duplicate strings;
const orderSet = new Set(["Abernethy", "Afghan biscuits", "Alfajor", "Biscuit", "Biscuit", "Abernethy", "Afghan biscuits"]);
console.log(orderSet);  // It will not count duplicate items because sets are unique.

// Adding elements to the set
orderSet.add(`${4} Cookies`);
console.log(orderSet);


// Deleting elements from the set
orderSet.delete("Abernethy");
console.log(orderSet);

// Clearing all elements from the set
// orderSet.clear();

// New Property Discovered "has"; Has: it checks the value wheather is avialable or not.
// Now we check if element is available or not;

console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Alfajor"));

// Now if you want to retrieve element from an array:
console.log(orderSet[0]);
// So Remember, that you cannot retrieve any element that inside of an array, and array is include in a set. It can be done but it is a little complex so we will learn later.

// Looping on set;
for (const iterator of orderSet) {
  console.log(iterator);
}

// Getting the Size of a Set:
console.log(orderSet.size); // 4

// Now Going Through Advanced Level:
const staff = ["Waiter", "Waiter", "Manager", "H.R Manager"];
let staffUnique = new Set(staff);
console.log(staffUnique);
// We want to change the set into array and it is pretty easy!
staffUnique = [...new Set(staff)];
console.log(staffUnique);

// Where Set is also works on string;
let string = new Set('AbdulMuqeet').size; // It will count only unique letters.
console.log(string);
 
// Conclusion: In my opinion Array are the best elements in javascript rather than sets so in my advice, use only sets in uniqueness.


// MAP (Syntax: new Map) (Important Topic) :
// A map is a data structure that we can use to map values to keys. So, just like an object data is stored in key value pairs in maps.
// Now, the big difference between objects and maps is that in maps, the keys can have any type and this can be huge.
// So, in objects, the keys are basically always strings. But in maps, we can have any type of key. It could even be objects, or arrays, or other maps.

// New method Found "set" which is totally same as 'add' method, it is basically used for adding element. but you cant put add method in maps.
const rest = new Map()
rest.set("Name", "Coalpizzato");
// rest.add(open, 9); // Gave error;
rest.set("open", 9);
rest.set("close", 3);
// Also put Boolean Values;
rest.set(true, "We are Open :)"); 
rest.set(false, "We are Close :(");
// Also put arrays;
rest.set("menu", ["Pizza", "Zinger", "Malai-Boti", "Tikka"]);
// In Sets you cant retrieve elements(BUT only "has" can check element) but in maps it can be done!
console.log(rest.get("Name"));
console.log(rest);
// Also know the size of maps;
console.log(rest.size);
// has method:
console.log(rest.has("Name"));
// You can also delete a property:
console.log(rest.delete("menu"));
// You can also clear a map:
// console.log(rest.clear);
// You can also call an array But:
rest.set(["open","close"], "Hello") // if you call an array it will gave you undefined.
console.log(rest.get(["open","close"]));
rest.set("greet", "Hello"); // It will gave you the "value" property.
console.log(rest.get("greet"));
// It can also apply on DOM Methods:
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);

// Example 1:
const time = 3;
console.log(rest.get(rest.get("open") <= time || rest.get("close") >= time));

// MAPS ITERATION (SAME AS ABOVE TOPIC BUT WE GO THROUGH DEEPLY);
// Here we input values in MAP, where above value is placed on the basis of adding/set property. 
// QUIZ EXAMPLE:  (While Checking this code then uncomment the prompt! and comment the 238 line)
const question = new Map([
  ["question", "Which is the best programming languages on earth ?"],
  [1, "C Language"],
  [2, "Java Language"],
  [3, "Javascript Language"],
  ['Correct', 3],
  [true, "Correct 🎉"],
  [false, "Incorrect, Try Again!"],
]);
console.log(question);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const ask = Number(prompt("What is the Answer ?"));
const ask = 3;
console.log(question.get(question.get('Correct') === ask));

// Convert Object into Map;
const laptop = {
  name: "Lenovo",
  generation: "5th",
  core: "i7"
}
const obj2 = Object.entries(laptop);
console.log(new Map(obj2));
// We put entries because MAP has entries so thats why we use "Object.entries".

// Convert MAP into Array;
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

// So Now,
// When we use Data Structures (Arrays, Sets, Objects, Maps). In my opinion dont forget to watch video of lesson 19 of Data Structures and Modern Operators.
// In Conclusion: 
// Arrays: Use only when you need simple, unordered list, contain duplicate items. Where it has more manipualtion of Data.
// Sets: Use only when you need to work with unique values, need high performance (i.e Search bar etc), remove duplicate items.
// Objects: Use only when you need to include functions(methods), or working with JSON. (JSON ↓↓)
// Maps: Use when you need to map key to values, used keys that are not strings (like Boolean key).

// In my opinion :- use Arrays and Maps Because "Arrays" have more manipulation with data rather than sets. but it is not faster than sets.
//               :- use Maps Because "Maps" have batter performance, store any type of data as in keys, and much more.

// So what is JSON? Answer: Its pictures and examples were attached!

// Coding Challenge 3:
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
  ]);

// Answers:
// 1.
const events = new Set(gameEvents.values());
console.log(events);

// 2.
const remove = gameEvents.delete(64);
console.log(remove);
console.log(gameEvents);

// 3.
console.log(`An event happened, on 
average, every ${90/gameEvents.size} minutes`);

// 4.
for (const [key, value] of gameEvents) {
  const Half = (key < 45) ? "FIRST" : "SECOND"
  console.log(`[${Half} HALF]${key}: ${value}`);
}

// WORKING WITH STRINGS (Important Topic) :
const airline = 'TAP Air Portugal';
const planeSeat = 'A01';

console.log(airline[0]);
console.log(airline[7]);  // Retrieve Space!
console.log(airline[2]);

console.log(planeSeat.indexOf('0'));  // Retrieve 0 as index of "1"!
console.log(airline.indexOf('r'));  // Retrieve r of "Air" String!
console.log(airline.lastIndexOf('r'));  // Retrieve r of "Portugal" String!

// New method "SLICE"; 
// In JavaScript, the slice() method is a built-in method that is used to extract a portion of an array and returns a new array containing the selected elements. It does not modify the original array but instead creates a shallow copy.
// It is also used on a string!
console.log(airline.slice(0, 5)); // Here it start from index 0 and ends on index 4. Remember it does not count last index!
console.log(airline.slice(4));  // Here starts from index 4 and goes till the end.
console.log(airline.slice(0, -1));  // Here it starts from start and ended on second last index as we mention as -1, from last its index starts from -1 not 0.
// Answer of above "TAP Air Portuga"
console.log(airline.slice(7));  // Here it starts from space;
console.log(airline.slice(0, airline.indexOf(' ')));  // Here it starts from index 0 and goes till the first space but it doesnot count the space.
console.log(airline.slice(0, airline.lastIndexOf(' ')));  // Here it starts from index 0 and goes till the last space but it doesnot count the space.
console.log(airline.slice(-4)); // Here starts from -4(u) of portugal
console.log(airline.slice(-4, 6));  // Here it will nothing show because slice does not goes back!
console.log(airline.slice(-16));  // Here starts from -1 and goes to -16
console.log(airline.slice(-19));  // Where there is nothing after -16, but it will show only your string that goes to string.
console.log(airline.slice(15));   // Here it will not show full element as from 0 to 15 like as neg but it will show as last letter of index 15.
console.log(airline.slice(6, -4)); // Where it starts from index 6 and ends on index -3 where -4 will be not count.
// Answer of above "r Port"
console.log(airline.slice()); // Where nothing means it will show full string

// Now lets make a functions where passenger wants to know wheather there seats are middle or window seat;
const checkSeat = function (seat) {
  const s = seat.slice(2);
  if (s === "B" || s === "C") {
    console.log(`You have got the middle seat 😬`);
  }else {console.log('You are lucky to get a window seat 😀');
  }
};
checkSeat("02B"); // Middle seat
checkSeat("02A");   // Window seat
checkSeat("02C"); // Middle seat
checkSeat("02E");   // Window seat

// Somewhat confusingly, JavaScript has both string objects and string primitives. (It also has number objects and number primitives.)
// Proof ↓↓
console.log(typeof ('Muqeet'));
console.log(typeof new String('Muqeet')); // Javascript is so smart it acn refer string as object or primitive value according to their usage.

// WORKING WITH STRINGS PART 2 (Important Topic) :
// UPPERCASE: Allow all alphabets into capital letters
const myName = 'Muqeet';
console.log(myName.toUpperCase());

// LOWERCASE: Allow all alphabets into lower letters
console.log(myName.toLowerCase());

// Now if you want to capitalize the first letter!
console.log(myName[0].toUpperCase() + myName.slice(1));

// Advanced ↓↓:
const weirdName = "jaCqueLiNe";
console.log(weirdName[0].toUpperCase() + weirdName.slice(1).toLowerCase());

// TRIM: In JavaScript, the trim() method is a built-in method that is used to remove whitespace (spaces, tabs, and newlines) from both ends of a string. It does not modify the original string but instead returns a new string with the leading and trailing whitespace removed.
const email = "    hEllo.Niazi@io    \n ";  // Where \n represent new line
const emailTrim = email.slice(1).toLowerCase().trim();
console.log(emailTrim);

// Replace Strings:
const price = "28,99$"
console.log(price.replace(',' , '.'));

const announcement = 'I repeat we want packup! I repeat we want packup!';
console.log(announcement.replace('packup', 'backup'));  // It will chenge first element not the second!

const announcement2 = 'I repeat we want packup! I repeat we want packup!';
console.log(announcement.replaceAll('packup', 'backup'));  // It will chenge first as well as second element!

//Or It can also be done by regular expression(this expresion is a little bit confusing we will elaborate later!);

const announcement3 = 'I repeat we want packup! I repeat we want packup!';
console.log(announcement.replace( /packup/g , 'backup'));  // It will chenge first as well as second element!

// Boolean Values:
// There are three types of boolean in strings: includes, startswith, endswith.
const plane = 'A3169-B'
console.log(plane.includes('A316'));  // Here it takes the value as true,
console.log(plane.includes('B720'));  // Here it takes the value as false
console.log(plane.startsWith('A3'));  // Here it takes the value as true,
console.log(plane.startsWith('B20')); // Here it takes the value as false,
console.log(plane.endsWith('-B'));  // Here it takes the value as true,

// Practice Exercise:
function boarding(items) {
  const item = items.toLowerCase();
  if(item.includes('knife') || item.includes('gun')){
    console.log('You are not allowed to the plane');   
  }else {
    console.log('Welcome to the plane');
  }
}
const board = boarding('I have a KniFe and a luggage of bag');
const board2 = boarding('I have a ticket and a luggage of bag');
const board3 = boarding('I have a ticket and a briefcase of GUn');


// WORKING WITH STRINGS PART 3 (Important Topic) :
// Split Method: The split() method takes a string and returns an array of strings, splitting the original string based upon a provided separator character.
console.log('You are an+expert man'.split('+'));
console.log('Aim+machine'.split('+'));

const [firstName, lastName] = 'Abdul Muqeet'.split(' ');
console.log(firstName, lastName);

// Join Method: In JavaScript, the join() method is a built-in method of the Array object. It is used to join all elements of an array into a single string. This method does not modify the original array; instead, it returns a new string.
const newName = ['Mr.', firstName, lastName].join(' '); // Here join method removes "," and use "space" instaed of comma
console.log(newName);

function capitalizeName(name) {
  const newName = name.split(' ');
  const empty = []
  for (const n of newName) {
    empty.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
  }
  console.log(empty.join(' '));
}
capitalizeName('hakimi sultan');
capitalizeName('PaBLo PiCaSSo');

// PadStart & PadEnd: It can add characters or strings in the start and last!
const message = 'Repeat'; 
const new2 = message.padStart(10, '↺'); // if you insert 5 number of prameters then it can deploy on string but cant be seen
console.log(new2);  // where 6 is string letters and 4 will repeat letters

// Important Practice (CREDIT CARD)
function creditMasking(number) {
  // First we convert number into string bcz numbers are not used in slice instead of only strings
  const str = String(number);
  const last = str.slice(-4);
  console.log(last.padStart(str.length, '*'));
}
creditMasking(14236598765431);

// Repeat: It repeat the strings;
const message2 = ` The Planes were delayed due to weather!`;
console.log(message2.repeat(5));

// Coding Challenge 4:
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value
  console.log(text);
  const row = text.split('\n');
  console.log(row);
  for (const [i,text2] of row.entries()) {
    // console.log(text2);
    const [first, second] = text2.toLowerCase().trim().split('_');
    const names = `${first}${second[0].toUpperCase() + second.slice(1).toLowerCase()}`;
    // console.log(names);
    console.log(`${names.padEnd(20)}${"🤍".repeat(i + 1)}`);
  }
});

// API EXERCISE:
const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25 +_Arrival;bru0943384722;fao93766109;11:45 +_Delayed_Arrival;hel7439299980;fao73956880;12:05 +_Departure;fao45678219;lis2322562189;12:30';

for (const flight of flights.split('+')) {
  // const blanks = breaks.replaceAll('_',' ');
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? ('❗') : (' ')}${type.replaceAll('_',' ')} ${from.slice(0,3).toUpperCase()} ${to.slice(0,3).toUpperCase()} ${time.replaceAll(':',"h")}`.padStart(40)
  console.log(output);
}

//----------------------------------------HERE WE COMPLETE THIS TOPIC--------------------------------------------------------------------------------------------------------------------------------------------------