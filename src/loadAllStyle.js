import './index.scss'
import './formElements/dropDown/dropDown.js'
import './formElements/dateDropDown/dateDropDown.js'
import AirDatepicker from './../node_modules/air-datepicker/air-datepicker'
new AirDatepicker('#input', {
    buttons: ['clear', {content(dp) {return 'Применить'}}]
});
new AirDatepicker('#input1', {
    buttons: ['clear', {content(dp) {return 'Применить'}}]
});
