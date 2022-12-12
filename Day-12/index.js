const dinnerFoods = ['🍝','🍔','🌮']
let menuSection = document.querySelector("#menu");
menuSection.innerHTML = dinnerFoods.map(food => `<div class="food">${food}</div>`).join("");
