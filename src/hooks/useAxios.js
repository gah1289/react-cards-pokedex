import { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuid';

const useAxios = (baseUrl) => {
	const [
		response,
		setResponse
	] = useState([]);

	const fetchData = () => {
		console.log(baseUrl);
		axios.get(baseUrl).then(function(resData) {
			let data = { ...resData.data, id: uuid() };
			console.log('data', data);
			setResponse((response) => [
				...response,
				data
			]);
		});
	};

	useEffect(() => {
		function getData() {
			fetchData();
		}
	}, []);

	// should return an array with two elements. The first element is an array of data obtained from previous AJAX requests (since we will add to this array, it’s a piece of state). The second element is a function that will add a new object of data to our array

	return [
		response,
		fetchData
	];
};

export default useAxios;
