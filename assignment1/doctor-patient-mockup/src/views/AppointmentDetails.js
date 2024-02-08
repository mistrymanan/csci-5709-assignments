import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Container} from "react-bootstrap";

const AppointmentDetails = ({ appointment}) => {
    let {id} = useParams();
    console.log(id);
    // let selectedPatient = patientData.filter(patient =>
    //     patient.id === Number(id)
    // )[0];
    // console.log(selectedPatient);
    const navigate = useNavigate();

    const handleShowMedications = () => {
        navigate(`/patient/${id}/medicalhistories/appointments/${appointment.id}/medications`);
    };
    return (
        <Container>
            <h2>Appointment Details</h2>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>

            <Button variant="primary" onClick={() => handleShowMedications()}>
                Prescriptions
            </Button>
        </Container>
    );
};
export default AppointmentDetails;