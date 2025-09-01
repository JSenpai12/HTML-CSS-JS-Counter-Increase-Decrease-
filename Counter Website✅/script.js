let count = 0;

let addBTN = document.querySelector('.add-btn');
let diffBTN = document.querySelector('.diff-btn');
let countNum = document.querySelector('.count-num');

addBTN.addEventListener('click', () => {
    count ++;
    countNum.textContent = `${count}`;
});

diffBTN.addEventListener('click', () => {
    count --;
    countNum.textContent = `${count}`;
});