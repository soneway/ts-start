function buildName1 (firstName: string, lastName?: string) {

}

function buildName2 (firstName: string, lastName = 'hehe') {

}

function buildName3 (firstName = 'song', lastName: string) {

}

function buildName4 (firstName: string, ...restName: string[]) {

}

const deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function () {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
