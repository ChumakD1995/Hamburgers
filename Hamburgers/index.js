class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    let price = this.size.price + this.stuffing.price;
    this.toppings.forEach ((topping) => {
      price += topping.price;
    })
    return price;
  }

  calculateCalories() {
    let calories = this.size.calories + this.stuffing.calories;
    this.toppings.forEach ((topping) => {
      calories += topping.calories; 
    })
    return calories;
  } 
}

const Size_Small = {
  name: "Small",
  price: 50,
  calories: 20,
} 

const Size_Large = {
  name: "Large",
  price: 100,
  calories: 40,
}

const Stuffing_Cheese = {
  name: "Cheese",
  price: 10,
  calories: 20,
}

const Stuffing_Salad = {
  name: "Salad",
  price: 20,
  calories: 5,
}

const Stuffing_Potato = {
  name: "Potato",
  price: 15,
  calories: 10,
}

const Topping_Spice = {
  name: "Spice",
  price: 15,
  calories: 0,
}

const Topping_Mayo = {
  name: "Mayo",
  price: 20,
  calories: 5,
}

const hamburger = new Hamburger(Size_Small, Stuffing_Cheese);
hamburger.addTopping(Topping_Spice);
hamburger.addTopping(Topping_Mayo);

console.log(`Вартість гамбургера: ${hamburger.calculatePrice()} тугриків`);
console.log(`Калорійність гамбургера: ${hamburger.calculateCalories()} калорій`);

