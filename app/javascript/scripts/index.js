// index.js
import $ from "jquery";
window.$ = $;
import "select2";

$(document).ready(function() {
    $('.js-currency-select').select2();
});