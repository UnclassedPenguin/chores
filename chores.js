// Chores javascript.
//

var myNameSpace = {};

const choreList = [
  "sweep",
  "garbage",
  "dishes",
];

myNameSpace.sweep = {
  name: "Sweep",
  description: "Sweep the WHOLE floor.",
  price: "$0.50",
};

myNameSpace.garbage = {
  name: "Garbage",
  description: "Change out at least 2 garbage cans.",
  price: "$1.00",
};

myNameSpace.dishes = {
  name: "Dishes",
  description: "Wash all the dishes in the sink.",
  price: "$2.00",
};

function getChores() {
  var item = choreList[Math.floor(Math.random()*choreList.length)];

  var thisName = myNameSpace[item].name;
  var thisDescription = myNameSpace[item].description;
  var thisPrice = myNameSpace[item].price;

  var html = "<br> <h2>" + thisName + "</h2><p>If you...</p><p style='font-size:150%;'>" + thisDescription + "</p><p>You'll earn:</p><h3>" + thisPrice + "</h3>";
  document.getElementById("main-content").innerHTML = html;
}

document.getElementById("main-button").addEventListener("click", getChores, "false");
