document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const confettiBtn = document.getElementById('confetti-btn');
    const balloonsContainer = document.querySelector('.balloons');

    // Create balloons
    for (let i = 0; i < 3; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = getRandomColor();
        balloonsContainer.appendChild(balloon);
    }

    // Flip card on click
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    // Confetti effect
    confettiBtn.addEventListener('click', () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });

    // Helper function to generate random colors
    function getRandomColor() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeead'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
}); 