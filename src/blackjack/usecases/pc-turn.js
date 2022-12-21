import { acumulatePoints } from "./acumulate-points";
import { createCard } from "./create-new-card";
import { determinateWinner } from "./determinate-winner";
import { requestCard } from "./request-card";

/**
 * @param { Number } minimumPoints wich pc needs to win
 * @param { HTMLElement } htmlPoints
 * @param { Array<String> } deck 
*/
export const pcTurn = (minimumPoints, deck, playersPoints, htmlPoints, divCardPlayers) => {

  if (!minimumPoints) throw new Error('minimumPoints are required');

  let pcPoints = 0;
  do {
    const card = requestCard(deck);
    pcPoints = acumulatePoints(card, playersPoints.length - 1, playersPoints, htmlPoints);
    createCard(card, playersPoints.length - 1, divCardPlayers)

  } while ((pcPoints <= minimumPoints) && (minimumPoints <= 21));

  determinateWinner(playersPoints);
}