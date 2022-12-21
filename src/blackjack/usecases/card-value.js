/**
 * @param { String } card Ex: 'C'
 * @returns { Number } returns a value of selected card
*/
export const cardValue = (card) => {
  const value = card.substring(0, card.length - 1);

  return (isNaN(value)) ?
    (value === 'A') ? 11 : 10
    : value * 1;
};