import checkNumInputs from "./checkNumInputs";


const changeModalState = (state) => {
    const windowForms = document.querySelectorAll('.balcon_icons_img');
    const windowProfiles = document.querySelectorAll('.checkbox');
    const windowType = document.querySelectorAll('#view_type');
    const windowHeight = document.querySelectorAll('#height');
    const windowWidth = document.querySelectorAll('#width');


    checkNumInputs('#height');
    checkNumInputs('#width');


    const bindActionToElements = (event, element, property) => {
        element.forEach((e, i) => {
            e.addEventListener(event, () => {
                if (e.nodeName === 'INPUT') {
                    if (e.getAttribute('type') === 'checkbox') {
                        i === 0 ? state[property] = 'cold' : state[property] = 'warm';


                        windowProfiles.forEach(boxes => boxes.checked = false);
                        windowProfiles[i].checked = true;
                    }


                    if (e.getAttribute('type') !== 'checkbox') {
                        state[property] = e.value;
                    }
                }


                if (e.nodeName === 'SELECT') state[property] = e.value;
                if (e.nodeName === 'SPAN') state[property] = i;
                console.log(state);
            });
        });
    }


    bindActionToElements('change', windowProfiles, 'profile');
    bindActionToElements('input', windowHeight, 'height');
    bindActionToElements('input', windowWidth, 'width');
    bindActionToElements('click', windowForms, 'form');
    bindActionToElements('change', windowType, 'type');
}


export default changeModalState;