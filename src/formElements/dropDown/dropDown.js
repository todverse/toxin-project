let dropDown = document.getElementsByClassName('formElements__dropDown_field')[0];
let hideElem = document.getElementsByClassName('formElements__dropDown_hideElem')[0];
let buttonAdultPlus = document.getElementsByClassName('formElements__dropDown_hideElem_buttonCount')[0];
let countAdult = 0;
hideElem.style.display = 'none';
hideElem.onmouseleave = function(event) {
    dropDown.blur();
};
let adultPlus = () => {
    countAdult += 1;
    dropDown.focus();
    if(countAdult > 1) {
    dropDown.value = countAdult + ' взрослых';
    } else dropDown.value = countAdult + ' взрослый';
};
let hide = () => {
    hideElem.style.display = 'none';
    dropDown.style.borderBottom = '';
    dropDown.style.borderBottomRightRadius = '';
    dropDown.style.borderBottomLeftRadius = '';
    console.log('hide');
    dropDown.removeEventListener('click', hide);
    dropDown.addEventListener('click', show);
};
let show = () => {
    hideElem.style.display = '';
    dropDown.style.borderBottom = 'none';
    dropDown.style.borderBottomLeftRadius = '0px';
    dropDown.style.borderBottomRightRadius = '0px';
    console.log('show');
    dropDown.removeEventListener('click', show);
    dropDown.addEventListener('click', hide);
}
dropDown.addEventListener('click', show);
buttonAdultPlus.addEventListener('click', adultPlus);