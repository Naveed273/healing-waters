import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Card, Col, Container } from 'react-bootstrap';
import room_img from '../assets/room_img.png';
import Button from '@material-ui/core/Button';
import ServiceTransferList from './ServiceTransferList';
import useServices from '../hooks/useServices';
import usePrograms from '../hooks/usePrograms';
import useRoomsList from '../hooks/useRoomsList';

toast.configure();

const Stripe = (props) => {
	// console.log('stripeProps=>', props);
	const selectedRoomNumber = props.match.params.room;
	const selectedProgramType = `${props.match.params.nights} DAYS`;
	//console.log({ selectedProgramType, selectedRoomNumber });
	const [services] = useServices();
	const [programs] = usePrograms();
	const [rooms] = useRoomsList();
	// console.log('services=>', services);
	// console.log('programs=>', programs);

	const [room] = React.useState({
		number: '2',
		price: 20,
		beds: 2,
		capacity: 2,
	});

	//this callback ftn gets access to the token and addresses(billing and shipping address)
	// async function handleToken(token, addresses) {
	//     const response = await axios.post(
	//         'https://ry7v05l6on.sse.codesandbox.io/checkout',
	//         {token, room}
	//     );
	//     const {status} = response.data;
	//     console.log('Response:', response.data);
	//     //if we just want to show the status of payment.
	//     if (status === 'success') {
	//         //type means to make notification green.
	//         toast('Success! Check email for details', {type: 'success'});
	//     } else {
	//         toast('Something went wrong', {type: 'error'});
	//     }
	// }

	return (
		<Container>
			<Col className='flex-row align-items-center' lg={8}>
				<Card>
					<Card.Img variant={'top'} src={room_img} />
					<Card.Body>
						<Card.Title>
							<strong>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; All
								Services&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								{`${selectedProgramType} Program Services`}{' '}
							</strong>
						</Card.Title>
						<Card.Subtitle>
							<ServiceTransferList
								services={services}
								selectedProgramType={selectedProgramType}
							/>
							<div className='float-right'>
								Total Price: &nbsp;
								<Button variant={'outlined'} color={'secondary'}>
									$ 28
								</Button>
							</div>
						</Card.Subtitle>
					</Card.Body>
					<Card.Footer>
						<Button
							className='float-right'
							variant={'contained'}
							color={'primary'}
						>
							Pay Now
						</Button>
					</Card.Footer>
				</Card>
			</Col>
		</Container>
	);
};
export default Stripe;
