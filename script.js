'use strict';

const navigationItems = document.querySelectorAll('.navigation-section__container a');
const sectionContainer = document.querySelector('.content-section__container');

const htmlContents = {
    about: `
        <p class="content-section__content">
            Hi! I'm Gianmarco, and I'm a Frontend Developer based in Tuscany, Italy.<br /><br />I have a Master's Degree in
            Computer Science, and I studied at the Florence's University for my Bachelor's Degree, also in Computer Science, and
            at the Pisa's University for my Master's Degree.<br /><br />I have a passion for building beautiful interfaces, and
            I'm always searching for new technologies to try and have fun with.<br /><br />In my free time I also like to deepen
            my knowledge in the technologies I already use by following online courses, or reading technical articles.<br /><br />
            Thank you for visiting my website!
        <p>
    `,
    experience: `
        <div class="content-section__content">
            <p>Bla bla bla some text</p>
            <a href="https://www.w3schools.com" target="_blank">a link</a>
        </div>
    `,
    skills: `<p class="content-section__content">Skills</p>`,
    contacts: `<p class="content-section__content">Contacts</p>`,
};

for (const item of navigationItems) {
    item.addEventListener('click', ({ target: { innerText } }) => {
        sectionContainer.classList.add('hidden');

        setTimeout(() => {
            document.querySelector('.content-section__content').remove();
            sectionContainer.insertAdjacentHTML('afterbegin', htmlContents[innerText.toLowerCase()]);
            sectionContainer.classList.remove('hidden');
        }, 300);
    });
}
