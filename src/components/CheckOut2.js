import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

//to make toast function to be workable
toast.configure();
const CheckOut = (props) => {
    console.log(props.location);
	const [room] = React.useState({
		number: '2',
		price: 20,
		beds: 2,
		capacity: 2,
	});
	//this callback ftn gets access to the token and addresses(billing and shipping address)
	async function handleToken(token, addresses) {
		const response = await axios.post(
			'https://ry7v05l6on.sse.codesandbox.io/checkout',
			{ token, room }
		);
		const { status } = response.data;
		console.log('Response:', response.data);
		//if we just want to show the status of payment.
		if (status === 'success') {
			//type means to make notification green.
			toast('Success! Check email for details', { type: 'success' });
		} else {
			toast('Something went wrong', { type: 'error' });
		}
		// console.log(token)
	}

	return (
		<div className='container'>
			<div className='product'>
				<h1>Room is {room.number}</h1>
				<h3>Reserve ${room.price}</h3>
			</div>
			<StripeCheckout
				//publish key
				stripeKey='pk_test_51FJW6JEjkdsuq2ybrjKRjxRrl9iBW0LB67BhJuWA5TY1JxEZwncXTocqEhFsp9GHNf5jQ0pxvBRlgqXUTrNRLLZA00vFJyXvof'
				//token accepts a callback ftn.this callback ftn is going to get access to the created token that stripe checkout creates when the user supplies email, address and card info.
				token={handleToken}
				//it accepts only the basic unit of currency(for dollar it is cent,form  pkr it is paisa)
				amount={room.price * 100}
				//it will change the currency type.
				currency='USD'
				name='room no 2'
				description='beautiful room'
				billingAddress
				shippingAddress
			/>
		</div>
	);
};
export default CheckOut;
