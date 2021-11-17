let dropDown = document.getElementsByClassName('formElements__dropDown_field')[0];
let hideElem = document.getElementsByClassName('formElements__dropDown_hideElem')[0];
let buttonAdultPlus1 = document.getElementsByClassName('formElements__dropDown_hideElem_buttonCount')[0];
let buttonAdultPlus2 = document.getElementsByClassName('formElements__dropDown_hideElem_buttonCount')[2];
let buttonAdultPlus3 = document.getElementsByClassName('formElements__dropDown_hideElem_buttonCount')[4];
let buttonAdultMinus1 = document.getElementsByClassName('formElements__dropDown_hideElem_buttonCount')[1];
let buttonAdultMinus2 = document.getElementsByClassName('formElements__dropDown_hideElem_buttonCount')[3];
let buttonAdultMinus3 = document.getElementsByClassName('formElements__dropDown_hideElem_buttonCount')[5];
let span1 = document.getElementsByClassName('span')[0];
let span2 = document.getElementsByClassName('span')[1];
let span3 = document.getElementsByClassName('span')[2];
let clear = document.getElementsByClassName('formElements__dropDown_hideElem_clear')[0];
let submit = document.getElementsByClassName('formElements__dropDown_hideElem_submit')[0];
let countAdult = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
clear.style.display = 'none';
hideElem.style.display = 'none';
let clearAll = () => {
    countAdult = 0;
    count1 = 0;
    count2 = 0;
    count3 = 0;
    dropDown.value = '';
    span1.innerHTML = 0;
    span2.innerHTML = 0;
    span3.innerHTML = 0;
    buttonAdultMinus1.classList.add('disabled_button');
    buttonAdultMinus2.classList.add('disabled_button');
    buttonAdultMinus3.classList.add('disabled_button');
    clear.style.display = 'none';
};
let adultPlus = () => {
    countAdult += 1;
    if((countAdult > 1) & (countAdult < 5)) {
    dropDown.value = countAdult + ' гостя';
    } else if(countAdult == 1) { 
        dropDown.value = countAdult + ' гость';
    } else if(countAdult > 4) {
        dropDown.value = countAdult + ' гостей';
    };
};
let adultMinus = () => {
    countAdult -= 1;
    if((countAdult > 1) & (countAdult < 5)) {
        dropDown.value = countAdult + ' гостя';
        } else if(countAdult == 1) { 
            dropDown.value = countAdult + ' гость';
        } else if(countAdult > 4) {
            dropDown.value = countAdult + ' гостей';
        } else if(countAdult == 0){
            dropDown.value = '';
        };
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
    hideElem.style.display = 'block';
    dropDown.style.borderBottom = 'none';
    dropDown.style.borderBottomLeftRadius = '0px';
    dropDown.style.borderBottomRightRadius = '0px';
    console.log('show');
    dropDown.removeEventListener('click', show);
    dropDown.addEventListener('click', hide);
};
dropDown.addEventListener('click', show);
buttonAdultPlus1.addEventListener('click', adultPlus);
buttonAdultPlus1.addEventListener('click', function(event){
    count1++;
    span1.innerHTML = count1;
    if(count1 > 0) {
        buttonAdultMinus1.classList.remove('disabled_button');
    };
    if(count1 > 0 || count2 > 0 || count3 > 0) {
        clear.style.display = '';
    } else if(count1 == 0 || count2 == 0 || count3 == 0){
        clear.style.display = 'none';
    };
});
buttonAdultPlus2.addEventListener('click', adultPlus);
buttonAdultPlus2.addEventListener('click', function(event){
    count2++;
    span2.innerHTML = count2;
    if(count2 > 0) {
        buttonAdultMinus2.classList.remove('disabled_button');
    }
    if(count1 > 0 || count2 > 0 || count3 > 0) {
        clear.style.display = '';
    } else if(count1 == 0 || count2 == 0 || count3 == 0){
        clear.style.display = 'none';
    };;
});
buttonAdultPlus3.addEventListener('click', adultPlus);
buttonAdultPlus3.addEventListener('click', function(event){
    count3++;
    span3.innerHTML = count3;
    if(count3 > 0) {
        buttonAdultMinus3.classList.remove('disabled_button');
    }
    if(count1 > 0 || count2 > 0 || count3 > 0) {
        clear.style.display = '';
    } else if(count1 == 0 || count2 == 0 || count3 == 0){
        clear.style.display = 'none';
    };;
});
buttonAdultMinus1.addEventListener('click', adultMinus);
buttonAdultMinus1.addEventListener('click', function(event) {
    count1--;
    span1.innerHTML = count1;
    if(count1 == 0) {
        buttonAdultMinus1.classList.add('disabled_button');
    }
    if(count1 > 0 || count2 > 0 || count3 > 0) {
        clear.style.display = '';
    } else if(count1 == 0 || count2 == 0 || count3 == 0){
        clear.style.display = 'none';
    };;
});

buttonAdultMinus2.addEventListener('click', adultMinus);
buttonAdultMinus2.addEventListener('click', function(event) {
    count2--;
    span2.innerHTML = count2;
    if(count2 == 0) {
        buttonAdultMinus2.classList.add('disabled_button');
    }
    if(count1 > 0 || count2 > 0 || count3 > 0) {
        clear.style.display = '';
    } else if(count1 == 0 || count2 == 0 || count3 == 0){
        clear.style.display = 'none';
    };;
});
buttonAdultMinus3.addEventListener('click', adultMinus);
buttonAdultMinus3.addEventListener('click', function(event) {
    count3--;
    span3.innerHTML = count3;
    if(count3 == 0) {
        buttonAdultMinus3.classList.add('disabled_button');
    }
    if(count1 > 0 || count2 > 0 || count3 > 0) {
        clear.style.display = '';
    } else if(count1 == 0 || count2 == 0 || count3 == 0){
        clear.style.display = 'none';
    };;
});
clear.addEventListener('click', clearAll);