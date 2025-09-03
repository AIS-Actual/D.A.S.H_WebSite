async function runDemo() {
  const input = document.querySelector('#demo textarea').value;
  const output = document.getElementById('demo-output');

  if (!input.trim()) {
    output.textContent = "Please enter a prompt.";
    return;
  }

  output.textContent = "Processing…";

  try {
    const response = await fetch('http://localhost:8000/api/demo', {  // adjust URL when deployed
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input })
    });

    const data = await response.json();
    output.textContent = data.reply;
  } catch (err) {
    output.textContent = "Error connecting to demo backend.";
    console.error(err);
  }
}

