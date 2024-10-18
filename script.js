// Script to filter video cards by category
const buttons = document.querySelectorAll('button');
const videoCards = document.querySelectorAll('.video-card');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        videoCards.forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});