document.addEventListener('DOMContentLoaded', () => {
    let buttonListItems = document.getElementsByClassName('list-item-button');

    for (const listItem of buttonListItems) {
        const itemHead = listItem.children[0];
        listItem.onmouseenter = (event) => {
            if (itemHead.classList.contains('list-item-shrink-margin')) {
                itemHead.classList.remove('list-item-shrink-margin');
            }

            itemHead.classList.add('list-item-buff-margin');
        }
        listItem.onmouseout = (event) => {
            itemHead.classList.remove('list-item-buff-margin');
            itemHead.classList.add('list-item-shrink-margin');
        }
    }
});