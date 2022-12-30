import createOrDeleteStatusMessage from "./createOrDeleteStatusMessage";
import checkNumInputs from "./checkNumInputs";
import {postData} from "../services/cervices";


const forms = (state) => {
    const allForms = document.querySelectorAll('form');


    checkNumInputs('input[name="user_phone"]')


    const messages = {
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        loading: 'Загрузка...'
    }


    const bindPostData = (form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let statusMessage;


            statusMessage = createOrDeleteStatusMessage(null, messages.loading);
            form.append(statusMessage);


            const formData = new FormData(form);
            if (form.getAttribute('data-calc') === 'end') {
                for (const key in state) {
                    formData.append(key, state[key]);
                    delete state[key];
                }
            }


            postData('assets/server.php', formData)
                .then(data => {
                    console.log(data);
                    statusMessage = createOrDeleteStatusMessage(statusMessage, messages.success);
                    form.append(statusMessage);
                })
                .catch(() => {
                    statusMessage = createOrDeleteStatusMessage(statusMessage, messages.failure);
                    form.append(statusMessage);
                })
                .finally(() => {
                    allForms.forEach(form => form.reset());
                    setTimeout(() => statusMessage.remove(), 4000);
                });
        });
    }


    allForms.forEach(form => {
        bindPostData(form);
    });
}


export default forms;