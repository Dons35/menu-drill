function getReceipt(){
  var runningTotal = 0;
  var sizeTotal = 0;
  var sizeArray = document.getElementsByClassName("size");
  var receipt = "";
  var subTotal1 = 0;

  for (var i = 0; i < sizeArray.length; i++){
    if (sizeArray[i].checked){
      var selectedSize = sizeArray[i].value;
      receipt = selectedSize + "<br />";
    }
  }
  if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
  subTotal1 = "" + sizeTotal + "<br />";
  runningTotal = sizeTotal;
  getMeat(runningTotal,receipt,subTotal1);
};

function getMeat(runningTotal,receipt,subTotal1){
  var meatArray = document.getElementsByClassName("meat");
  var selectedMeat = [];
  var meatTotal = 0;
  var subTotal2 = 0;

  for (i = 0; i < meatArray.length; i++){
    if (meatArray[i].checked){
      selectedMeat.push(meatArray[i].value);
      receipt = receipt + meatArray[i].value + "<br />";
    }
  }

  var meatNumber = selectedMeat.length;
  if (meatNumber > 1){
    meatTotal = (meatNumber - 1);
  } else {
    meatTotal = 0;
  }
  subTotal2 = "" + meatTotal + "<br />";
  runningTotal = (runningTotal + meatTotal);
  getVeggie(runningTotal,receipt,subTotal1,subTotal2);
};

function getVeggie(runningTotal,receipt,subTotal1,subTotal2){
  var veggieArray = document.getElementsByClassName("veggie");
  var selectedVeggie = [];
  var VeggieTotal = 0;
  var subTotal3 = 0;

  for (i = 0; i < veggieArray.length; i++){
    if (veggieArray[i].checked){
      selectedVeggie.push(veggieArray[i].value);
      receipt = receipt + veggieArray[i].value + "<br />";
    }
  }

  var veggieNumber = selectedVeggie.length;
  if (veggieNumber > 1){
    veggieTotal = (veggieNumber - 1);
  } else {
    veggieTotal = 0;
  }
  subTotal3 = "" + veggieTotal + "<br />";
  runningTotal = (runningTotal + veggieTotal);
  getCheese(runningTotal,receipt,subTotal1,subTotal2,subTotal3);
};

function getCheese(runningTotal,receipt,subTotal1,subTotal2,subTotal3){
  var cheeseTotal = 0;
  var cheeseArray = document.getElementsByClassName("cheese");
  var subTotal4 = 0;

  for (var i = 0; i < cheeseArray.length; i++){
    if (cheeseArray[i].checked){
      var selectedCheese = cheeseArray[i].value;
      receipt = receipt + selectedCheese + "<br />";
    }
  }
  if (selectedCheese === "Regular Cheese") {
    cheeseTotal = 0;
  } else if (selectedCheese === "No Cheese") {
    cheeseTotal = 0;
  } else if (selectedCheese === "Extra Cheese") {
    cheeseTotal = 3;
  }
  subTotal4 = "" + cheeseTotal + "<br />";
  runningTotal = (runningTotal + cheeseTotal);
  getSauce(runningTotal,receipt,subTotal1,subTotal2,subTotal3,subTotal4);
};

function getSauce(runningTotal,receipt,subTotal1,subTotal2,subTotal3,subTotal4){
  var sauceTotal = 0;
  var sauceArray = document.getElementsByClassName("sauce");
  var subTotal5 = 0;

  for (var i = 0; i < sauceArray.length; i++){
    if (sauceArray[i].checked){
      var selectedSauce = sauceArray[i].value;
      receipt = receipt + selectedSauce + "<br />";
    }
  }
  subTotal5 = "" + sauceTotal + "<br />";
  getCrust(runningTotal,receipt,subTotal1,subTotal2,subTotal3,subTotal4,subTotal5);
};

function getCrust(runningTotal,receipt,subTotal1,subTotal2,subTotal3,subTotal4,subTotal5){
  var crustTotal = 0;
  var crustArray = document.getElementsByClassName("crust");
  var subTotal6 = 0;

  for (var i = 0; i < crustArray.length; i++){
    if (crustArray[i].checked){
      var selectedCrust = crustArray[i].value;
      receipt = receipt + selectedCrust;
    }
  }
  if (selectedCrust === "Plain Crust") {
    crustTotal = 0;
  } else if (selectedCrust === "Garlic Butter Crust") {
    crustTotal = 0;
  } else if (selectedCrust === "Cheese Stuffed Crust") {
    crustTotal = 3;
  } else if (selectedCrust === "Spicy Crust") {
    crustTotal = 0;
  } else if (selectedCrust === "House Special Crust") {
    crustTotal = 0;
  }
  subTotal6 = "" + crustTotal + "<br />";
  runningTotal = (runningTotal + crustTotal);
  document.getElementById("youOrdered").innerHTML = (receipt);
  document.getElementById("subTotal").innerHTML = ("Size: $" + subTotal1 + "<br />" + "Meat (First meat complementary, each further meat + $1): $" + subTotal2 + "<br />" + "Veggie (First veggie complementary, each further veggie + $1): $" + subTotal3 + "<br />" + "Cheese: $" + subTotal4 + "<br />" + "Sauce: $" + subTotal5 + "<br />" + "Crust: $" + subTotal6);
  document.getElementById("totalPrice").innerHTML = ("$"+runningTotal);

};

function clear(){             //for some reason, this was working, then stopped working
  $("#youOrdered").empty();   //so I left it in for reference later.
  $("#subTotal").empty();
  $("#totalPrice").empty();
}

function clearJ(){
  document.getElementById("youOrdered").innerHTML = "";
  document.getElementById("subTotal").innerHTML = "";
  document.getElementById("totalPrice").innerHTML = "";
};
