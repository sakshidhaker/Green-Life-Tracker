document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calculator-form");
  const resultBox = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const transport = parseFloat(document.getElementById("transport").value);
    const electricity = parseFloat(document.getElementById("electricity").value);
    const meals = parseFloat(document.getElementById("meals").value);

    if (isNaN(transport) || isNaN(electricity) || isNaN(meals)) {
      resultBox.innerHTML = "❌ Please fill in all fields with valid numbers.";
      return;
    }

    // Sample CO2 calculations
    const transportCO2 = transport * 0.21 * 30;      // km/day * 0.21 kg/km * 30 days
    const electricityCO2 = electricity * 0.42;       // kWh/month * 0.42 kg
    const mealsCO2 = meals * 4 * 0.5;                // meals/week * 4 weeks * 0.5 kg/meal

    const totalCO2 = transportCO2 + electricityCO2 + mealsCO2;

    resultBox.innerHTML = `✅ Your estimated monthly carbon footprint is <strong>${totalCO2.toFixed(2)} kg CO₂</strong>`;
  });
});
