import { useState, useEffect } from 'react';
import backendApi from '../api/backendApi';
export default () => {
	const [services, setServices] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const servicesApi = async () => {
		try {
			console.log('this is program api');
			const response = await backendApi.get('/services');
			setServices(response.data);
			console.log(response);
		} catch (err) {
			setErrorMessage(err);
			console.log('error', err);
		}
	};

	//we want to run the arrow ftn only when the component is rendered for the first time.
	useEffect(() => {
		servicesApi();
	}, []);

	return [services, servicesApi, errorMessage];
};
