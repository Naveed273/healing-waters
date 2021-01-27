import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';

const breakPoints = [
	
	{ width: 1, itemsToShow: 1 },
	
	{ width: 550, itemsToShow: 1 },
	
	{ width: 768, itemsToShow: 2 },
	
	{ width: 1200, itemsToShow: 3 },
];

const GallerySlides = () => {
	return (
		<div>
			<Carousel breakPoints={breakPoints}>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/interior-of-wooden-sauna-bath-JTAWVG9.png'
						
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/yoga-PHNNASZ.png'
						
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/Therapeutic-Massage (1) (1) (1) (1).png'
					
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/woman-enjoys-spa-in-geothermal-hot-spring-PJEKW7B.png'
						
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/interior-of-wooden-sauna-bath-JTAWVG9.png'
						
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className='img img-fluid'
						src='assets/images/yoga-PHNNASZ.png'
						
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/Therapeutic-Massage (1) (1) (1) (1).png'
						
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/woman-enjoys-spa-in-geothermal-hot-spring-PJEKW7B.png'
						
						alt='lotus'
					/>
				</Item>
			</Carousel>
			<Carousel breakPoints={breakPoints}>
				<Item>
					<img
						className='img img-fluid'
						src='assets/images/Therapeutic-Massage (1) (1) (1) (1).png'
						
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className='img img-fluid'
						src='assets/images/woman-enjoys-spa-in-geothermal-hot-spring-PJEKW7B.png'
						
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className='img img-fluid'
						src='assets/images/yoga-PHNNASZ.png'
						
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className='img img-fluid'
						src='assets/images/interior-of-wooden-sauna-bath-JTAWVG9.png'
						
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/Therapeutic-Massage (1) (1) (1) (1).png'
					
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/woman-enjoys-spa-in-geothermal-hot-spring-PJEKW7B.png'
						
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/yoga-PHNNASZ.png'
					
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className='img img-fluid'
						src='assets/images/interior-of-wooden-sauna-bath-JTAWVG9.png'
						
						alt='lotus'
					/>
				</Item>
			</Carousel>
		</div>
	);
};

export default GallerySlides;
