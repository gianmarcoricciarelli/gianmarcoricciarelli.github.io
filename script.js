'use strict';

const navigationItems = document.querySelectorAll('.navigation-section__container a');
const sectionContainer = document.querySelector('.content-section__container');
const section = document.querySelector(`.content-section__content`);

function buildSectionContent(sectionName) {
    if (sectionName === 'about') {
        section.innerText = `
        Hi! I'm Gianmarco, and I'm a Frontend Developer based in Tuscany, Italy.\n\nI have a Master's Degree in
        Computer Science, and I studied at the Florence's University for my Bachelor's Degree, also in Computer Science, and
        at the Pisa's University for my Master's Degree.\n\nI have a passion for building beautiful interfaces, and
        I'm always searching for new technologies to try and have fun with.\n\nIn my free time I also like to deepen
        my knowledge in the technologies I already use by following online courses, or reading technical articles.\n\n
        Thank you for visiting my website!
        `;
    } else {
        section.innerText = sectionName;
    }
}

for (const item of navigationItems) {
    item.addEventListener('click', ({ target: navigationItem }) => {
        sectionContainer.classList.add('hidden');

        setTimeout(() => {
            buildSectionContent(navigationItem.innerText.toLowerCase());
            sectionContainer.classList.remove('hidden');
        }, 300);
    });
}
