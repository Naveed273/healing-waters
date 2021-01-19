import React, { useState, useEffect } from 'react';
import useRoomsList from '../hooks/useRoomsList';
import useRoomDetails from '../hooks/useRoomDetails';
import useRoomStatus from '../hooks/useRoomStatus';
import TextField from '@material-ui/core/TextField';
import { Accordion, Card, Alert } from 'react-bootstrap';

import {
	Row,
	Col,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from 'reactstrap';
import Stripe from './StripeApi';
var DatePicker = require('reactstrap-date-picker');

const AvailabilityForm = (props) => {
	const { className } = props;
	const [modal1, setModal1] = useState(false);
	const [modal2, setModal2] = useState(false);
	const [modal3, setModal3] = useState(false);
	const[modal4, setModal4] = useState(false);
	const toggle1 = () => setModal1(!modal1);
	const toggle2 = () => setModal2(!modal2);
	const toggle3 = () => setModal3(!modal3);
	const toggle4 = () => setModal4(!modal4);
	const initial_state = new Date().toISOString();
	const [pickedRoom, setPickedRoom] = useState('');
	const [checkedIn, setCheckedIn] = useState(initial_state);
	const [checkedOut, setCheckedOut] = useState(initial_state);
	const [nights, setNights] = useState('');
	const [formattedValue1, setFormatedValue1] = useState('');
	const [formattedValue2, setFormatedValue2] = useState('');
	const [rooms, searchApi, errorMessage1] = useRoomsList();
	const [roomDatail, roomDetailApi, errorMessage2] = useRoomDetails();
	const [roomStatus, roomStatusApi, errorMessage3] = useRoomStatus();

	//console.log({ pickedRoom, checkedIn, checkedOut, nights, formattedValue1,formattedValue2 });
	//console.log({ rooms, errorMessage1 });
	function ServicesPrograms() {
		return (
			<Accordion defaultActiveKey='0'>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant='link' eventKey='0'>
							2 days Program
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey='0'>
						<Card.Body>
							<ul>
								<li>infrared sauna</li>
								<li>colonic</li>
								<li> massages</li>
							</ul>
							<Button
								color='primary'
								onClick={() => {
									setNights(2);
									toggle3();
								}}
							>
								Select the Program
							</Button>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header>
						<Accordion.Toggle as={Button} variant='link' eventKey='1'>
							7 days Program
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey='1'>
						<Card.Body>
							<ul>
								<li>infrared sauna</li>
								<li>colonic</li>
								<li> massages</li>
								<li>
									{' '}
									<TextField
										id='outlined-multiline-static'
										label='Extra services'
										multiline
										rows={5}
										defaultValue='Add extra services here'
										variant='outlined'
									/>
								</li>
							</ul>
							<Button
								color='primary'
								onClick={() => {
									setNights(7);
									toggle3();
								}}
							>
								Select the Program
							</Button>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		);
	}

	function Room({ number, beds, capacity }) {
		return (
			<Accordion>
				<Card>
					<Card.Header>
						<Accordion.Toggle
							as={Button}
							variant='link'
							eventKey={number}
							className='carot'
						>
							{`Room ${number}`}
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey={number}>
						<Card.Body>
							<h6>{`beds are ${beds}`}</h6>
							<h6>{`capacity is ${capacity}`}</h6>
							<Button
								color='primary'
								onClick={() => {
									setPickedRoom(number);
								}}
							>
								Pick room
							</Button>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		);
	}

	function RoomsList(rooms) {
		return (
			<ul>
				{rooms.map((room) => {
					return (
						<Room
							key={room.id}
							number={room.number}
							capacity={room.capacity}
							beds={room.beds}
						/>
					);
				})}
			</ul>
		);
	}
	const SubmitHandler = (evt) => {
		evt.preventDefault();
		roomStatusApi({
			pickedRoom: pickedRoom,
			checkedIn: checkedIn,
			checkedOut: checkedOut,
			nights: nights,
		});
		toggle2();
	};
	return (
		<Row className=' align-items-end'>
			<Col xs={{ size: 3 }}></Col>
			<Col className=' col2 ' xs={{ size: 9 }}>
				<h1 className='availability'>Check Availability :</h1>
				<Form onSubmit={SubmitHandler} inline>
					<Row>
						<Col xs='10' sm='3' md='4' lg='3 ' xl='2'>
							<FormGroup>
								<Label for='pickRoom'>Pick room</Label>

								<Input
									type='text'
									name='text'
									id='pickRoom'
									placeholder='&#xf21d;   Pick a room'
									size={13}
									value={pickedRoom}
									onChange={(e) => setPickedRoom(e.target.value)}
									onClick={() => {
										searchApi();
										toggle1();
									}}
								></Input>
							</FormGroup>
							<Modal isOpen={modal1} toggle={toggle1} className={className}>
								<ModalHeader toggle={toggle1}>All Rooms</ModalHeader>
								<ModalBody>{RoomsList(rooms)}</ModalBody>
								<ModalFooter>
									<Button
										color='danger'
										onClick={() => {
											toggle1();
										}}
									>
										Cancel
									</Button>
								</ModalFooter>
							</Modal>
							<Modal isOpen={modal2} toggle={toggle2} className={className}>
								<ModalHeader toggle={toggle2}>Room Status</ModalHeader>
								{roomStatus === 'available' ? (
									<ModalBody>
										Room is available.Do you want to reserve it?
										<Button
											color='primary'
											onClick={() => {
												toggle4();
												toggle2();
											}}
										>
											Click Here!
										</Button>
									</ModalBody>
								) : (
									<ModalBody>
										'Sorry!this room will not be avaiable for your specified
										time, please pick another room'{' '}
									</ModalBody>
								)}
								<ModalFooter>
									<Button
										color='danger'
										onClick={() => {
											toggle2();
										}}
									>
										Cancel
									</Button>
								</ModalFooter>
							</Modal>
							<Modal isOpen={modal3} toggle={toggle3} className={className}>
								<ModalHeader toggle={toggle3}>
									Our two services programs
								</ModalHeader>
								<ModalBody>{ServicesPrograms()}</ModalBody>
								<ModalFooter>
									<Button
										color='danger'
										onClick={() => {
											toggle3();
										}}
									>
										Cancel
									</Button>
								</ModalFooter>
							</Modal>
							
						</Col>
						<Col
							xs='10'
							sm={{ size: 5, offset: 3 }}
							md='5'
							lg={{ size: 4, offset: 3 }}
							xl={{ size: 3, offset: 0 }}
						>
							<FormGroup>
								<Label for='checkIn'>Check In</Label>
								<DatePicker
									id='checkIn'
									value={checkedIn}
									onChange={(v, f) => {
										setCheckedIn(v);
										setFormatedValue1(f);
									}}
								/>
							</FormGroup>
						</Col>
						<Col xs='10' sm='5' md='5' lg='4' xl='3'>
							<FormGroup>
								<Label for='checkOut'>Check Out</Label>
								<DatePicker
									id='checkOut'
									value={checkedOut}
									onChange={(v, f) => {
										setCheckedOut(v);
										setFormatedValue2(f);
									}}
								/>
							</FormGroup>
						</Col>
						<Col
							xs='10'
							sm={{ size: 3, offset: 1 }}
							md={{ size: 3, offset: 2 }}
							lg={{ size: 3, offset: 2 }}
							xl={{ size: 2, offset: 0 }}
						>
							<FormGroup>
								<Label for='nights'>Nights:</Label>
								<Input
									type='text'
									name='text'
									id='nights'
									size={13}
									value={nights}
									onChange={(e) => setNights(e.target.value)}
									placeholder='&#xf186; 7 Nights'
									onClick={() => toggle3()}
								/>
							</FormGroup>
						</Col>
						<Col
							xs={{ size: 6, offset: 3 }}
							sm={{ size: 6, offset: 4 }}
							md={{ size: 4, offset: 4 }}
							lg={{ size: 6, offset: 4 }}
							xl={{ size: 2, offset: 0 }}
						>
							<Button
								type='submit'
								value='CHECK NOW'
								className='button2 buttonfont '
							>
								CHECK NOW
							</Button>
						</Col>
					</Row>
				</Form>
			</Col>
		</Row>
	);
};
export default AvailabilityForm;
