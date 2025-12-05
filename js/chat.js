// Live Chat Widget
document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatClose = document.getElementById('chatClose');

    // Default automated messages
    const defaultMessages = [
        "Hello! 👋 How can we help you today?",
        "Are you interested in our services?",
        "We'll reply in under 2 minutes.",
        "Would you like a free consultation?"
    ];

    let messageIndex = 0;

    // Toggle chat window
    chatButton.addEventListener('click', function() {
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active') && chatMessages.children.length === 0) {
            // Show first automated message
            addMessage(defaultMessages[0], 'bot');
        }
    });

    // Close chat
    if (chatClose) {
        chatClose.addEventListener('click', function() {
            chatWindow.classList.remove('active');
        });
    }

    // Send message
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            chatInput.value = '';
            
            // Auto-reply after 1 second
            setTimeout(function() {
                if (messageIndex < defaultMessages.length - 1) {
                    messageIndex++;
                    addMessage(defaultMessages[messageIndex], 'bot');
                } else {
                    addMessage("Thank you for your interest! We'll get back to you soon.", 'bot');
                }
            }, 1000);
        }
    }

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${type}`;
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

