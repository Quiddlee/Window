const createOrDeleteStatusMessage = (text, OldElement = null) => {
    if (OldElement) OldElement.remove();
    const statusMessage = document.createElement('div');
    statusMessage.innerHTML = text
    statusMessage.classList.add('status');


    return statusMessage;
}


export default createOrDeleteStatusMessage;