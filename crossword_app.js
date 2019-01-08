/**
 * Services such as codepen.io and jsfiddle.net make use of JS
 */



var today = new Date();
var reference_date = new Date("1/2/2019");
var time_difference = Math.abs(today.getTime() - reference_date.getTime());
var day_difference = Math.ceil(time_difference / (1000 * 3600 * 24))-1;


if ((day_difference % 7) == 0) {
    x = Math.floor(day_difference/7 + 1213);
    window.open('https://www.theguardian.com/crosswords/speedy/'+String(x));
} else {
    x = Math.floor(day_difference%7 + ((day_difference - day_difference%7) / 7.0)*6 + 15179);
    window.open('https://www.theguardian.com/crosswords/quick/'+String(x));
}
