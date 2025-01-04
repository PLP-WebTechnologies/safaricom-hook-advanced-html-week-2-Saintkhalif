// Form Validation
document.getElementById('registration-form').addEventListener('submit', function(event) {
    if (!this.checkValidity()) {
        event.preventDefault();  // Prevent form submission
        alert("Please fill in all required fields correctly.");
    } else {
        alert("Registration Successful!");
    }
});

// Media Animations
document.getElementById('audio-player').addEventListener('play', () => {
    document.getElementById('audio-container').style.animation = 'pulse 1s infinite';
});

document.getElementById('audio-player').addEventListener('pause', () => {
    document.getElementById('audio-container').style.animation = '';
});

document.getElementById('video-player').addEventListener('play', () => {
    document.getElementById('video-container').style.animation = 'glow 2s infinite';
});

document.getElementById('video-player').addEventListener('pause', () => {
    document.getElementById('video-container').style.animation = '';
});
