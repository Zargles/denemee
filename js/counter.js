const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number(counter.dataset.target);

            if (isNaN(target)) return;

            const duration = 1800;
            const startTime = performance.now();

            function animate(currentTime) {

                const progress = Math.min(
                    (currentTime - startTime) / duration,
                    1
                );

                // Yumuşak başlangıç ve bitiş
                const ease = 1 - Math.pow(1 - progress, 3);

                counter.textContent =
                    Math.floor(target * ease);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    counter.textContent = target;
                }
            }

            requestAnimationFrame(animate);

            // Aynı sayı tekrar animasyon yapmasın
            observer.unobserve(counter);

        });

    },
    {
        threshold: 0.6
    }
);


counters.forEach(counter => {
    counterObserver.observe(counter);
});