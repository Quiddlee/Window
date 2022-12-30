import createOrDeleteStatusMessage from "./createOrDeleteStatusMessage";

const modals = (state) => {


    const formValidate = (property, selector) => {
        if (!property) {
            const element = document.querySelector(selector);
            element.style.border = 'solid 1px red';
            element.style.borderRadius = '5%';


            setTimeout(() => {
                element.style.border = '';
            }, 4000);
        }
    }


    function bindModal(modalSelector, triggerSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const windows = document.querySelectorAll('[data-modal]');
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);


        trigger.forEach(element => {
            element.addEventListener('click', (event) => {
                // if (modalTimerId) clearInterval(modalTimerId);
                if (event.target) event.preventDefault();


                if (modal.getAttribute('data-modal') === 'calc') {
                    if (state.height && state.width) {
                        windows.forEach(window => window.style.display = 'none');
                        modal.style.display = 'block';
                    }
                    else {
                        formValidate(state.height, '#height');
                        formValidate(state.width, '#width');


                        const check = createOrDeleteStatusMessage(null, 'Заполните данные');
                        element.parentNode.append(check);
                        setTimeout(() => check.remove(), 4000);
                    }
                }


                else modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });


        close.addEventListener('click', () => {
            windows.forEach(window => window.style.display = 'none');
            document.body.style.overflow = '';
        });


        modal.addEventListener('click', (event) => {
            if (event.target === modal && closeClickOverlay) {
                windows.forEach(window => window.style.display = 'none');
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }


    // const modalTimerId = setTimeout(() => {
    //     showModalByTime('.popup');
    // }, 60000);
    //
    //
    // const showModalByTime = (modalSelector) => {
    //     const modal = document.querySelector(modalSelector);
    //
    //
    //     modal.style.display = 'block';
    //     document.body.style.overflow = 'hidden';
    // };


    bindModal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer .popup_close');
    bindModal('.popup', '.phone_link', '.popup .popup_close');
    bindModal('.popup_calc', '.popup_calc_btn', '.popup_calc_close');
    bindModal('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_end_close', false);
};


export default modals;