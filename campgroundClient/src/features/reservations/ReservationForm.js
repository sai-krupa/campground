import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Label,
    FormGroup
} from 'reactstrap';
import { validateReservationForm } from '../../utils/validateReservationForm';
import { postReservation } from '../campsites/campsitesSlice';

const ReservationForm = ({ campsiteId }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const reservation = {
            campsiteId: campsiteId,
            rating: values.rating,
            text: values.reservationText
        };
        dispatch(postReservation(reservation));
        setModalOpen(false);
    };

    return (
        <div className='mt-3'>
            <Button outline onClick={() => setModalOpen(true)}>
                <i className='fa fa-pencil fa-lg' /> Add Reservation
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Add Reservation
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            rating: undefined,
                            reservationText: ''
                        }}
                        onSubmit={handleSubmit}
                        validate={validateReservationForm}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='rating'>Rating</Label>
                                <Field
                                    name='rating'
                                    as='select'
                                    className='form-control'
                                >
                                    <option>Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Field>
                                <ErrorMessage name='rating'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='reservationText'>Reservation</Label>
                                <Field
                                    name='reservationText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default ReservationForm;
