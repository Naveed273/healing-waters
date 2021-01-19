import { useState } from 'react';
import backendApi from '../api/backendApi';
export default () => {
	const [roomStatus, setRoomStatus] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const show = true;
	const roomStatusApi = async ({
		pickedRoom,
		checkedIn,
		checkedOut,
		nights,
		
	}) => {
		console.log('this roomstatus');
		try {
			const response = await backendApi.post(`/rooms/${pickedRoom}/status`, {
				// pickedRoom,
				check_in: checkedIn,
				check_out: checkedOut,
				// nights,

			});
			console.log('This is roomstatusapi');
			setRoomStatus(response.data.status);
			

			console.log(response);
		} catch (err) {
			setErrorMessage(err);
			console.log('myError', err);
		}
	};

	return [roomStatus, roomStatusApi, errorMessage];
};
