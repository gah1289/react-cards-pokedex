import React, { useState } from 'react';
import axios from 'axios';

const useGetNewDeck = () => {
	const [
		deckId,
		setDeckId
	] = useState(null);

	const [
		numCards,
		setNumCards
	] = useState(null);

	const newDeck = () =>
		axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(function(res) {
			setNumCards(res.data.remaining);
			setDeckId(res.data.deck_id);
		});

	window.addEventListener('load', (e) => newDeck());

	return [
		deckId,
		numCards
	];
};

export default useGetNewDeck;
