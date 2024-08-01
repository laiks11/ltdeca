document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const newsItems = document.querySelectorAll('.news-item');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        
        newsItems.forEach(item => {
            const title = item.querySelector('h2').textContent.toLowerCase();
            const content = item.querySelector('p').textContent.toLowerCase();
            const date = item.querySelector('span').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm) || date.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    // Clear search and show all items when input is empty
    searchInput.addEventListener('input', function() {
        if (this.value === '') {
            newsItems.forEach(item => {
                item.style.display = 'block';
            });
        }
    });
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

