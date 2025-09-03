async function runDemo() {
  const input = document.querySelector('#demo textarea').value;
  const output = document.getElementById('demo-output');

  if (!input.trim()) {
    output.textContent = "Please enter a prompt.";
    return;
  }

  output.textContent = "Processing…";

  try {
    const response = await fetch('http://localhost:8000/chat', {  // <-- match backend endpoint
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })  // <-- key must be "message"
    });

    const data = await response.json();
    output.textContent = data.response || "No response from AI.";  // <-- use "response"
  } catch (err) {
    output.textContent = "Error connecting to demo backend.";
    console.error(err);
  }
}
