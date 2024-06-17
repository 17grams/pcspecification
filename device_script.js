document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const dropdownMenu = document.getElementById("dropdownMenu");

    // Function to toggle the menu
    const toggleMenu = () => {
        dropdownMenu.classList.toggle("show");
    };

    // Toggle menu on button click
    menuToggle.addEventListener("click", toggleMenu);

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        const targetElement = event.target;
        if (!menuToggle.contains(targetElement) && !dropdownMenu.contains(targetElement)) {
            dropdownMenu.classList.remove("show");
        }
    });

    // Keep menu open on hover
    dropdownMenu.addEventListener("mouseenter", () => {
        dropdownMenu.classList.add("show");
    });

    // Close menu when mouse leaves
    dropdownMenu.addEventListener("mouseleave", () => {
        dropdownMenu.classList.remove("show");
    });
});
