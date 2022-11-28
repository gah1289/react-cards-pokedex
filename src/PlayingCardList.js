import React, { useState } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import PlayingCard from './PlayingCard';
import './PlayingCardList.css';
import useAxios from './hooks/useAxios';
import useGetNewDeck from './hooks/useCardDeckShuffle';

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
	const [
		deckId,
		numCards
	] = useGetNewDeck();

	const baseUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/`;

	const [
		cards,
		addCard
	] = useAxios(baseUrl);

	const endOfDeck = (cardsInDeck) => {
		// check if all the cards have been pulled from the deck
		return cardsInDeck === cards.length ? true : false;
	};

	return (
		<div className="PlayingCardList">
			<h3>Pick a card, any card!</h3>
			<div>
				{/* If there are no more cards in the deck, remove the option to pull cards */}
				{endOfDeck(numCards) ? (
					<div>No More Cards!</div>
				) : (
					<button onClick={() => addCard()}>Add a playing card!</button>
				)}
			</div>

			<div className="PlayingCardList-card-area">
				{cards.map((cardData) => <PlayingCard key={cardData.id} front={cardData.cards[0].image} />)}
			</div>
		</div>
	);
}

CardTable.defaultProps = {};

export default CardTable;
