document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.querySelector("#skills-area");
    const progressBars = document.querySelectorAll(".skill-progress-bar");

    const animateProgressBars = () => {
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const sectionBottom = skillsSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (sectionTop <= windowHeight && sectionBottom >= 0) {
            // Animate progress bars to their respective widths
            progressBars.forEach((bar) => {
                bar.style.width = bar.dataset.skillWidth;
            });
        } else {
            // Reset progress bars to 0 when out of view
            progressBars.forEach((bar) => {
                bar.style.width = "0%";
            });
        }
    };

    // Store original widths in dataset for reanimation
    progressBars.forEach((bar) => {
        bar.dataset.skillWidth = bar.style.width;
        bar.style.width = "0%"; // Reset all widths initially
    });

    // Listen for scroll events
    window.addEventListener("scroll", animateProgressBars);
});
