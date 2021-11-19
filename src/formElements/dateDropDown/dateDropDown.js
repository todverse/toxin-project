let firstDate, secondDate;
let filterDateDropDown = document.getElementsByClassName('formElements__filterDateDropDown_field')[0];
let input = document.getElementById('input');
let input1 = document.getElementById('input1');
import AirDatepicker from './../../../node_modules/air-datepicker/air-datepicker.js'
new AirDatepicker('#input', {
    navTitles: {
        days: '<i>MMMM</i> <strong>yyyy</strong>',
        months: 'Select month of <strong>yyyy</strong>'    
    } ,
    buttons: ['clear', {
        content(dp) {return 'Применить'},
    }]
});
new AirDatepicker('#input1', {
    navTitles: {
        days: '<i>MMMM</i> <strong>yyyy</strong>',
        months: 'Select month of <strong>yyyy</strong>'    
    } ,
    buttons: ['clear', {
        content(dp) {return 'Применить'} ,
    }]
});