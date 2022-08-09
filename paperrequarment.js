const book1PageRequard = 100;
const book2PageRequard = 200;
const book3PageRequard = 300;
function paperRequarments(book1, book2, book3) {
    book1Total = book1 * book1PageRequard;
    book2Total = book2 * book2PageRequard;
    book3Total = book3 * book3PageRequard;

    let total = book1Total + book2Total + book3Total;
    return total;

}


const allbooks = paperRequarments(50, 10, 15);
console.log('Total Page:', allbooks);