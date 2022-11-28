import { useState } from 'react';

const useFlip = () => {
	// Holds the business logic for flipping any type of card.
	const [
		isFacingUp,
		setIsFacingUp
	] = useState(true);
	const flipCard = () => {
		setIsFacingUp((isUp) => !isUp);
	};

	// Should return an array with two elements. The first element is the current flip state of the card, and the second element is a function that will toggle the flip state.
	return [
		isFacingUp,
		flipCard
	];
};

export default useFlip;
