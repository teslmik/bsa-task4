// todo: add logic

"use strict"

const slide = document.querySelectorAll('.slide');

slide.forEach((item) => {
  item.addEventListener('click', (e) => {
    const target = e.target.closest('.slide');
    removeClass();
    target.classList.add('active');
  });
});

const removeClass = () => slide.forEach((item) => item.classList.remove('active'));
