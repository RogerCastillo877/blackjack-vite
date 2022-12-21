/**
 * @param { Array<string> } deck Ex: ['C', 'D']
 * @returns { String } returns a last cards on deck
*/
export const requestCard = (deck) => {
  if (!deck || deck.length === 0) {
    throw new Error('Doesn\'t have more cards')
  };
  return deck.pop();
};