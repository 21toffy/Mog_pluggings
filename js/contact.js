// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // Create mailto link (since we can't actually send emails from frontend)
            const subject = encodeURIComponent('New Contact Form Submission');
            const body = encodeURIComponent(
                `Name: ${formData.name}\n` +
                `Phone: ${formData.phone}\n` +
                `Email: ${formData.email}\n\n` +
                `Message:\n${formData.message}`
            );
            
            // Open email client
            window.location.href = `mailto:hello@mogpluggins.com?subject=${subject}&body=${body}`;
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.style.cssText = 'background: #10B981; color: white; padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center;';
            successMsg.textContent = 'Thank you! Your email client will open. If it doesn\'t, please email us at hello@mogpluggins.com';
            contactForm.appendChild(successMsg);
            
            // Reset form
            contactForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(function() {
                successMsg.remove();
            }, 5000);
        });
    }
});

