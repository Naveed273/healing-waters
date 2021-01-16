import React, { useState } from 'react';
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
import ModalExample from './Modal';
var DatePicker = require('reactstrap-date-picker');

const AvailabilityForm = (props) => {
	const { buttonLabel, className } = props;
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);
	const initial_state = new Date().toISOString();
	const [pickedRoom, setPickedRoom] = useState('');
	const [checkedIn, setCheckedIn] = useState(initial_state);
	const [checkedOut, setCheckedOut] = useState(initial_state);
	const [nights, setNights] = useState('');
	const [formattedValue1, setFormatedValue1] = useState('');
	const [formattedValue2, setFormatedValue2] = useState('');
	//console.log({ pickedRoom, checkedIn, checkedOut, nights, formattedValue1,formattedValue2 });
	return (
		<Row className=' align-items-end'>
			<Col xs={{ size: 3 }}></Col>
			<Col className=' col2 ' xs={{ size: 9 }}>
				<h1 className='availability'>Check Availability :</h1>
				<Form inline>
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
									onClick={toggle}
								></Input>
							</FormGroup>
							<Modal isOpen={modal} toggle={toggle} className={className}>
								<ModalHeader toggle={toggle}>All Rooms</ModalHeader>
								<ModalBody>
									<p>all</p>
								</ModalBody>
								<ModalFooter>
									<Button color='primary' onClick={toggle}>
										Do Something
									</Button>{' '}
									<Button color='secondary' onClick={toggle}>
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
							<Button className='button2 buttonfont'>CHECK NOW</Button>
						</Col>
					</Row>
				</Form>
			</Col>
		</Row>
	);
};
export default AvailabilityForm;
