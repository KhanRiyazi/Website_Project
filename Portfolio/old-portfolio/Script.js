function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle ("active");
}
// Script.js

document.addEventListener('DOMContentLoaded', () => {
    const chatLog = document.getElementById('chat-log');
    const chatInput = document.querySelector('.chat-message input');
    const chatButton = document.querySelector('.chat-message button');

    chatButton.addEventListener('click', () => {
        const userMessage = chatInput.value;
        if (userMessage.trim() !== "") {
            addMessage('user', userMessage);
            getBotResponse(userMessage);
            chatInput.value = "";
        }
    });
});

function addMessage(sender, message) {
    const chatLog = document.getElementById('chat-log');
    const messageElement = document.createElement('li');
    messageElement.innerHTML = `<span class="avatar ${sender}">${sender === 'user' ? 'User' : 'AI'}</span><div class="message">${message}</div>`;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function getBotResponse(message) {
    // Simple bot response for demonstration
    let botMessage = "I'm not sure how to respond to that.";
    if (message.toLowerCase().includes('skills')) {
        botMessage = "My best skills are HTML, CSS, and JavaScript.";
    }
    addMessage('bot', botMessage);
}
