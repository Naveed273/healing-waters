import React from 'react';
import { Col, Container, Row } from 'reactstrap';

function Footer(props) {
	return (
		<div className='footer'>
			<Container fluid>
				<Row className=' footrow pt-4'>
					<Col
						xs={{ size: 8, offset: 2 }}
						sm={{ size: 5, offset: 1 }}
						md={{ size: 2, offset: 1 }}
						className=' col13a'
					>
						<img
							src='assets/images/logo.png'
							height='66'
							width='160'
							alt='Healing Waters'
						/>
						<p className='text12'>
							Lorem Ipsum is simply dummy text of Lorem Ipsum has been the
							industry's unknown printer took.
						</p>
					</Col>
					<Col
						xs={{ size: 4, offset: 2 }}
						sm={{ size: 5, offset: 1 }}
						md={{ size: 2, offset: 1 }}
						className=' col13b'
					>
						<h1 className='heading mb-4'>Useful Links</h1>
						<ul className='list-unstyled '>
							<li>
								<a href='#'>About Us</a>
							</li>
							<li>
								<a href='#'>Contact Us</a>
							</li>
							<li>
								<a href='#'>Services</a>
							</li>
							<li>
								<a href='#'>Photo Gallery</a>
							</li>
							<li>
								<a href='#'>Our Location</a>
							</li>
						</ul>
					</Col>
					<Col
						xs={{ size: 4, offset: 0 }}
						sm={{ size: 5, offset: 1 }}
						md={{ size: 2, offset: 0 }}
						className=' col13c'
					>
						<h1 className='heading mb-4'>Services</h1>
						<ul className='list-unstyled'>
							<li>
								<a href='#'>Weekend</a>
							</li>
							<li>
								<a href='#'>One Week</a>
							</li>
							<li>
								<a href='#'>Wellness & Spa</a>
							</li>
							<li>
								<a href='#'>Rooms</a>
							</li>
							<li>
								<a href='#'>Activities</a>
							</li>
						</ul>
					</Col>
					<Col
						xs={{ size: 8, offset: 2 }}
						sm={{ size: 5, offset: 1 }}
						//sm={{ size: , offset: 1 }}
						md={{ size: 4, offset: 0 }}
						className=' '
					>
						<h1 className='heading1 mb-4'>Instagram</h1>
						<Row className=' row13d1 pl-2 '>
							<Col
								xs='3'
								sm={{ size: 3 }}
								lg={{ size: 2 }}
								className=' col13d1 p-1 '
							>
								<img
									className=' img img-fluid'
									src='assets/tropical-relax-in-mauritius-PUR3S67.png'
									height='75'
									width='75'
									alt='lotus'
								/>
							</Col>
							<Col
								xs='3'
								sm={{ size: 3 }}
								lg={{ size: 2 }}
								className=' col13d1 p-1 '
							>
								<img
									className='  img img-fluid'
									src='assets/yoga-PHNNASZ.png'
									height='75'
									width='75'
									alt='lotus'
								/>
							</Col>
							<Col
								xs='3'
								sm={{ size: 3 }}
								lg={{ size: 2 }}
								className=' col13d1 p-1 '
							>
								<img
									className=' img img-fluid'
									src='assets/woman-enjoys-spa-in-geothermal-hot-spring-PJEKW7B.png'
									height='75'
									width='75'
									alt='lotus'
								/>
							</Col>
						</Row>
						<Row className=' pl-2'>
							<Col
								xs='3'
								sm={{ size: 3 }}
								lg={{ size: 2 }}
								className=' col13d1 p-1'
							>
								<img
									className=' img img-fluid'
									src='assets/interior-of-wooden-sauna-bath-JTAWVG9.png'
									height='75'
									width='75'
									alt='lotus'
								/>
							</Col>
							<Col
								xs='3'
								sm={{ size: 3 }}
								lg={{ size: 2 }}
								className=' col13d1 p-1'
							>
								<img
									className=' img img-fluid'
									src='assets/woman-enjoying-blue-lagoon-4YQXTEN.png'
									height='75'
									width='75'
									alt='lotus'
								/>
							</Col>
							<Col
								xs='3'
								sm={{ size: 3 }}
								lg={{ size: 2 }}
								className=' col13d1 p-1 '
							>
								<img
									className=' img img-fluid'
									src='assets/abstract-water-ripples-background-TCLT3RA.png'
									height='75'
									width='75'
									alt='lotus'
								/>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row className='top-row justify-content-center'>
					<Col xs='auto' className='top-text'>
						Healing Waters 2020 All Rights Reserved.
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Footer;
