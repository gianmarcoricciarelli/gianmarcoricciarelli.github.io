'use strict';

const navigationBar = document.querySelector('.header__navigation-bar');
const sections = document.querySelectorAll('.section-container');

const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
        const intersectingSection = entries.find((entry) => entry.isIntersecting);

        if (intersectingSection) {
            intersectingSection.target.classList.add('visible');
            observer.unobserve(intersectingSection.target);
        }
    },
    { threshold: 0.35 }
);
sections.forEach((section) => sectionObserver.observe(section));

navigationBar.addEventListener('click', ({ target }) => {
    const navigationItem = target.closest('.nav-item');

    if (navigationItem) {
        const sectionId = navigationItem.id.split('-').pop();

        for (let index = 0; index < sectionId; index++) {
            const observedSection = document.querySelector(`#section-${index + 1}`);
            observedSection.classList.add('visible');
            sectionObserver.unobserve(observedSection);
        }

        document.querySelector(`#section-${sectionId}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});
