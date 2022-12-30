import changeModalState from "./modules/changeModalState";
import modals from "./modules/modals";
import forms from "./modules/forms";
import tabs from "./modules/tabs";
import './slider';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';


    const modalState = {
        form: 0,
        width: null,
        type: 'tree',
        height: null,
        profile: null
    };


    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    tabs('.decoration_slider', '.no_click', '[data-decoration-content]', 'after_click');
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    changeModalState(modalState);
    modals(modalState);
    forms(modalState);
});
