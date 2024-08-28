document.addEventListener('DOMContentLoaded', () => {
    const joinItems = document.querySelectorAll('.join-item');

    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1 // Adjust this value to control when the animation triggers
    });

    // Observe each join-item
    joinItems.forEach(item => {
        observer.observe(item);
    });
});
