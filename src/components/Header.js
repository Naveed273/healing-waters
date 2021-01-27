import { Container, Row, Col } from 'reactstrap';
import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	
} from 'reactstrap';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Container fluid>
				<Row className='top-row justify-content-center'>
					<Col xs='auto' className='top-text'>
						Ready to live a healthier and more balanced life? Call (858)
						215-1645
					</Col>
				</Row>
				<Row>
					<Navbar color='white' light expand='xl' className='navbar'>
						<NavbarBrand href='/'>
							<img
								src='assets/images/logo.png'
								height='66'
								width='160'
								alt='Healing Waters'
							/>
						</NavbarBrand>
						<NavbarToggler onClick={toggle} />
						<Collapse isOpen={isOpen} navbar>
							<Nav className=' ml-auto' navbar>
								<NavItem className='navitem' active>
									<NavLink className='nav-link' href='/link-0' active>
										Home
									</NavLink>
								</NavItem>
								<NavItem className='navitem'>
									<NavLink href='/link-1'>Program</NavLink>
								</NavItem>
								<NavItem className='navitem'>
									<NavLink href='/link-2'>Accommodation & Fee</NavLink>
								</NavItem>
								<NavItem className='navitem'>
									<NavLink href='/link-3'>Nourishment</NavLink>
								</NavItem>
								<NavItem className='navitem'>
									<NavLink href='/link-3'>Services</NavLink>
								</NavItem>
								<NavItem className='navitem'>
									<NavLink href='/link-5'>About us</NavLink>
								</NavItem>
								<NavItem className='navitem'>
									<NavLink href='/link-6'>Contact us</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
				</Row>
			</Container>
		</div>
	);
};
export default Header;
