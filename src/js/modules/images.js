import calculateScrollWidth from "./calculateScrollWidth";


const images = () => {
    const workSection = document.querySelector('.works');
    const bigImage = document.createElement('img');
    const imgPopup = document.createElement('div');
    const scroll = calculateScrollWidth();

    bigImage.classList.add('popup_content');
    bigImage.style.maxHeight = '85%';
    bigImage.style.minWidth = '35%';
    imgPopup.classList.add('popup');
    workSection.append(imgPopup);
    imgPopup.append(bigImage);


    workSection.addEventListener('click', (event) => {
        const target = event.target;
        event.preventDefault();


        if (target && target.classList.contains('preview')) {
            document.body.style.marginRight = `${scroll}px`;
            document.body.style.overflow = 'hidden';
            bigImage.src = target.parentNode.href;
            bigImage.classList.add('faded');
            imgPopup.style.display = 'block';
        }


        if (target && target.matches('div.popup')) {
            bigImage.classList.remove('faded');
            document.body.style.marginRight = '0px';
            document.body.style.overflow = '';
            imgPopup.style.display = 'none';
        }
    });
}


export default images;