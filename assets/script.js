// A simple function to add some interactivity
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Get a reference to the button
    const ctaButton = document.getElementById('cta-button');

    // 2. Define what happens when the button is clicked
    const handleClick = () => {
        // You could redirect them to a specific project page, or just alert them
        alert('Awesome! You checked out my best project. Check the "Projects" section for the link!');
        
        // Optional: Scroll to the projects section
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // 3. Attach the function to the button's click event
    if (ctaButton) {
        ctaButton.addEventListener('click', handleClick);
    }

    console.log('Portfolio website script loaded and ready!');
});