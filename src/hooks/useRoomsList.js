
import {  useState } from 'react';
import backendApi from '../api/backendApi';
export default () => {
	const [rooms, setRooms] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const searchApi = async () => {
		try {
			const response = await backendApi.get('/rooms');
			setRooms(response.data);

			
			// console.log(response);
		} catch (err) {
			setErrorMessage(err);
			console.log('error', err);
		}
	};

	//we want to run the arrow ftn only when the component is rendered for the first time.
	// useEffect(() => {
	// 	searchApi();
	// }, []);

	return [rooms, searchApi, errorMessage];
};
