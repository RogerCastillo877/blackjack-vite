import { cardValue, createDeck, requestCard, createCard, acumulatePoints, pcTurn, determinateWinner } from "./usecases";

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

  btnRequest.addEventListener('click', () => {
    const card = requestCard(deck);
    const playerPoints = acumulatePoints(card, 0, playersPoints, htmlPoints)
    createCard(card, 0, divCardPlayers);

    if (playerPoints >= 21) {
      console.warn('Lo siento, perdiste :(');
      alert('Lo siento, perdiste :(');
      btnRequest.disabled = true;
      btnStop.disabled = true;
      pcTurn(playerPoints, deck, playersPoints, htmlPoints, divCardPlayers);
    } else if (playerPoints === 21) {
      console.warn('21, ¡genial!')
      btnRequest.disabled = true;
      btnStop.disabled = true;
      pcTurn(playerPoints, deck, playersPoints, htmlPoints, divCardPlayers);
    }
  });

  btnStop.addEventListener('click', (turn) => {
    btnRequest.disabled = true;
    btnStop.disabled = true;
    pcTurn(playersPoints[0], deck, playersPoints, htmlPoints, divCardPlayers);
  });

  btnNew.addEventListener('click', () => {

    initDeck();
  })
  return {
    nuevoJuego: initDeck
  };
})()

