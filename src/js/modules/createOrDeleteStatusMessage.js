const createOrDeleteStatusMessage = (message, appendElement, delay, OldElement = null) => {
    if (OldElement) OldElement.remove();


    const statusMessage = document.createElement('div');
    statusMessage.innerHTML = message;
    statusMessage.classList.add('status');
    appendElement.append(statusMessage);


    setTimeout(() => statusMessage.remove(), delay);
    return statusMessage;
}


export default createOrDeleteStatusMessage;