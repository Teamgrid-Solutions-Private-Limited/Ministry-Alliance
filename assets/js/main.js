document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        const parent = this.parentElement;

        // Close other dropdowns
        document.querySelectorAll('.has-dropdown').forEach(li => {
            if (li !== parent) {
                li.classList.remove('active');
            }
        });

        // Toggle current dropdown
        parent.classList.toggle('active');
    });
});

// Close when clicking outside
document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown')) {
        document.querySelectorAll('.has-dropdown').forEach(li => {
            li.classList.remove('active');
        });
    }
});