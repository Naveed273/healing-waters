import React, {useState} from 'react';
import useRoomsList from '../hooks/useRoomsList';
import useRoomDetails from '../hooks/useRoomDetails';
import useRoomStatus from '../hooks/useRoomStatus';
import usePrograms from '../hooks/usePrograms';
import {Card} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import room_img from '../assets/room_img.png';

import {
    Button,
    CardText,
    Col,
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
import {Link} from 'react-router-dom';
import CustomInput from './CustomInput';


//var DatePicker = require('reactstrap-date-picker');

const AvailabilityForm = (props) => {
    const {className} = props;
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const toggle1 = () => setModal1(!modal1);
    const toggle2 = () => setModal2(!modal2);
    const toggle3 = () => setModal3(!modal3);

    const [pickedRoom, setPickedRoom] = useState('');
    const [checkedIn, setCheckedIn] = useState(new Date());
    const [checkedOut, setCheckedOut] = useState(new Date());
    const [nights, setNights] = useState('');

    const [rooms, searchApi, errorMessage1] = useRoomsList();
    const [roomDatail, roomDetailApi, errorMessage2] = useRoomDetails();
    const [roomStatus, roomStatusApi, errorMessage3] = useRoomStatus();
    const [programs, programsApi, errorMessage4] = usePrograms();
    console.log(programs);

    function Program({pname, ptype, pservices}) {
        console.log('Program ftn', {pname, ptype, pservices});
        return (
            <Col
                xs={{size: 10, offset: 1}}
                sm={{size: 6, offset: 0}}
                lg={{size: 4, offset: 0}}
                className='mb-4 mx-lg-5'
            >
                <Card style={{width: '14rem'}}>
                    <Card.Img variant='top' src={room_img}/>
                    <Card.Body className='pl-4'>
                        <Card.Title>{`${ptype} PROGRAM`} </Card.Title>

                        {pservices.map((service) => {
                            return (
                                <div key={service.id}>
                                    <Card.Text className='my-0 mx-4'>
                                        {`${service.name} for $${service.price}`}{' '}
                                    </Card.Text>
                                </div>
                            );
                        })}

                        <Button
                            className='buttonfont mt-4 mx-4'
                            color='primary'
                            onClick={() =>
                                ptype === '7 DAYS'
                                    ? (setCheckedOut(
                                    new Date(checkedOut.setDate(checkedIn.getDate() + 7))
                                    ),
                                        setNights(7),
                                        toggle3())
                                    : (setCheckedOut(
                                    new Date(checkedOut.setDate(checkedIn.getDate() + 2))
                                    ),
                                        setNights(2),
                                        toggle3())
                            }
                        >
                            Select Program
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    }

    function ServicesPrograms(programs) {
        //console.log('ServicesPrograms=',programs)
        return (
            <Row>
                {programs.map((program) => {
                    return (
                        <Program
                            key={program.id}
                            pname={program.name}
                            ptype={program.type}
                            pservices={program.services}
                        />
                    );
                })}
            </Row>
        );
    }

    function Room({number, beds, capacity}) {
        const bed_or_beds = beds === 1 ? 'bed' : 'beds'
        const person_or_people = capacity === 1 ? 'person' : 'people'
        return (
            <Col
                xs={{size: 6, offset: 1}}
                className='mb-4'
                sm={{size: 6, offset: 0}}
                lg={{size: 4, offset: 0}}
            >
                <Card style={{width: '14.5rem'}}>
                    <Card.Img variant='top' src={room_img} width='100%'/>
                    <Card.Header style={{fontWeight: 'bold'}}>
                        <span>Room {number}</span>
                        <CardText>
                            <small className="text-muted">
                                {beds} <strong>{bed_or_beds}</strong> for {capacity} <strong>{person_or_people}</strong>
                            </small>
                        </CardText>
                        <Button
                            className="mr-lg-4 w-100"
                            variant='primary'
                            color='primary'
                            onClick={() => {
                                setPickedRoom(number);
                                toggle1();
                            }}
                        >
                            Pick Room
                        </Button>
                    </Card.Header>
                </Card>
            </Col>
        );
    }

    function RoomsList(rooms) {
        return (
            <Row>
                {rooms.map((room) => {
                    return (
                        <Room
                            key={room.id}
                            number={room.number}
                            capacity={room.capacity}
                            beds={room.beds}
                        />
                    );
                })}
            </Row>
        );
    }

    const SubmitHandler = (evt) => {
        evt.preventDefault();
        roomStatusApi({
            pickedRoom: pickedRoom,
            checkedIn: checkedIn,
            checkedOut: checkedOut,
            nights: nights,
        });
        toggle2();
    };
    return (
        <Row className=' align-items-end'>
            <Col xs={{size: 3}}></Col>
            <Col className=' col2 ' xs={{size: 9}}>
                <h1 className='availability ml-lg-5 pl-lg-5'>Check Availability :</h1>
                <Form onSubmit={SubmitHandler} inline>
                    <Row>
                        <Col xs='8' sm='3' md='4' lg={{size: 3, offset: 1}} xl='2'>
                            <FormGroup>
                                <Label for='pickRoom'>Pick room</Label>

                                <Input
                                    type='text'
                                    name='text'
                                    id='pickRoom'
                                    placeholder='&#xf21d;   Pick a room'
                                    size={13}
                                    value={pickedRoom}
                                    onChange={(e) => setPickedRoom(e.target.value)}
                                    onClick={() => {
                                        searchApi();
                                        toggle1();
                                    }}
                                ></Input>
                            </FormGroup>
                        </Col>
                        <Col
                            xs='6'
                            sm={{size: 5, offset: 3}}
                            md={{size: 4, offset: 2}}
                            lg={{size: 3, offset: 3}}
                            xl={{size: 2, offset: 0}}
                        >
                            <FormGroup>
                                <Label for='checkedIn'>Check In</Label>
                                <DatePicker
                                    id='checkedIn'
                                    selected={checkedIn}
                                    onChange={(date) => {
                                        setCheckedIn(date);
                                    }}
                                    minDate={new Date()}
                                    customInput={<CustomInput/>}
                                />
                            </FormGroup>
                        </Col>
                        <Col
                            xs='7'
                            sm='5'
                            md='4'
                            lg={{size: 3, offset: 1}}
                            xl={{size: 2, offset: 0}}
                        >
                            <FormGroup>
                                <Label for='checkedOut'>Check Out</Label>
                                <DatePicker
                                    id='checkedOut'
                                    selected={checkedOut}
                                    onChange={(date) => {
                                        setCheckedOut(date);
                                    }}
                                    minDate={new Date()}
                                    customInput={<CustomInput/>}
                                />
                            </FormGroup>
                        </Col>
                        <Col
                            xs='8'
                            sm={{size: 3, offset: 1}}
                            md={{size: 3, offset: 2}}
                            lg={{size: 3, offset: 3}}
                            xl={{size: 2, offset: 0}}
                        >
                            <FormGroup>
                                <Label for='nights'>Nights:</Label>
                                <Input
                                    type='text'
                                    name='text'
                                    id='nights'
                                    size={13}
                                    value={nights}
                                    onChange={(e) => setNights(e.target.value)}
                                    placeholder='&#xf186; 7 Nights'
                                    onClick={() => {
                                        programsApi();
                                        toggle3();
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        <Col
                            xs={{size: 6, offset: 3}}
                            sm={{size: 6, offset: 4}}
                            md={{size: 4, offset: 4}}
                            lg={{size: 6, offset: 4}}
                            xl={{size: 2, offset: 0}}
                            className='mt-xl-4'
                        >
                            <Button
                                type='submit'
                                value='CHECK NOW'
                                className='check-button buttonfont '
                            >
                                CHECK NOW
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Modal size='lg' isOpen={modal1} toggle={toggle1} className={className}>
                <ModalHeader toggle={toggle1}>All Rooms</ModalHeader>
                <ModalBody>{RoomsList(rooms)}</ModalBody>
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
            <Modal size='lg' isOpen={modal2} toggle={toggle2} className={className}>
                <ModalHeader toggle={toggle2}>Room Status</ModalHeader>
                {roomStatus === 'available' ? (
                    <ModalBody>
                        Room is available.Do you want to reserve it?{'     '}
                        <Link to={`/StripeApi`}>
                            <Button
                                className='buttonfont'
                                color='primary'
                                onClick={() => {
                                    toggle2();
                                }}
                            >
                                Click Here!
                            </Button>
                        </Link>
                    </ModalBody>
                ) : (
                    <ModalBody>
                        'Sorry!this room will not be avaiable for your specified time,
                        please pick another room'{' '}
                    </ModalBody>
                )}
                <ModalFooter>
                    <Button
                        color='danger'
                        onClick={() => {
                            toggle2();
                        }}
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            <Modal size='lg' isOpen={modal3} toggle={toggle3} className={className}>
                <ModalHeader toggle={toggle3}>Our two services programs</ModalHeader>
                <ModalBody>{ServicesPrograms(programs)}</ModalBody>
                <ModalFooter>
                    <Button
                        color='danger'
                        onClick={() => {
                            toggle3();
                        }}
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </Row>
    );

};
export default AvailabilityForm;
