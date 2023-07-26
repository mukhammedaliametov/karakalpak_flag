'use strict'

const gifEl = document.querySelector('.gif-content');

const firstTimeout = setTimeout(function firstFunction() {
  gifEl.classList.toggle('active');
}, 1000);

const secondTimeout = setTimeout(function secondFunction() {
  gifEl.classList.remove('active');
}, 4100);
