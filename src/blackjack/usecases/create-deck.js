import _ from 'underscore';

/**
 * @param { Array<string> } cardTypes Ex: ['C', 'D']
 * @param { Array<string> } specialTypes Ex: ['A', 'J']
 * @returns { Array } returns a new deck of cards
*/

export const createDeck = (cardTypes, specialTypes) => {

  if (!cardTypes || !cardTypes.length > 0) throw new Error('cardTypes is required and must be an array of strings');
  if (!specialTypes || !specialTypes.length > 0) throw new Error('specialTypes is required and must be an array of strings');
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