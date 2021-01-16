import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import AvailabilityForm from '../components/AvailabilityForm';
import GallerySlides from '../components/GalleryCarousel';
class HomeScreen extends React.Component {
	render() {
		return (
			<div>
				<Container fluid>
					<Row className='main-body'>
						<Col>
							<Row className='align-items-end  '>
								<Col md={{ size: 7, offset: 1 }} className='col1'>
									<h1 className='text1'>Body, Mind & Spirit Detox.</h1>
									<img
										className='img1 img-fluid '
										src='assets/images/sea.png'
										alt='sea line'
									/>
									<p className='text2'>
										At Healing Waters, we offer a holistic healing program that{' '}
										<br />
										promotes the healing of your body, mind and spirit.
									</p>
									<Button className='button buttonfont'>LEARN MORE</Button>
								</Col>
							</Row>
							<AvailabilityForm />
						</Col>
					</Row>

					<Row>
						<Col xs={{ size: 12 }} md={{ size: 6 }} className='col3 '>
							<img
								className='img1 img-fluid '
								src='assets/images/Group 61@2x.png'
								alt='group61'
								height='960'
								width='798'
							/>
						</Col>
						<Col
							xs={{ size: 6, offset: 1 }}
							md={{ size: 6, offset: 0 }}
							className=' col4 '
						>
							<img
								className='img img-fluid'
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
								className='img img-fluid'
								src='assets/images/sea.png'
								alt='sea line'
							/>
							<p className='text5'>
								Healing Waters therapy – removes toxins and revitalizes the
								body’s natural
								<br /> defense systems through a strict routine. Each day is
								designed to ensure
								<br /> that your body’s natural rhythm is restored. Whether you
								are a first-time or <br />
								returning guest, we encourage you to find the right balance
								between <br />
								scheduled activities and free-time.
							</p>
							<Button className='button buttonfont'>VIEW PROGRAM</Button>
						</Col>
					</Row>
					<Row>
						<Col className=' col5'>
							<img
								className='img2 img img-fluid'
								src='assets/images/AdobeStock_60250724.png'
								height='274'
								width='274'
								alt='sea line'
							/>
						</Col>
						<Col className=' col5'>
							<img
								className='img2 img img-fluid'
								src='assets/images/AdobeStock_109226931.png'
								height='274'
								width='274'
								alt='sea line'
							/>
						</Col>
						<Col className='col5'>
							<img
								className='img2 img img-fluid'
								src='assets/images/AdobeStock_111912359-scaled.png'
								height='274'
								width='274'
								alt='sea line'
							/>
						</Col>
						<Col className=' col5'>
							<img
								className='img2 img img-fluid'
								src='assets/images/AdobeStock_125775896.png'
								height='274'
								width='274'
								alt='sea line'
							/>
						</Col>

						<Col className='col5'>
							<img
								className='img2 img img-fluid'
								src='assets/images/AdobeStock_213488340-e1569852259141.png'
								height='274'
								width='274'
								alt='sea line'
							/>
						</Col>
						<Col className=' col5'>
							<img
								className='img2 img img-fluid'
								src='assets/images/AdobeStock_192148851.png'
								height='274'
								width='274'
								alt='sea line'
							/>
						</Col>
						<Col className='col5'>
							<img
								className='img2 img img-fluid'
								src='assets/images/AdobeStock_247634972.png'
								height='274'
								width='274'
								alt='sea line'
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={{ size: 8 }} sm='6' className='col6'>
							<img
								className='img img-fluid'
								src='assets/images/lotus@2x.png'
								height='46'
								width='52'
								alt='lotus'
							/>
							<p className='text3'>OUR SERVICES</p>
							<h1 className='text4'>Embracing Body And Mind.</h1>
							<img
								className='img img-fluid'
								src='assets/images/sea.png'
								alt='sea line'
							/>
							<p className='text5a'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse <br /> finibus velit eget consequat iaculis.
							</p>
							<Button className='button buttonfont'>VIEW SERVICES</Button>
						</Col>
						<Col xs={{ size: 12 }} sm='6' className=' col7  '>
							<Row>
								<Col xs={{ size: 4, offset: 1 }} className=' col7a '>
									<h1 className='text6'>Weekend Package</h1>
									<h2 className='text7'>
										Lorem ipsum dolor sit amet,
										<br /> consectetur adipiscing elit.
									</h2>
									<Button className='button3 buttonfont'>Learn more</Button>
								</Col>
								<Col xs={{ size: 4, offset: 1 }} className=' col7b '>
									<h1 className='text6'>Week Package</h1>
									<h2 className='text7'>
										Lorem ipsum dolor sit amet,
										<br /> consectetur adipiscing elit.
									</h2>
									<Button className='button3 buttonfont'>Learn more</Button>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row className='row3 '>
						<Col className='col8 '>
							<img
								className='img5 img img-fluid'
								src='assets/images/lotus@2x.png'
								height='46'
								width='52'
								alt='lotus'
							/>
							<p className='text3 text8'>
								OUR PROGRAM OFFERS DETOX ORGANIC FOOD.
							</p>
							<h1 className='text4 text9'>Enjoy The Taste Of Eating Right.</h1>
							<img
								className='img7 img img-fluid  '
								src='assets/images/sea.png'
								alt='sea line'
							/>
							<p className='text5 text10'>
								We do not use meat, dairy, salt and sugar in our dishes. Only
								organic vegetables and fruits with a variety of spices.
								<br />
								Nourishment depends on our nutritionist’s appointment . We can
								discuss this before your arrival at our center.
							</p>
							<img
								className='img6 img img-fluid'
								src='assets/images/AdobeStock_310158702-2048x621-removebg-preview.png'
								width='100%'
								alt='sea line'
							/>
							<Button className='button  button4 buttonfont'>LEARN MORE</Button>
						</Col>
					</Row>
					<Row className='row4 '>
						<Col className='col9 '>
							<img
								className='img8 img img-fluid'
								src='assets/images/lotus1@2x.png'
								height='46'
								width='52'
								alt='lotus'
							/>
							<h1 className='text11'>
								Ultimate Relaxation
								<br /> For Your Body & Soul.
							</h1>
							<Button className='button3  button5  buttonfont'>BOOK NOW</Button>
						</Col>
					</Row>
					<Row className='row5 '>
						<Col xs={{ size: 4, offset: 2 }} className='col10a '>
							<p className='text3'>GALLERY</p>
							<h1 className='text4'>Your Happy Place.</h1>
						</Col>
						<Col xs={{ size: 4, offset: 2 }} className='col10b '>
							<Button className='button buttonfont '>VIEW ALL</Button>
						</Col>
					</Row>
					<GallerySlides />
				</Container>
			</div>
		);
	}
}
export default HomeScreen;
