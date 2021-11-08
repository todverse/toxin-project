let dropDown = document.getElementsByClassName('formElements__dropDown_field')[0];
console.log(dropDown.innerHTML);
let show = () => {
    dropDown.innerHTML = '50px';
    console.log(dropDown.innerHTML);
    dropDown.removeEventListener('click', show);

}
dropDown.addEventListener('click', show)