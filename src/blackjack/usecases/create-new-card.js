/**
 * @param { String } card Ex: 'C'
 * @param { Number } turn Ex: 0 || 1
*/
export const createCard = (card, turn, divCardPlayers) => {
  const newCardImage = document.createElement('img');
  newCardImage.src = `./assets/img/cartas/${card}.png`;
  newCardImage.alt = `${card} player card image`;
  newCardImage.classList.add('card');
  divCardPlayers[turn].append(newCardImage);
}