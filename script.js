document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            alert('Searching for: ' + query + '\n(This would connect to your search functionality)');
        }
    });

    // Add click handlers for quick links
    document.querySelectorAll('.quick-link-item').forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.quick-link-title').textContent;
            alert('Navigating to: ' + title + '\n(This would connect to your page routing)');
        });
    });

    // Add click handlers for artist cards
    document.querySelectorAll('.artist-card').forEach(card => {
        card.addEventListener('click', function() {
            const artistName = this.querySelector('.artist-name').textContent;
            alert('Viewing artist: ' + artistName + '\n(This would show artist page)');
        });
    });

    // Add click handlers for recent songs
    document.querySelectorAll('.recent-song').forEach(song => {
        song.addEventListener('click', function() {
            const songTitle = this.querySelector('.song-title').textContent;
            const artistName = this.querySelector('.song-artist').textContent;
            alert('Viewing lyrics for: ' + songTitle + ' by ' + artistName + '\n(This would show lyrics page)');
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});