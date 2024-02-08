import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Container} from "react-bootstrap";

const MedicalHistory = ({ patientData }) => {
    let {id} = useParams();
    console.log(id);
    let selectedPatient = patientData.filter(patient =>
        patient.id === Number(id)
    )[0];
    console.log(selectedPatient);
    const navigate = useNavigate();

    const handleShowAppointments = () => {
        navigate(`/patient/${id}/medicalhistories/appointments`);
    };
    const loremIpsumMedicalHistory = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis ac orci facilisis fermentum.';

    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center">
                <h1>{selectedPatient.name}'s Medical History</h1>
                <Button variant="primary" onClick={handleShowAppointments}>
                    Show Appointments
                </Button>
            </div>
            <p>{loremIpsumMedicalHistory}</p>
            <p>{selectedPatient.medicalHistory}</p>
        </Container>
    );
};

export default MedicalHistory;