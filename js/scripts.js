// var animals = [
// { name: 'Fluffykins', species: 'rabbit' },
// { name: 'Caro', species: 'dog' },
// { name: 'Hamilton', species: 'dog' },
// { name: 'Harold', species: 'fish' },
// { name: 'Ursula', species: 'cat' },
// { name: 'Jimmy', species: 'fish' },
// ]
//
// //SUPER SUPERIOR ARROW FUNCTION
//
// var names = animals.map((x) => x.name + ' is a ' + x.species)
//
// //SUPERIOR ARROW FUNCTION
//
// // var names = animals.map((animal) => animal.name + ' is a ' + animal.species)
//
// //
// // var dogs = animals.filter(function(animal) {
// //   return animal.species === 'dog';
// // })
// // //JUST MAP
// //
// //
// // var names = animals.map(function(animal) {
// //   return animal.name + ' is a ' + animal.species
// // })
//
// //STUPID FOR LOOP
// // var names = [];
// // for (var i = 0; i < animals.length; i++) {
// //   names.push(animals[i].name)
// // }
//
// console.log(names);
// // // console.log(dogs);
// // //filter will pass each item in array into callback function, returning eithe rtrue or false.



/////////////////////////////////////////////////////////////////////


var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
]

//ARROW

var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

//REDUCE 

// var totalAmount = orders.reduce(function(sum, order) {
//   console.log("hello", sum, order);
//   return sum + order.amount
// }, 0) //STARTING POINT

console.log(totalAmount);


//REDUCE TAKES A CALLBACK FUNCTION
