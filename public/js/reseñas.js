document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsContainer = document.getElementById('reviews');

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const userReviewInput = document.getElementById('userReview');

        const username = usernameInput.value;
        const userReview = userReviewInput.value;

        if (username.trim() !== '' && userReview.trim() !== '') {
            const reviewArticle = document.createElement('article');
            reviewArticle.classList.add('review');

            const userInfoDiv = document.createElement('div');
            userInfoDiv.classList.add('user-info');

            const userImage = document.createElement('img');
            userImage.src = 'https://c1.klipartz.com/pngpicture/823/765/sticker-png-login-icon-system-administrator-user-user-profile-icon-design-avatar-face-head.png';
            userImage.alt = username;

            const userName = document.createElement('h3');
            userName.textContent = username;

            userInfoDiv.appendChild(userImage);
            userInfoDiv.appendChild(userName);

            const reviewText = document.createElement('p');
            reviewText.classList.add('review-text');
            reviewText.textContent = userReview;

            reviewArticle.appendChild(userInfoDiv);
            reviewArticle.appendChild(reviewText);

            reviewsContainer.appendChild(reviewArticle);

            // Limpiar los campos del formulario después de enviar la reseña
            usernameInput.value = '';
            userReviewInput.value = '';
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});