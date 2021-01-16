import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';

const breakPoints = [
	//width values means dividing the entire screen size into multiple prdefined widths with bootstrap grid sys.
	{ width: 1, itemsToShow: 1 },
	//above mentioned 1 slide will be showen below from 550+120=670
	{ width: 550, itemsToShow: 1 },
	//above mentioned 1 slide will be showen below  from 768+120 and 2 slides above from this width.
	{ width: 768, itemsToShow: 2 },
	//above mentioned 2 slide will be showen below from 1200+120=670
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
						// height='423'
						// width='759'
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/yoga-PHNNASZ.png'
						// height='423'
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/Therapeutic-Massage (1) (1) (1) (1).png'
						// height='423'
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/woman-enjoys-spa-in-geothermal-hot-spring-PJEKW7B.png'
						// height='423'
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/interior-of-wooden-sauna-bath-JTAWVG9.png'
						// height='423'
						// width='759'
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className='img img-fluid'
						src='assets/images/yoga-PHNNASZ.png'
						// height='423'
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/Therapeutic-Massage (1) (1) (1) (1).png'
						// height='423'
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/woman-enjoys-spa-in-geothermal-hot-spring-PJEKW7B.png'
						// height='423'
						alt='lotus'
					/>
				</Item>
			</Carousel>
			<Carousel breakPoints={breakPoints}>
				<Item>
					<img
						className='img img-fluid'
						src='assets/images/Therapeutic-Massage (1) (1) (1) (1).png'
						// height='423'
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className='img img-fluid'
						src='assets/images/woman-enjoys-spa-in-geothermal-hot-spring-PJEKW7B.png'
						// height='423'
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className='img img-fluid'
						src='assets/images/yoga-PHNNASZ.png'
						// height='423'
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className='img img-fluid'
						src='assets/images/interior-of-wooden-sauna-bath-JTAWVG9.png'
						// height='423'
						// width='759'
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/Therapeutic-Massage (1) (1) (1) (1).png'
						// height='423'
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/woman-enjoys-spa-in-geothermal-hot-spring-PJEKW7B.png'
						// height='423'
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className=' img img-fluid'
						src='assets/images/yoga-PHNNASZ.png'
						// height='423'
						alt='lotus'
					/>
				</Item>
				<Item>
					<img
						className='img img-fluid'
						src='assets/images/interior-of-wooden-sauna-bath-JTAWVG9.png'
						// height='423'
						// width='759'
						alt='lotus'
					/>
				</Item>
			</Carousel>
		</div>
	);
};

export default GallerySlides;
