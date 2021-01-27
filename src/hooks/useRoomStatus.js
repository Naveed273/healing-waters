import { useState } from 'react';
import backendApi from '../api/backendApi';

export default () => {
	const [roomStatus, setRoomStatus] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const roomStatusApi = async ({ pickedRoom, checkedIn, checkedOut }) => {
		try {
			const response = await backendApi.post(`/rooms/${pickedRoom}/status`, {
				check_in: checkedIn,
				check_out: checkedOut,
			});
			setRoomStatus(response.data.status);
		} catch (err) {
			setErrorMessage(err);
		}
	};

	return [roomStatus, roomStatusApi, errorMessage];
};
