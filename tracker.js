function calculatePoints() {
  const checkboxes = document.querySelectorAll('input[name="activity"]:checked');
  let totalPoints = 0;

  checkboxes.forEach((box) => {
    totalPoints += parseInt(box.value);
  });

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<h3>You scored <strong>${totalPoints}</strong> green points today! 🎉</h3>`;
}
