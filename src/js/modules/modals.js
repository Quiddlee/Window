import createOrDeleteStatusMessage from "./createOrDeleteStatusMessage";
import calculateScrollWidth from "./calculateScrollWidth";
import formVisualValidate from "./formVisualValidate";


const modals = (state) => {
    function bindModal(modalSelector, triggerSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const windows = document.querySelectorAll('[data-modal]');
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const scroll = calculateScrollWidth();
        let statusMessage = null;


        const isValidate = (property, secondProperty, selector, modalElement) => {
            if (property && secondProperty) {
                windows.forEach(window => window.style.display = 'none');
                modal.style.display = 'block';
            }


            if (!property || !secondProperty) {
                if (statusMessage) statusMessage.remove();
                formVisualValidate(property, selector);
                statusMessage = createOrDeleteStatusMessage('Заполните данные', modalElement.parentNode, 4000);
            }
        }


        trigger.forEach(element => {
            element.addEventListener('click', (event) => {
                // if (modalTimerId) clearInterval(modalTimerId);
                if (event.target) event.preventDefault();
                modal.childNodes[1].childNodes[1].classList.add('form_faded');
                document.body.style.marginRight = `${scroll}px`;
                document.body.style.overflow = 'hidden';


                if (getComputedStyle(modal.childNodes[1].childNodes[1]).width.replace(/px/, '') > 400) {
                    modal.querySelector('.popup_calc_content').style.left = '51.05%';
                }


                if (modal.getAttribute('data-modal') === 'calc') {
                    if (modal.className.match('end')) {
                        isValidate(state.profile, true, '.checkbox-custom', element);
                    }


                    if (!modal.className.match('end')) {
                        isValidate(state.height,state.width, '#height', element);
                        isValidate(state.width,state.height, '#width', element);
                    }
                }
                else modal.style.display = 'block';
            });
        });


        close.addEventListener('click', () => {
            windows.forEach(window => window.style.display = 'none');
            modal.classList.remove('form_faded');
            document.body.style.marginRight = '0px';
            document.body.style.overflow = '';
        });


        modal.addEventListener('click', (event) => {
            if (event.target === modal && closeClickOverlay) {
                windows.forEach(window => window.style.display = 'none');
                modal.classList.remove('form_faded');
                document.body.style.marginRight = '0px';
                document.body.style.overflow = '';
                modal.style.display = 'none';
            }
        });
    }


    bindModal('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_end_close', false);
    bindModal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer .popup_close');
    bindModal('.popup_calc', '.popup_calc_btn', '.popup_calc_close');
    bindModal('.popup', '.phone_link', '.popup .popup_close');


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
};


export default modals;