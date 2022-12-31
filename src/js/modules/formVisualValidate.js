const formVisualValidate = (property, selector) => {
    if (!property) {
        const element = document.querySelectorAll(selector);
        element.forEach(e => {
            e.style.border = 'solid 1px red';
            e.style.borderRadius = '5%';
            e.addEventListener('click', () => e.style.border = '');


            setTimeout(() => {
                e.style.border = '';
                e.removeEventListener('click', () => e.style.border = '');
            }, 4000);
        });
    }
}


export default formVisualValidate;