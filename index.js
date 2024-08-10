const moment = require("moment");
const momentTimeZone = require('moment-timezone');

// console.log(momentTimeZone.tz.names())

const clockTimer = document.querySelector('.time');
const clockDate = document.querySelector('.date');
const clockTimeZone = document.querySelector('.timezone');

clockTimeZone.textContent = momentTimeZone.tz.guess();


setInterval(updateTime, 1000);

function updateTime() {
    clockTimer.textContent = moment(new Date()).format('LTS');
}

const now = new Date();
const millisTillMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0) - now;

clockDate.textContent = moment(now).format('dddd, DD MMMM, YYYY') //Initial text content

setInterval(updateDate, millisTillMidnight);

function updateDate() {
    clockDate.textContent = moment(new Date()).format('dddd, DD MMMM YYYY');
}