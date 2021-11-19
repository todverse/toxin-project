import AirDatepicker from './../../../node_modules/air-datepicker/air-datepicker.js'
new AirDatepicker('#filterDate', {
    navTitles: {
        days: '<i>MMMM</i> <strong>yyyy</strong>',
        months: 'Select month of <strong>yyyy</strong>'    
    } ,
    range : true ,
    multipleDatesSeparator : ' - ' ,
    buttons: ['clear', {
        content(dp) {return 'Применить'},
    }] ,
    dateFormat : 'd MMM'
});