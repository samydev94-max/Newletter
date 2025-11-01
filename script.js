document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();

        // Validation basique de l'email
        if (!isValidEmail(email)) {
            showMessage('Veuillez entrer une adresse email valide.', 'error');
            return;
        }

        // Simulation de l'inscription (ici vous pouvez ajouter votre logique backend)
        subscribeToNewsletter(email);
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function subscribeToNewsletter(email) {
        // Afficher un message de chargement
        showMessage('Inscription en cours...', 'info');

        // Simuler un appel API (remplacez ceci par votre vraie logique)
        setTimeout(() => {
            // Succès
            showMessage('Merci ! Vous êtes maintenant inscrit à notre newsletter.', 'success');
            emailInput.value = '';

            // Ici, vous pouvez ajouter votre logique pour envoyer l'email au backend
            console.log('Email inscrit:', email);

            // Exemple d'appel API (décommentez et adaptez selon vos besoins):
            /*
            fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showMessage('Merci ! Vous êtes maintenant inscrit à notre newsletter.', 'success');
                    emailInput.value = '';
                } else {
                    showMessage('Une erreur est survenue. Veuillez réessayer.', 'error');
                }
            })
            .catch(error => {
                showMessage('Une erreur est survenue. Veuillez réessayer.', 'error');
                console.error('Error:', error);
            });
            */
        }, 1000);
    }

    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = 'message ' + type;

        // Effacer le message après 5 secondes pour les messages de succès
        if (type === 'success') {
            setTimeout(() => {
                messageDiv.textContent = '';
                messageDiv.className = 'message';
            }, 5000);
        }
    }
});
