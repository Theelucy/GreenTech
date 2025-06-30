document
  .getElementById("community-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const questionText = document.getElementById("question").value;
    const imageFile = document.getElementById("image-upload").files[0];

    if (questionText.trim() === "") {
      alert("Please enter a question before submitting.");
      return;
    }

    let reader = new FileReader();
    reader.onload = function (e) {
      const newPost = document.createElement("div");
      newPost.classList.add("post");

      if (imageFile) {
        const imgElement = document.createElement("img");
        imgElement.src = e.target.result;
        imgElement.alt = "User uploaded image";
        imgElement.classList.add("post-image");
        newPost.appendChild(imgElement);
      }

      const postContent = document.createElement("div");
      postContent.classList.add("post-content");
      postContent.innerHTML = `<h4>User</h4><p>${questionText}</p>`;

      const postActions = document.createElement("div");
      postActions.classList.add("post-actions");
      postActions.innerHTML = `
            <button class="like"><i class="fa fa-thumbs-up"></i> Like</button>
            <button class="dislike"><i class="fa fa-thumbs-down"></i> Dislike</button>
            <button class="share"><i class="fa fa-share-alt"></i> Share</button>
        `;

      newPost.appendChild(postContent);
      newPost.appendChild(postActions);

      document.querySelector(".community-posts").appendChild(newPost);

      document.getElementById("question").value = "";
      document.getElementById("image-upload").value = "";
    };

    if (imageFile) {
      reader.readAsDataURL(imageFile);
    } else {
      reader.onload();
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const chatbotToggle = document.getElementById("chatbot-toggle");
  const chatbotWindow = document.getElementById("chatbot-window");
  const closeChatbot = document.getElementById("close-chatbot");
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatMessages = document.getElementById("chat-messages");

  chatbotToggle.addEventListener("click", () => {
    chatbotWindow.style.display = "flex";
  });

  closeChatbot.addEventListener("click", () => {
    chatbotWindow.style.display = "none";
  });

  sendBtn.addEventListener("click", sendMessage);
  userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    const userMsg = document.createElement("p");
    userMsg.classList.add("user-message");
    userMsg.textContent = message;
    chatMessages.appendChild(userMsg);

    userInput.value = "";

    setTimeout(() => {
      const botMsg = document.createElement("p");
      botMsg.classList.add("bot-message");
      botMsg.textContent = getBotResponse(message);
      chatMessages.appendChild(botMsg);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 600);
  }

  function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes("soil"))
      return "You can improve soil health by adding compost and checking pH levels!";
    if (input.includes("apple"))
      return "It might be a fungal infection. Try pruning and treating with organic fungicide.";
    return "That's a great question! We'll get back to you soon, or check the posts above for similar answers.";
  }
});
