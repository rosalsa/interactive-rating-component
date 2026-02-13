const ratingForm = document.getElementById('rating-form');
const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');
const selectedValueSpan = document.getElementById('selected-value');

ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(ratingForm);
    const ratingValue = formData.get('rating');

    if (ratingValue) {
        selectedValueSpan.textContent = ratingValue;

        ratingState.classList.add('hidden');
        thankYouState.classList.remove('hidden');
    }
});