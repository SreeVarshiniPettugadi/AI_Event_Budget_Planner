// script.js
document.getElementById("budgetForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const type = document.getElementById("eventType").value;
  const guests = parseInt(document.getElementById("guests").value);
  const location = document.getElementById("location").value;
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  let baseCostPerGuest = {
    wedding: 1500,
    birthday: 700,
    corporate: 1000,
  }[type] || 1000;

  if (location === "semi-urban") baseCostPerGuest *= 0.8;
  if (location === "rural") baseCostPerGuest *= 0.6;

  let addonsCost = 0;
  checkboxes.forEach(cb => {
    if (cb.value === "entertainment") addonsCost += 5000;
    if (cb.value === "decor") addonsCost += 4000;
    if (cb.value === "photography") addonsCost += 6000;
  });

  const totalCost = guests * baseCostPerGuest + addonsCost;

  document.getElementById("result").innerHTML = `
    <h3>Estimated Budget: ₹${totalCost.toLocaleString()}</h3>
    <p>Based on your inputs, we recommend budgeting ₹${Math.round(totalCost / guests)} per guest.</p>
  `;
});
