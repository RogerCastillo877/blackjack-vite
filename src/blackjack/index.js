import { cardValue } from "./usecases/card-value";
import { createDeck } from "./usecases/create-deck";
import { requestCard } from "./usecases/request-card";

const myModule = (() => {
  'use strict'

  let deck = [];
  const types = ['C', 'D', 'H', 'S'];
  const specials = ['A', 'J', 'Q', 'K'];

  let playersPoints = [];

  const btnRequest = document.querySelector('#btnRequest');
  const btnNew = document.querySelector('#btnNew');
  const btnStop = document.querySelector('#btnStop');

  const divCardPlayers = document.querySelectorAll('.divCards');
  const htmlPoints = document.querySelectorAll('small');

  const initDeck = (numberOfPlayers = 1) => {
    deck = createDeck(types, specials);
    playersPoints = [];
    for (let i = 0; i <= numberOfPlayers; i++) {
      playersPoints.push(0);
    }
    htmlPoints.forEach((elem) => elem.innerText = 0);
    divCardPlayers.forEach((elem) => elem.innerHTML = '');

    btnRequest.disabled = false;
    btnStop.disabled = false;
  };

  const acumulatePoints = (card, turn) => {
    playersPoints[turn] = playersPoints[turn] + cardValue(card);
    htmlPoints[turn].innerText = playersPoints[turn];
    return playersPoints[turn];
  };

  const createCard = (card, turn) => {

    const newCardImage = document.createElement('img');
    newCardImage.src = `./assets/img/cartas/${card}.png`;
    newCardImage.alt = `${card} player card image`;
    newCardImage.classList.add('card');
    divCardPlayers[turn].append(newCardImage);
  }

  const determinateWinner = () => {
    const [minimumPoints, pcPoints] = playersPoints;
    setTimeout(() => {
      if (minimumPoints === 21 && pcPoints !== 21) return alert('Player Gana');
      (pcPoints === minimumPoints) && alert('Pc Gana');
      (minimumPoints > 21) && alert('Pc Gana');
      if (pcPoints > 21) { return alert('Player Gana') };
      (minimumPoints > pcPoints && minimumPoints <= 21) ? alert('Player Gana') : alert('Pc Gana');
    }, 100);
  }

  const pcTurn = (minimumPoints) => {
    let pcPoints = 0;
    do {
      const card = requestCard(deck);
      pcPoints = acumulatePoints(card, playersPoints.length - 1);
      createCard(card, playersPoints.length - 1)

    } while ((pcPoints <= minimumPoints) && (minimumPoints <= 21));

    determinateWinner();
  }

  btnRequest.addEventListener('click', () => {
    const card = requestCard(deck);
    const playerPoints = acumulatePoints(card, 0)
    createCard(card, 0);

    if (playerPoints >= 21) {
      console.warn('Lo siento, perdiste :(');
      alert('Lo siento, perdiste :(');
      btnRequest.disabled = true;
      btnStop.disabled = true;
      pcTurn(playerPoints);
    } else if (playerPoints === 21) {
      console.warn('21, ¡genial!')
      btnRequest.disabled = true;
      btnStop.disabled = true;
      pcTurn(playerPoints);
    }
  });

  btnStop.addEventListener('click', (turn) => {
    btnRequest.disabled = true;
    btnStop.disabled = true;
    pcTurn(playersPoints[0]);
  });

  btnNew.addEventListener('click', () => {

    initDeck();
  })
  return {
    nuevoJuego: initDeck
  };
})()

