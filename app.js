const p1B = document.querySelector('#p1B');
const p2B = document.querySelector('#p2B');
const resetB = document.querySelector('#reset')
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const pontos = document.querySelector('#pontos')

let p1Pontos = 0;
let p2Pontos = 0;
let condVitoria = 3;
let fimJogo = false;

p1B.addEventListener('click', function () {
    if (!fimJogo) {
        p1Pontos += 1;
        if (p1Pontos === condVitoria) {
            fimJogo = true;
            p1.classList.add('has-text-success');
            p2.classList.add('has-text-danger');
            p1B.disabled = true;
            p2B.disabled = true;
        }
        p1.textContent = p1Pontos;
    }
})

p2B.addEventListener('click', function () {
    if (!fimJogo) {
        p2Pontos += 1;
        if (p2Pontos === condVitoria) {
            fimJogo = true;
            p1.classList.add('has-text-danger');
            p2.classList.add('has-text-success');
            p1B.disabled = true;
            p2B.disabled = true;
        }
        p2.textContent = p2Pontos;
    }
})

pontos.addEventListener('change', function () {
    condVitoria = parseInt(this.value);
    reset();
})

resetB.addEventListener('click', reset)

function reset() {
    fimJogo = false;
    p1Pontos = 0;
    p2Pontos = 0;
    p1.textContent = p1Pontos;
    p2.textContent = p2Pontos;
    p1.classList.remove('has-text-success', 'has-text-danger');
    p2.classList.remove('has-text-success', 'has-text-danger');
    p1B.disabled = false;
    p2B.disabled = false;
}


