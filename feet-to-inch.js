function feetToInche(feet) {
    const inche = feet * 12;
    return inche;
}
const someoneFeet = 14;
const someoneInche = feetToInche(someoneFeet);
console.log('someones hight in inches:', someoneInche);