const modals = () => {


    // const modalTimerId = setTimeout(() => {
    //     showModalByTime('.popup');
    // }, 60000);


    // const showModalByTime = (modalSelector) => {
    //     const modal = document.querySelector(modalSelector);
    //
    //
    //     modal.style.display = 'block';
    //     document.body.style.overflow = 'hidden';
    // };


    function bindModal(modalSelector, triggerSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);


        trigger.forEach(element => {
            element.addEventListener('click', (event) => {
                // if (modalTimerId) clearInterval(modalTimerId);
                if (event.target) event.preventDefault();


                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });


        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });


        modal.addEventListener('click', (event) => {
            const target = event.target;


            if (target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
    bindModal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer .popup_close');
    bindModal('.popup', '.phone_link', '.popup .popup_close');
};


export default modals;