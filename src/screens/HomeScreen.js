import React from 'react';
import {
	Container,
	Row,
	Col,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
} from 'reactstrap';
var DatePicker = require('reactstrap-date-picker');
class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			valueIn: new Date().toISOString(),
			valueOut: new Date().toISOString(),
		};
	}

	handleCheckInChange(value, formattedValue) {
		this.setState({
			valueIn: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
			formattedValue: formattedValue, // Formatted String, ex: "11/19/2016"
		});
	}
	handleCheckOutChange(value, formattedValue) {
		this.setState({
			valueOut: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
			formattedValue: formattedValue, // Formatted String, ex: "11/19/2016"
		});
	}

	render() {
		return (
			<div className='main-body'>
				<Container fluid>
					<Row className='align-items-end  '>
						<Col md={{ size: 6, offset: 1 }} className='col1'>
							<h1 className='text1'>Body, Mind & Spirit Detox.</h1>
							<img
								src='assets/images/sea@2x.png'
								height='9'
								width='90'
								alt='sea line'
							/>
							<p className='text2'>
								At Healing Waters, we offer a holistic healing program that{' '}
								<br />
								promotes the healing of your body, mind and spirit.
							</p>
							<Button className='button'>LEARN MORE</Button>
						</Col>
					</Row>
					<Row className=' align-items-end'>
						<Col className=' col2' md={{ size: 8, offset: 4 }}>
							<h1 className='availability'>Check Availability :</h1>
							<Form inline>
								<FormGroup>
									<Label for='pickRoom'>Pick room</Label>

									<Input
										type='text'
										name='text'
										id='pickRoom'
										placeholder='&#xf21d;   Pick a room'
										size={15}
									></Input>
								</FormGroup>

								<FormGroup>
									<Label for='checkIn'>Check In</Label>
									<DatePicker
										id='checkIn'
										value={this.state.valueIn}
										onChange={(v, f) => this.handleCheckInChange(v, f)}
									/>
								</FormGroup>
								<FormGroup>
									<Label for='checkOut'>Check Out</Label>
									<DatePicker
										id='checkOut'
										value={this.state.valueOut}
										onChange={(v, f) => this.handleCheckOutChange(v, f)}
										size={7}
									/>
								</FormGroup>
								<FormGroup>
									<Label for='nights'>Nights:</Label>
									<Input
										type='text'
										name='text'
										id='nights'
										size={15}
										placeholder='&#xf186; 7 Nights'
									/>
								</FormGroup>

								<Button className='button2'>CHECK NOW</Button>
							</Form>
						</Col>
					</Row>
					<Row className='Row'>
						<Col md='6' className=' col3'>
							<img
								className='img1'
								src='assets/images/Group 61.png'
								height='791'
								width='790'
								alt='group61'
							/>
						</Col>
						<Col md='6' className='check1'>
							<div className='div1'>
								<img
									src='assets/images/lotus@2x.png'
									height='46'
									width='52'
									alt='lotus'
								/>
								<p className='text3'>HEALING WATER PROGRAM</p>
								<h1 className='text4'>
									Your Place To Discover <br /> Wellness.
								</h1>
								<img
									src='assets/images/sea@2x.png'
									height='9'
									width='90'
									alt='sea line'
								/>
								<p className='text5'>
									Healing Waters therapy – removes toxins and revitalizes the
									body’s natural
									<br /> defense systems through a strict routine. Each day is
									designed to ensure
									<br /> that your body’s natural rhythm is restored. Whether
									you are a first-time or <br />
									returning guest, we encourage you to find the right balance
									between <br />
									scheduled activities and free-time.
								</p>
								<Button className='button'>VIEW PROGRAM</Button>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
export default HomeScreen;
