async function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chatMessages");
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
  ///////////// Replace Key ////////////////////////
  const accessToken =
    ""; // Replace this
  ///////////// Replace Key ////////////////////////
  const projectId = "trendpulse-cuhg";

  try {
    const response = await fetch(
      `https://dialogflow.googleapis.com/v2/projects/${projectId}/agent/sessions/123456789:detectIntent`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          queryInput: {
            text: {
              text: message,
              languageCode: "en-US",
            },
          },
        }),
      }
    );

    const data = await response.json();
    const reply =
      data.queryResult?.fulfillmentText || "🤖 Sorry, no response from bot.";
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.textContent = reply;
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  } catch (err) {
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.textContent = "❌ Error: " + err.message;
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
