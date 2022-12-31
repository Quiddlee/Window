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
            const statusMessage = createOrDeleteStatusMessage(messages.loading, form, 4000);


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
                    statusMessage.remove();
                    createOrDeleteStatusMessage(messages.success, form, 4000);
                })
                .catch(() => {
                    statusMessage.remove();
                    createOrDeleteStatusMessage(messages.failure, form, 4000);
                })
                .finally(() => {
                    allForms.forEach(form => form.reset());
                });
        });
    }


    allForms.forEach(form => {
        bindPostData(form);
    });
}


export default forms;