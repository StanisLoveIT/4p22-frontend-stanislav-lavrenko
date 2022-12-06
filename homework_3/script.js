'use strict';
function createFibonacci() {
    let next = 1;
    let last = 0;
    const fibo = document.getElementById('button');
    fibo.addEventListener('click', () => {
        next = next + last;
        last = next - last;
        console.log(next);
        document.getElementById('result').innerText = next;
    })
}
createFibonacci();