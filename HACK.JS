document.getElementById('prediction-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    const age = parseFloat(document.getElementById('yeasr-age').value);
    const yearsMarried = parseFloat(document.getElementById('years-married').value);
    const children = parseFloat(document.getElementById('children').value || 0);
    const educationLevel = document.getElementById('education-level').value;

    // Simulate prediction logic based on simple criteria
    let divorceChance = 0;

    // Increase divorce chance with years married and children (hypothetical logic)
    if (yearsMarried > 10) {
        divorceChance += 20;
    }
    if (children > 2) {
        divorceChance += 15;
    }
    if (yearsAge > 40) {
        divorceChance += 10;
    }

    // Education level impact (hypothetical)
    if (educationLevel === 'phd') {
        divorceChance -= 10;
    } else if (educationLevel === 'high-school') {
        divorceChance += 10;
    }

    // Limit divorce chance between 0 and 100
    divorceChance = Math.max(0, Math.min(100, divorceChance));

    // Display result
    document.getElementById('prediction-result').innerHTML = `Predicted chance of divorce: ${divorceChance}%`;
});
    const model = await tf.loadLayersModel('model-path/model.json');
    const prediction = model.predict(tf.tensor2d([[age, yearsMarried, children, educationLevel]]

));
    fetch('https://your-backend-api/predict', {
    method: 'POST',
    body: JSON.stringify({ age, yearsMarried, children, educationLevel }),
    headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json())
.then(data => {
    document.getElementById('prediction-result').innerHTML = `Predicted chance of divorce: ${data.prediction}%`;
});


