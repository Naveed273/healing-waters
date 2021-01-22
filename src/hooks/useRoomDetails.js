import {useState} from 'react';
import backendApi from '../api/backendApi';

export default () => {
    const [roomDetail, setRoomDetail] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const roomDetailApi = async (room) => {
        try {
            const response = await backendApi.get(`/rooms/${room}`);
            setRoomDetail(response.data);
        } catch (err) {
            setErrorMessage(err);
        }
    };
    return [roomDetail, roomDetailApi, errorMessage];
};
