import { useState, useEffect } from 'react';
import backendApi from '../api/backendApi';
export default () => {
	const [services, setServices] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const servicesApi = async () => {
		try {
			const response = await backendApi.get('/services');
			setServices(response.data);
		} catch (err) {
			setErrorMessage(err);
		}
	};

	//we want to run the arrow ftn only when the component is rendered for the first time.
	useEffect(() => {
		servicesApi();
	}, []);

	return [services, servicesApi, errorMessage];
};
