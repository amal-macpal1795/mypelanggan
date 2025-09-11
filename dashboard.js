document.getElementById("foodForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const meal = document.getElementById("meal").value;
  const search = document.getElementById("search").value;
  const foodName = document.getElementById("foodName").value;
  const amount = document.getElementById("amount").value;
  const portion = document.getElementById("portion").value;

  alert(
    `Added to Journal:\nMeal: ${meal}\nSearch: ${search}\nFood: ${foodName}\nAmount: ${amount} (${portion})`
  );

  console.log({
    meal,
    search,
    foodName,
    amount,
    portion
  });
});
