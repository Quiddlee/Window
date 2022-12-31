const tabs = (headerSelector, tabsSelector, contentSelector, classActive, display = 'block') => {
    const content = document.querySelectorAll(contentSelector);
    const header = document.querySelector(headerSelector);
    const tabs = document.querySelectorAll(tabsSelector);


    const hideTabContent = () => {
        tabs.forEach(item => {
            item.classList.remove(classActive);
        });
        content.forEach(item => {
            item.classList.remove('faded');
            item.style.display = 'none';
        });
    }


    const showTabContent = (whichTab = 0) => {
        content[whichTab].classList.add('faded');
        tabs[whichTab].classList.add(classActive);
        content[whichTab].style.display = display;
    }


    hideTabContent();
    showTabContent();


    header.addEventListener('click', (event) => {
        const target = event.target;


        if (event.target) {
            tabs.forEach((tab, tabIndex) => {
                if (target.parentNode === tab || target === tab) {
                    hideTabContent();
                    showTabContent(tabIndex);
                }
            });
        }
    });
}


export default tabs;