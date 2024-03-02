VANTA.BIRDS({
    el: "#background",
    mouseControls: true,   
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0xbbf0,
    color1: 0x2e6b72,
    birdSize: 2.00,
    speedLimit: 7.00,
    separation: 49.00 
  })
  function toggleOptionsPopup() {
    var popup = document.getElementById("options-popup");
    popup.classList.toggle("hidden");
  }
  
  function sendMessage() {
    var userInput = document.getElementById("user-input").value;
  
    // **Replace with your Gemini API call and response handling**
  
    // Example placeholder (replace with your actual API endpoint and logic)
    var assistantMessage = "This functionality is not yet implemented.";
  
    var chatContainer = document.querySelector(".chat-container");
    var userMessage = document.createElement("div");
    var assistantMessageElement = document.createElement("div");
  
    userMessage.className = "user-message";
    assistantMessageElement.className = "assistant-message";
  
    userMessage.textContent = userInput;
    assistantMessageElement.textContent = assistantMessage;
  
    chatContainer.appendChild(userMessage);
    chatContainer.appendChild(assistantMessageElement);
  
    chatContainer.scrollTop = chatContainer.scrollHeight;
    document.getElementById("user-input").value = "";
  }
