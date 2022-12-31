const images = () => {
    const imgPopup = document.createElement('div');
    const workSection = document.querySelector('.works');
    const bigImage = document.createElement('img');


    imgPopup.classList.add('popup');
    bigImage.classList.add('popup_content');
    bigImage.style.minWidth = '35%';
    bigImage.style.maxHeight = '85%';
    workSection.append(imgPopup);
    imgPopup.append(bigImage);


    workSection.addEventListener('click', (event) => {
        const target = event.target;
        event.preventDefault();

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'block';
            bigImage.src = target.parentNode.href;
            document.body.style.overflow = 'hidden';
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}


export default images;