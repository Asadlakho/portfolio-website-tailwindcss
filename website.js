
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = mobileMenuButton.querySelector('svg:first-child');
    const closeIcon = mobileMenuButton.querySelector('svg:last-child');

    mobileMenuButton.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('block');
        if (isOpen) {
            mobileMenu.classList.remove('block');
            mobileMenu.classList.add('hidden');
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        } else {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('block');
            openIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        }
    });