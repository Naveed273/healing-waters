import { useState } from 'react';
import backendApi from '../api/backendApi';
export default () => {
	const [paymentStatus, setPaymentStatus] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	//const show = true;
	const paymentApi = async ({
		programType,
		roomNumber,
		extraServices,
		totalAmount,
		billingDetails,
		stripeKey,
	}) => {
		//console.log('this roomstatus');
		try {
			const response = await backendApi.post(`/checkout`, {
				programType,
				roomNumber,
				extraServices,
				totalAmount,
				billingDetails,
				stripeKey,
			});
			console.log('This is payment api');
			//setPaymentStatus(response.data);

			console.log(response);
		} catch (err) {
			setErrorMessage(err);
			//console.log('myError', err);
		}
	};

	return [paymentStatus, paymentApi, errorMessage];
};
