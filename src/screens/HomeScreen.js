import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import AvailabilityForm from '../components/AvailabilityForm';
import Footer from '../components/Footer';
import GallerySlides from '../components/GalleryCarousel';
import Header from '../components/Header';
class HomeScreen extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Container fluid>
					<Row className='main-body'>
						<Col className='pt-4'>
							<Row className='align-items-end pt-5 '>
								<Col md={{ size: 7, offset: 1 }} className='mt-5'>
								
									<h1 className='text1 mt-5'>Body, Mind & Spirit Detox.</h1>
									<img
										className='img1 img-fluid '
										src='assets/images/sea.png'
										alt='sea line'
									/>
									<p className='text2 mb-5'>
										At Healing Waters, we offer a holistic healing program that{' '}
										
										promotes the healing of your body, mind and spirit.
									</p>
									<Button className='button buttonfont'>LEARN MORE</Button>
								</Col>
							</Row>
							<AvailabilityForm />
						</Col>
					</Row>
				</Container>
				<Container fluid>
					<Row>
						<Col xs={{ size: 12 }} xl={{ size: 6 }} className='col3 '>
							<img
								className='img1 img-fluid '
								src='assets/images/Group 61@2x.png'
								alt='group61'
								// height='960'
								// width='798'
							/>
						</Col>
						<Col className='col4  pl-5 pt-5'>
							<img
								className='img img-fluid ml-5 mt-5 mb-2'
								src='assets/images/lotus@2x.png'
								height='46'
								width='52'
								alt='lotus'
							/>
							<p className='text3 mb-4'>HEALING WATER PROGRAM</p>
							<h1 className='text4'>Your Place To Discover Wellness.</h1>
							<img
								className='img img-fluid  mb-4'
								src='assets/images/sea.png'
								alt='sea line'
							/>
							<p className='text5  mt-3 mb-5'>
								Healing Waters therapy – removes toxins and revitalizes the
								body’s natural defense systems through a strict routine. Each
								day is designed to ensure that your body’s natural rhythm is
								restored. Whether you are a first-time or returning guest, we
								encourage you to find the right balance between scheduled
								activities and free-time.
							</p>
							<Button className='button buttonfont my-5'>VIEW PROGRAM</Button>
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
						<Col xs={{ size: 10 }} lg='6' className='pl-5 pt-5'>
							<img
								className='img img-fluid ml-3 mt-2'
								src='assets/images/lotus@2x.png'
								height='46'
								width='52'
								alt='lotus'
							/>
							<p className='text3 mt-2'>OUR SERVICES</p>
							<h1 className='text4'>Embracing Body And Mind.</h1>
							<img
								className='img img-fluid'
								src='assets/images/sea.png'
								alt='sea line'
							/>
							<p className='text5a'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse finibus velit eget consequat iaculis.
							</p>
							<Button className='button buttonfont my-4'>VIEW SERVICES</Button>
						</Col>
						<Col xs={{ size: 12 }} xl='6' className=' col7 py-4 '>
							<Row>
								<Col
									xs={{ size: 8, offset: 2 }}
									sm={{ size: 4, offset: 1 }}
									className=' col7a  pt-5   mb-2'
								>
									<div class='d-flex justify-content-center align-items-center text-center'>
										<h1 className='text6 mt-5 mb-4  '>Weekend Package</h1>
									</div>
									<div class='d-flex justify-content-center align-items-center text-center'>
										<h2 className='text7    '>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</h2>
									</div>

									<div class='d-flex justify-content-center align-items-center'>
										<Button className='button3 buttonfont '>Learn more</Button>
									</div>
								</Col>
								<Col
									xs={{ size: 8, offset: 2 }}
									sm={{ size: 4, offset: 1 }}
									className=' col7b mt-2  pt-5  pl-4  '
								>
									<div class='d-flex justify-content-center align-items-center text-center'>
										<h1 className='text6 mt-5 mb-4  '>Week Package</h1>
									</div>
									<div class='d-flex justify-content-center align-items-center text-center'>
										<h2 className='text7    '>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</h2>
									</div>

									<div class='d-flex justify-content-center align-items-center'>
										<Button className='button3 buttonfont '>Learn more</Button>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
				<Container fluid>
					<Row className='row3 '>
						<Col className='col8 py-5'>
							<div class='d-flex justify-content-center'>
								<img
									className='img5 img img-fluid'
									src='assets/images/lotus@2x.png'
									height='46'
									width='52'
									alt='lotus'
								/>
							</div>
							<div class='d-flex justify-content-center mt-3 text-center'>
								{' '}
								<p className='text3 text8'>
									OUR PROGRAM OFFERS DETOX ORGANIC FOOD.
								</p>
							</div>
							<div class='d-flex justify-content-center mt-3 text-center'>
								<h1 className='text4 text9'>
									Enjoy The Taste Of Eating Right.
								</h1>
							</div>
							<div class='d-flex justify-content-center mt-1 mb-5'>
								<img
									className='img7 img img-fluid  '
									src='assets/images/sea.png'
									alt='sea line'
								/>
							</div>
							<div class=' text-center  mt-4 '>
								<p className='text5 text10 '>
									We do not use meat, dairy, salt and sugar in our dishes. Only
									organic vegetables and fruits with a variety of spices.
									Nourishment depends on our nutritionist’s appointment . We can
									discuss this before your arrival at our center.
								</p>
							</div>

							<img
								className='img6 img img-fluid mt-0'
								src='assets/images/AdobeStock_310158702-2048x621-removebg-preview.png'
								width='100%'
								alt='sea line'
							/>
							<div class='d-flex justify-content-center mt-0'>
								<Button className='button  button4 buttonfont'>
									LEARN MORE
								</Button>
							</div>
						</Col>
					</Row>
				</Container>
				<Container fluid>
					<Row className='row4 '>
						<Col className='col9 py-5'>
							<div class='d-flex justify-content-center '>
								<img
									className='img8 img img-fluid mb-4'
									src='assets/images/lotus1@2x.png'
									height='46'
									width='52'
									alt='lotus'
								/>
							</div>

							<div class='d-flex justify-content-center align-items-center text-center'>
								<h1 className='text11 mb-4'>
									Ultimate Relaxation
									<h1 className='text11'>For Your Body & Soul.</h1>
								</h1>
							</div>

							<div class='d-flex justify-content-center '>
								<Button className='button3  button5  buttonfont mb-4'>
									BOOK NOW
								</Button>
							</div>
						</Col>
					</Row>
				</Container>

				<Container fluid>
					{' '}
					<Row className='row5 '>
						<Col
							xs={{ size: 12, offset: 0 }}
							sm={{ size: 3, offset: 0 }}
							md={{ size: 5, offset: 0 }}
							className='py-5 pl-5'
						>
							<p className='text3 mt-5 ml-5'>GALLERY</p>
							<h1 className='text4 ml-5'>Your Happy Place.</h1>
						</Col>
						<Col
							xs={{ size: 8, offset: 0 }}
							sm={{ size: 4, offset: 2 }}
							md={{ size: 4, offset: 3 }}
							className='pt-5 pl-4'
						>
							<Button className='button buttonfont mt-sm-5 ml-5'>
								VIEW ALL
							</Button>
						</Col>
					</Row>
					<GallerySlides />
				</Container>

				<Footer />
			</div>
		);
	}
}
export default HomeScreen;
