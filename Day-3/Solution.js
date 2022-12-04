const faveFoods = {
    breakfast: 'boiled eggs',
    lunch: 'curry and rotis',
    supper: 'pizza'
}

const {breakfast: breakfast, lunch: lunch, supper: supper} = faveFoods;

const mealSection = document.getElementById("meals");

mealSection.innerHTML = `For breakfast, I only like ${breakfast}. For lunch, I love ${lunch}, and for supper I usually want ${supper}.`
