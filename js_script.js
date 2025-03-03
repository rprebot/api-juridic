document.getElementById('submitButton').addEventListener('click', function(event) {
  event.preventDefault();
  const inputText = document.getElementById('inputText').value;
  const apiUrl = 'http://13.50.251.37:5001/search'; // Remplace par ton URL

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: inputText })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('resultText').innerText = data.result; // Adapte selon ta réponse
  })
  .catch(error => {
    console.error('Erreur:', error);
    document.getElementById('resultText').innerText = 'Une erreur est survenue.';
  });
});
