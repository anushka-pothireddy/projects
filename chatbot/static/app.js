document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.getElementById('chat-container');
    
    // Example function to append a message to the chat container
    function appendMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatContainer.appendChild(messageElement);
    }

    // Example interaction
    appendMessage('Hello! How can I help you today?');
});
