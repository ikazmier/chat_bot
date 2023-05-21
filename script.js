document.addEventListener("DOMContentLoaded", function() {

  var chatLog = document.getElementById("chat-log");
  var userInput = document.getElementById("user-input");
  var sendBtn = document.getElementById("send-btn");
  var botResponses = ["To świetnieee!", "Mam nadzieję, że idzie ci to dobrze :)", "Jeśli nie wiesz czegoś o JSie to pytaj - kto pyta   nie błądzi!"];
  
  function showMessage(sender, message) {
  chatLog.innerHTML += "<div><strong>" + sender + ":</strong> " + message + "</div>";
  }
  
  function handleUserInput() {
  var userMessage = userInput.value;
  showMessage("Ty", userMessage);
  userInput.value = "";
  showMessage("Bot", getBotResponse(userMessage));
  }
  
  function getBotResponse(userMessage) {
  return botResponses[Math.floor(Math.random() * botResponses.length)];
  }
  
  sendBtn.addEventListener("click", handleUserInput);
  
  userInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
  handleUserInput();
  }
  });
  
  showMessage("Bot", "Cześć, jak tam zajęcia z JS?");
  
  });
  