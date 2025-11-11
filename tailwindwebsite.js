  // Toggle the mobile menu when the hamburger is clicked
        const hamburgerButton = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');

        hamburgerButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });