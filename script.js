// ===== Scroll reveal =====
document.addEventListener("DOMContentLoaded", () => {
    const revealEls = document.querySelectorAll(".reveal-grid, .reveal-block");

    const obsOptions = { root: null, rootMargin: "0px", threshold: 0.12 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, obsOptions);

    revealEls.forEach((el) => observer.observe(el));

    // ===== Audio toggle =====
    const audio = document.getElementById("chiptune");
    const audioBtn = document.getElementById("audioToggle");
    if (audio && audioBtn) {
        audioBtn.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
                audioBtn.textContent = "🔈 Stop";
            } else {
                audio.pause();
                audioBtn.textContent = "🔊 Music";
            }
        });
        audio.volume = 0.16;
    }

    // ===== Pixel button glitch =====
    document.querySelectorAll(".btn-pixel").forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.classList.add("active-pixel");
            setTimeout(() => btn.classList.remove("active-pixel"), 260);
        });
    });
});
