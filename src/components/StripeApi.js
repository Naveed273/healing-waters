import React,{useState} from 'react';
import { toast } from 'react-toastify';
import {
	
	CardText,
	
	Form,
	FormGroup,
	Input,
	Label,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Row,
} from 'reactstrap';

import 'react-toastify/dist/ReactToastify.css';
import {Card, Col, Container} from 'react-bootstrap';
import room_img from '../assets/room_img.png';
import Button from '@material-ui/core/Button';
import ServiceTransferList from './ServiceTransferList';
//import CheckOut from './CheckOut'
import { Link } from 'react-router-dom';

toast.configure();

const Stripe = (props) => {
     const { className } = props;
    const [modal1, setModal1] = useState(false);
    const toggle1 = () => setModal1(!modal1);
    const programs = props.location.state.programs;
    let services = props.location.state.services;
    const selectedRoomNumber = props.match.params.room;
    const selectedProgramType = `${props.match.params.nights} DAYS`;
    const [totPrice, SetTotPrice] = useState(0);
    const [selectedServices, setSelectedServices] = useState([]);

    const programDefaultServices = programs.find((program) => program.type === selectedProgramType).services


    const hashService = ({id, name, price}) => `${id} ${name} ${price}`;

    const hashSet = new Set(programDefaultServices.map(hashService));

    services = services.filter(p => !hashSet.has(hashService(p)));


    

    return (
			<Container>
				<Col className='flex-row align-items-center' lg={8}>
					<Card>
						<Card.Img variant={'top'} src={room_img} />
						<Card.Body>
							<Card.Title>
								<strong>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; All
									Services&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									{`${selectedProgramType} Program Services`}{' '}
								</strong>
							</Card.Title>
							<Card.Subtitle>
								{!services && !programDefaultServices ? null : (
									<ServiceTransferList
										allServices={services}
										programDefaultServices={programDefaultServices}
										//this ftn is being send as a prop to be called from the child component with an argument(argument=total price which is needed to received from this child)
										totalPrice={(price) => {
											SetTotPrice(price);
										}}
										//this ftn is being send as a prop to be called from the child component with an argument(argument=total price which is needed to received from this child)

										selectedServices={(rightServices) => {
											setSelectedServices(rightServices);
											//console.log({ selectedServices });
										}}
									/>
								)}
							</Card.Subtitle>
						</Card.Body>
						<Card.Footer>
							{/*              <Link
                            to={{
                                pathname: `/checkOut`,
                                state: {
                                    programType: selectedProgramType,
                                    extraServices: selectedServices,
                                    roomNumber: selectedRoomNumber,
                                    totalAmount: totPrice,
                                },
                            }}
                        >
                            <Button
                                className='float-right'
                                variant={'contained'}
                                color={'primary'}
                            >
                                Check Out
                            </Button>
                        </Link>  */}
							<Button
								className='float-right'
								variant={'contained'}
                            color={'primary'}
                            onClick={toggle1}
							>
								Check Out
							</Button>
						</Card.Footer>
					</Card>
				</Col>
				<Modal size='lg' isOpen={modal1} toggle={toggle1} className={className}>
					<ModalHeader toggle={toggle1}>hi</ModalHeader>
					<ModalBody>how</ModalBody>
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
			</Container>
		);
};
export default Stripe;
