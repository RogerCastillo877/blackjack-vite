import _ from 'underscore';

export const createDeck = (cardTypes, specialTypes) => {

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (const type of cardTypes) {
      deck.push(i + type)
    }
  }
  for (const type of cardTypes) {
    for (const special of specialTypes) {
      deck.push(special + type)
    }
  }
  return _.shuffle(deck);
};