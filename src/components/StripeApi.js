import React from 'react';
import {toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {Card, Col, Container} from 'react-bootstrap';
import room_img from '../assets/room_img.png';
import Button from '@material-ui/core/Button';
import ServiceTransferList from './ServiceTransferList';

toast.configure();

const Stripe = (props) => {
    const programs = props.location.state.programs;
    let services = props.location.state.services;
    const selectedRoomNumber = props.match.params.room;
    const selectedProgramType = `${props.match.params.nights} DAYS`;

    const programDefaultServices = programs.find((program) => program.type === selectedProgramType).services


    const hashService = ({id, name, price}) => `${id} ${name} ${price}`;

    const hashSet = new Set(programDefaultServices.map(hashService));

    services = services.filter(p => !hashSet.has(hashService(p)));


    const [room] = React.useState({
        number: '2',
        price: 20,
        beds: 2,
        capacity: 2,
    });

    return (
        <Container>
            <Col className='flex-row align-items-center' lg={8}>
                <Card>
                    <Card.Img variant={'top'} src={room_img}/>
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
                                />
                            )}
                        </Card.Subtitle>
                    </Card.Body>
                    <Card.Footer>
                        <Button
                            className='float-right'
                            variant={'contained'}
                            color={'primary'}
                            onClick={console.log("Services", {services, programDefaultServices})}
                        >
                            Check Out
                        </Button>
                    </Card.Footer>
                </Card>
            </Col>
        </Container>
    );
};
export default Stripe;
