import './styles.css';


let manos = ['I', 'D', 'J'];
let combinar = [];

const boton = document.querySelector('#restartButton');


let revolver = () => {

    let letra = '';

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 3; j++) {
            combinar.push(manos[j]);
        }
    }

    combinar = _.shuffle(combinar);

    for (let k = 1; k <= 25; k++) {
        letra = document.querySelector(`#cell${k}`);
        letra.innerText = combinar[k];
    }

    const letraD = document.querySelector(`#cell4`);
    letraD.innerText = 'I';

    const letraI = document.querySelector(`#cell9`);
    letraI.innerText = 'D';

    const letraJ = document.querySelector(`#cell10`);
    letraJ.innerText = 'J';

};

boton.addEventListener('click', () => {
    revolver();
});