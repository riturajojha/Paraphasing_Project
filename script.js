const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const paraphraseButton = document.getElementById('paraphrase-button');

paraphraseButton.addEventListener('click', () => {
  // Get input text and perform paraphrasing logic
  const input = inputText.value;
  paraphrase(input)
    .then(output => {
      // Set output text
      outputText.value = output;
    })
    .catch(error => {
      console.error(error);
      outputText.value = 'Oops, something went wrong. Please try again later.';
    });
});

async function paraphrase(text) {
  const API_KEY = 'YOUR_API_KEY'; // Replace with your API key
  const API_URL = `https://api.somewebsite.com/paraphrase?key=${API_KEY}`;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    if (!response.ok) {
      throw new Error(`Paraphrasing failed: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error(error);
    throw new Error('Paraphrasing failed. Please try again later.');
  }
}
