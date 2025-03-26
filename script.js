document.getElementById('bookingForm').addEventListener('submit', function(e) {
    // Get form data
    const formData = new FormData(this);
    const formProps = Object.fromEntries(formData);
    
    // Simple validation
    if (!formProps.name || !formProps.email || !formProps.date || !formProps.time) {
        e.preventDefault();
        showConfirmation('Please fill in all required fields', 'error');
        return;
    }
    
    // Show loading state
    showConfirmation('Processing your booking...', 'loading');
});

function showConfirmation(message, type) {
    const confirmation = document.getElementById('confirmation');
    confirmation.textContent = message;
    confirmation.className = 'confirmation-message ' + type;
    
    // Clear message after 5 seconds
    if (type !== 'loading') {
        setTimeout(() => {
            confirmation.textContent = '';
            confirmation.className = 'confirmation-message';
        }, 5000);
    }
}