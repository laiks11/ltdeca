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