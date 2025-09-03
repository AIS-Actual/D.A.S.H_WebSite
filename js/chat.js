// D.A.S.H Chat Frontend

async function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  const chatlog = document.getElementById("chatlog");

  // Display user message
  const userMsg = document.createElement("div");
  userMsg.classList.add("msg", "user");
  userMsg.innerHTML = `<b>You:</b> ${message}`;
  chatlog.appendChild(userMsg);

  input.value = "";

  try {
    const response = await fetch("http://127.0.0.1:8000/chat", { // <-- match backend endpoint
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }) // <-- key must be "message"
    });

    const data = await response.json();

    const botMsg = document.createElement("div");
    botMsg.classList.add("msg", "bot");
    botMsg.innerHTML = `<b>D.A.S.H:</b> ${data.response || "No response from AI."}`; // <-- use "response"
    chatlog.appendChild(botMsg);
  } catch (err) {
    const errorMsg = document.createElement("div");
    errorMsg.classList.add("msg", "error");
    errorMsg.innerHTML = `<b>Error:</b> Backend not reachable`;
    chatlog.appendChild(errorMsg);
  }

  // Auto-scroll to the bottom
  chatlog.scrollTop = chatlog.scrollHeight;
}

// Allow pressing Enter to send message
document.getElementById("userInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
    e.preventDefault();
  }
});
