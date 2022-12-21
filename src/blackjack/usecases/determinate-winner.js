/**
 * @param { Array<number> } playerPoints Ex: [ 2, 8]
*/
export const determinateWinner = (playersPoints) => {
  const [minimumPoints, pcPoints] = playersPoints;
  setTimeout(() => {
    if (minimumPoints === 21 && pcPoints !== 21) return alert('Player Gana');
    (pcPoints === minimumPoints) && alert('Pc Gana');
    (minimumPoints > 21) && alert('Pc Gana');
    if (pcPoints > 21) { return alert('Player Gana') };
    (minimumPoints > pcPoints && minimumPoints <= 21) ? alert('Player Gana') : alert('Pc Gana');
  }, 100);
}