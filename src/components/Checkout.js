import React, { useEffect, useState } from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Checkout.css';
import backendApi from '../api/backendApi';

import room_img from '../assets/room_img.png';

const stripePromise = loadStripe(
	'pk_test_51FJW6JEjkdsuq2ybrjKRjxRrl9iBW0LB67BhJuWA5TY1JxEZwncXTocqEhFsp9GHNf5jQ0pxvBRlgqXUTrNRLLZA00vFJyXvof'
);
const ProductDisplay = ({ handleClick, location }) => (
	<section className='section__ProductDisplay'>
		<div className='product__ProductDisplay'>
			<img src={room_img} alt='The cover of Stubborn Attachments' />
			<div className='description'>
				{location.state !== undefined ? (
					<div>
						<h1>&#36;&nbsp;{location.state.totalAmount}</h1>
						<p>
							{location.state.programType} Program
							<small className='text-muted'>
								<sup>&nbsp;*</sup>
							</small>
						</p>
						<small className='text-muted'>
							<sup>*&nbsp;</sup>Total amount includes default and extra
							services.
						</small>
					</div>
				) : null}
			</div>
		</div>
		<button
			type='button'
			id='checkout-button'
			role='link'
			onClick={handleClick}
		>
			Checkout
		</button>
	</section>
);

const Message = ({ message }) => (
	<section className='section__Message'>
		<p>{message}</p>
	</section>
);

export default function Checkout(props) {
	let programType = '';
	let roomNumber = '';
	let extraServices = [];
	let totalAmount = '';
	if (props.location.state !== undefined) {
		programType = props.location.state.programType;
		roomNumber = props.location.state.roomNumber;
		extraServices = props.location.state.extraServices;
		totalAmount = props.location.state.totalAmount;
	}

	const [message, setMessage] = useState('');
	useEffect(() => {
		const query = new URLSearchParams(window.location.search);

		if (query.get('success')) {
			toast('Success! Check email for details', { type: 'success' });
		}

		if (query.get('canceled')) {
			toast(
				'Order canceled -- continue to shop around and checkout when you are ready.',
				{ type: 'error' }
			);
		}
	}, []);

	const handleClick = async (event) => {
		const stripe = await stripePromise;

		const response = await backendApi.post('/create-checkout-session/', {
			programType,
			extraServices,
			roomNumber,
			totalAmount,
		});

		const session = await response.data;

		

		const result = await stripe.redirectToCheckout({
			sessionId: session.id,
		});

		
	};

	return message ? (
		<Message message={message} />
	) : (
		<ProductDisplay handleClick={handleClick} location={props.location} />
	);
}
