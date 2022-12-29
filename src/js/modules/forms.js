import {postData} from "../services/cervices";


const forms = () => {
    const allForms = document.querySelectorAll('form');
    const phoneInputs = document.querySelectorAll('input[name="user_phone"]');


    phoneInputs.forEach(input => {
        input.addEventListener('input', () => {
             input.value = input.value.replace(/\D/, '');
        });
    });


    const messages = {
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        loading: 'Загрузка...'
    }


    const bindPostData = (form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();


            const statusMessage = document.createElement('div');
            statusMessage.innerHTML = messages.loading;
            statusMessage.classList.add('status');
            form.append(statusMessage)


            const formData = new FormData(form);


            postData('assets/server.php', formData)
                .then(data => {
                    console.log(data);
                    statusMessage.innerHTML = messages.success;
                })
                .catch(() => {
                    statusMessage.innerHTML = messages.failure;
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