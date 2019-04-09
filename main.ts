import Vue from 'vue';
import $ from 'jquery';

console.log(new Vue());

// Type error!
// $(123);

$('body').append($('<div>Good old jQuery</div>'));
