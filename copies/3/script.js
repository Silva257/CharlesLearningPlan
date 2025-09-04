 // JavaScript for dropdown functionality
        document.addEventListener('DOMContentLoaded', function() {
            // JavaScript dropdown functionality
            const dropdownToggles = document.querySelectorAll('.js-dropdown-toggle');
            
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    const dropdown = this.nextElementSibling;
                    
                    // Close all other open dropdowns
                    document.querySelectorAll('.js-dropdown').forEach(item => {
                        if (item !== dropdown && item.classList.contains('active')) {
                            item.classList.remove('active');
                        }
                    });
                    
                    // Toggle current dropdown
                    dropdown.classList.toggle('active');
                });
            });
            
            // Close dropdowns when clicking elsewhere
            document.addEventListener('click', function(e) {
                if (!e.target.matches('.js-dropdown-toggle')) {
                    document.querySelectorAll('.js-dropdown').forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }
            });
            
            // JavaScript hamburger menu functionality
            document.getElementById('js-hamburger').addEventListener('click', function() {
                const menu = document.getElementById('js-mobile-menu');
                menu.classList.toggle('active');
            });
        });