import {useEffect, useState} from 'react';
import backendApi from '../api/backendApi';

export default () => {
    const [rooms, setRooms] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const searchApi = async () => {
        try {
            const response = await backendApi.get('/rooms');
            setRooms(response.data);
        } catch (err) {
            setErrorMessage(err);
            //	console.log('error', err);
        }
    };

    
    useEffect(() => {
        searchApi();
    }, []);

    return [rooms, searchApi, errorMessage];
};
