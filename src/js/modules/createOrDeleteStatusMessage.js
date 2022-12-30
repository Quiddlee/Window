const createOrDeleteStatusMessage = (removeOldElement, text) => {
    if (removeOldElement) removeOldElement.remove();
    const statusMessage = document.createElement('div');
    statusMessage.innerHTML = text
    statusMessage.classList.add('status');


    return statusMessage;
}


export default createOrDeleteStatusMessage;