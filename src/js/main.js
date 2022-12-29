import './slider';
import modals from "./modules/modals";
import forms from "./modules/forms";
import tabs from "./modules/tabs";


window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    tabs('.decoration_slider', '.no_click', '[data-decoration-content]', 'after_click');
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    modals();
    forms();
});
