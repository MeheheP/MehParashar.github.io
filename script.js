// Add any custom JavaScript or jQuery for transitions/effects
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Expand All and Collapse All functionality
    document.querySelector('[data-action="expand"]').addEventListener('click', function() {
        document.querySelectorAll('.timeline__item').forEach(function(item) {
            item.setAttribute('aria-expanded', 'true');
            document.getElementById(item.querySelector('.timeline__arrow').getAttribute('aria-controls')).setAttribute('aria-hidden', 'false');
        });
    });

    document.querySelector('[data-action="collapse"]').addEventListener('click', function() {
        document.querySelectorAll('.timeline__item').forEach(function(item) {
            item.setAttribute('aria-expanded', 'false');
            document.getElementById(item.querySelector('.timeline__arrow').getAttribute('aria-controls')).setAttribute('aria-hidden', 'true');
        });
    });

    // Individual expand/collapse functionality
    document.querySelectorAll('.timeline__arrow').forEach(function(button) {
        button.addEventListener('click', function() {
            var item = document.getElementById(this.getAttribute('aria-controls'));
            if (this.getAttribute('aria-expanded') === 'true') {
                this.setAttribute('aria-expanded', 'false');
                item.setAttribute('aria-hidden', 'true');
            } else {
                this.setAttribute('aria-expanded', 'true');
                item.setAttribute('aria-hidden', 'false');
            }
        });
    });
});
