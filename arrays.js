var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var number = [1];
  number.unshift("foo");
}

function destructivelyAddElementToBeginningOfArray(){
  var array = [1];
  array = ["foo", ...array];
}

function addElementToEndOfArray(array, element){
  var arrayThree = ["Cass", "Bri", "Yen"];
  [...arrayThree, "Aayla"];
}

function destructivelyAddElementToEndOfArray(array, element){
  var arrayFour = ["Cass", "Bri", "Yen"];
  arrayFour = [...arrayFour, "Grover"];
}