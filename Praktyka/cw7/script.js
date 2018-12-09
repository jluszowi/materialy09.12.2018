function prostaFunkcja () {
    console.log('Wywołanie funkcji');

}

prostaFunkcja();

function prostaFunkcja2(param1, param2) {
    console.log('Wywołanie funkcji dla parametrów: ' + param1 + ' ' + param2);
}
prostaFunkcja2('jeden', 'dwa');

function sum(liczbaPierwsza, liczbaDruga) {
    return liczbaPierwsza + liczbaDruga;

}

console.log('wynik sumowania ' + sum(1, 3));



