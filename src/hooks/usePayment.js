import {useState} from 'react';
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
                                  paymentMethodId
                              }) => {
        try {

            console.log({
                programType,
                roomNumber,
                extraServices,
                totalAmount,
                billingDetails,
                stripeKey,
                paymentMethodId,
            })
            totalAmount = parseInt(totalAmount)
            roomNumber = parseInt(roomNumber)
            const response = await backendApi.get(`/secret/`, {
                programType,
                roomNumber,
                extraServices,
                totalAmount,
                billingDetails,
                stripeKey,
                paymentMethodId,
            });
            console.log("response data from Payment API", response)
        } catch (err) {
            setErrorMessage(err);
        }
    };

    return [paymentStatus, paymentApi, errorMessage];
};
