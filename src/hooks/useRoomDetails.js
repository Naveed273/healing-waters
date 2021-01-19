import {  useState } from 'react';
import backendApi from '../api/backendApi';
export default () => {
	const [roomDatail, setRoomDetail] = useState(null);
	const [errorMessage, setErrorMessage] = useState('');
	const roomDetailApi = async (room) => {
		try {
			const response = await backendApi.get(`/rooms/${room}`);
			setRoomDetail(response.data);

			
			console.log(response);
		} catch (err) {
			setErrorMessage(err);
			console.log('error', err);
		}
	};

	
	return [roomDatail, roomDetailApi, errorMessage];
};
