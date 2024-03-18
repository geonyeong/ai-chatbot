function sendMessage() {
  var messageInput = document.getElementById("message-input");
  var message = messageInput.value.trim();
  if (message !== "") {
    var chatBox = document.getElementById("chat-box");
    var newMessage = document.createElement("div");
    newMessage.innerText = message;
    newMessage.classList.add("message", "user-message");
    chatBox.appendChild(newMessage);
    messageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

function receiveMessage(message) {
  var chatBox = document.getElementById("chat-box");
  var newMessage = document.createElement("div");
  newMessage.innerText = message;
  newMessage.classList.add("message", "other-message");
  chatBox.appendChild(newMessage);
  chatBox.scrollTop = chatBox.scrollHeight;
}