import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
const HomeScreen = () => {
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
							At Healing Waters, we offer a holistic healing program that <br />
							promotes the healing of your body, mind and spirit.
						</p>
						<Button className='button'>LEARN MORE</Button>
					</Col>
				</Row>
				<Row className='Row check '>
					<Col className='check1 col2' md={{ size: 8, offset: 4 }}></Col>
				</Row>
			</Container>
		</div>
	);
};
export default HomeScreen;
