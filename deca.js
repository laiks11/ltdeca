const exploreButton = document.getElementById('exploreButton');


exploreButton.addEventListener('click', function() {
    const container2 = document.querySelector('.container2');
    container2.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.social-links .new-tab-link');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            if (this.href !== '#') {
                e.preventDefault();
                window.open(this.href, '_blank');
            }
        });
    });
});