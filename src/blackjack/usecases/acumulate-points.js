import { cardValue } from "./card-value";

/**
 * @param { String } card Ex: 'C'
 * @param { Number } turn Ex: 0 || 1
 * returns { Number } return a number to indicate who is the winner
*/
export const acumulatePoints = (card, turn, playersPoints, htmlPoints) => {
  playersPoints[turn] = playersPoints[turn] + cardValue(card);
  htmlPoints[turn].innerText = playersPoints[turn];
  return playersPoints[turn];
};