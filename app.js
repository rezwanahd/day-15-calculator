
let calData = [];

let  getValue = (val) => {

    calData.push(val);


    document.querySelector('.top-monitor').innerHTML = calData.join('');
    document.querySelector('.main-monitor').innerHTML = 0;


}

let clear_all = () => {
     
    calData = [];

    document.querySelector('.top-monitor').innerHTML = '';
    document.querySelector('.main-monitor').innerHTML = '';
}

let finalRes = () => {

    cal_string = calData.join('');

    document.querySelector('.main-monitor').innerHTML = eval(cal_string)

}